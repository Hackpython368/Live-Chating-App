# Importing all required Module 

from flask import Flask,render_template,redirect,request,session,abort
from flask_socketio import SocketIO,emit
from flask_login import login_required,LoginManager,UserMixin,current_user,login_user
from sqlalchemy import create_engine,text
from sqlalchemy.pool import NullPool
import os
from dotenv import load_dotenv  # Import to help load .env files 
import json
import uuid # Imported to generate unique id for each message by the user 
from datetime import datetime 
import google_auth_oauthlib.flow
from googleapiclient.discovery import build
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'


# This Function help to load the .env variable to configure with system variable which help to loaded by the python os.getenv() function .
load_dotenv()


# making conncection with the database using the URL .
_db_engine = create_engine(os.getenv("URL"),poolclass=NullPool,connect_args={'sslmode':'require'})


# Creating JSON file to pass in the google Auth .
with open('client_secret.json','w') as f:
    data = json.loads(os.getenv("GOOGLE"))
    json.dump(data,f)




# creating Flow for which take client secret and scopes of and redirect uri
def flow_create(redirection_uri="http://localhost:5000/callback"):
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file('client_secret.json',
        scopes=[
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'openid'
        ])

    flow.redirect_uri = redirection_uri

    return flow


# A dict which hold live user along detials
live_users = {}

user_last_seen = {}

# Binding each user as client help to manage them easily
class Client(UserMixin):

    def __init__(self,id):
        self.id = id



app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRETKEY')


socket = SocketIO(app)
login_manage = LoginManager()
login_manage.init_app(app)
login_manage.login_view = 'login'




@login_manage.user_loader
def load_user(id):
    return Client(id)



@app.route('/',methods=['GET','POST'])
def login():
    if request.method=="POST":
        flow = flow_create('https://live-chating-app.onrender.com/callback')
        authorization_url, state = flow.authorization_url(
                access_type = "offline",
                include_granted_scopes='true',
                prompt = 'consent'

            )
            
        session['state'] = state 

        return redirect(authorization_url)
        
    return render_template('index.html')



# This route handle the google login process when return the app .
@app.route('/callback')
def callback():
    flow = flow_create('https://live-chating-app.onrender.com/callback')
    
    flow.fetch_token(authorization_response=request.url)

    if not session['state'] == request.args['state']:
        return abort(401)
    
    credentials = flow.credentials

    user = build(
        "oauth2",
        "v2",
        credentials=credentials
    )

    user_info = user.userinfo().get().execute()

    user = Client(user_info['id'])


    login_user(user)
    
    with _db_engine.connect() as f:
        result = f.execute(text(f"select name,email from user_info where id='{user_info['id']}'"))
        if result.fetchone():
            live_users[current_user.get_id()] = {
                'name' : user_info['name'],
                'email': user_info['email'],
                'status': 'online'
            }
        else:
            f.execute(text(f"INSERT INTO USER_INFO (ID, NAME,EMAIL,PROFILE) VALUES('{user_info['id']}','{user_info['name']}','{user_info['email']}','{user_info['picture']}');"))
            f.commit()

    
    return redirect('/chat')



@app.route('/chat')
@login_required
def chat():
    try:
        username = live_users[current_user.get_id()]['name']
    except:
        with _db_engine.connect() as f:
            result = f.execute(text(f"select name,email from user_info where id='{current_user.get_id()}';"))
            data = result.fetchone()
            if not data:
                return abort(401)
            else:
                username,email = data
                live_users[current_user.get_id()]={
                    'name' : username,
                    'email': email
                }
            
    return render_template('chat.html',username=username)
    

######################
# SOCKET connections #
######################


@socket.on('connect')
def handle_connection():
    if current_user.get_id() not in live_users.keys():
        with _db_engine.connect() as f:
            result = f.execute(text(f"select name,email from user_info where id='{current_user.get_id()}';"))
            data = result.fetchone()
            username,email = data
            live_users[current_user.get_id()]={
                'name' : username,
                'email': email
            }
        data = {
            'user': live_users[current_user.get_id()]['name'],
            'type': 'connection'
        }
        emit('connection-found',data,broadcast=True)
    else:
        with _db_engine.connect() as f:
            result = f.execute(text("SELECT NAME FROM USER_INFO"))
            data = result.fetchall()
            user = []
            for i in data:
                user.append(i[0])

        data = {
            'connection' : user
        }
        emit('add-users',data,broadcast=True)

@socket.on('user-typing')
def handle_your_typing():
    data = {
        'user': live_users[current_user.get_id()]['name'],
    }
    emit("handle-typing",data,broadcast=True)


messages_store = {}

@socket.on('send_msg')
def handle_msg(msg):
    message_data = {
        'id': str(uuid.uuid4()),
        'msg': msg,
        'username': live_users[current_user.get_id()]['name'],
        'timestamp': datetime.now().strftime('%H:%M'),
        'edited': False
    }
    messages_store[message_data['id']] = message_data
    emit('recv', message_data, broadcast=True)

@socket.on('edit_msg')
def handle_edit(data):
    message_id = data.get('id')
    new_msg = data.get('msg')
    username = live_users[current_user.get_id()]['name']
    
    if message_id in messages_store and messages_store[message_id]['username'] == username:
        messages_store[message_id]['msg'] = new_msg
        messages_store[message_id]['edited'] = True
        emit('msg_edited', {
            'id': message_id,
            'msg': new_msg,
            'edited': True
        }, broadcast=True)

@socket.on('delete_msg')
def handle_delete(data):
    message_id = data.get('id')
    username = live_users[current_user.get_id()]['name']
    
    if message_id in messages_store and messages_store[message_id]['username'] == username:
        del messages_store[message_id]
        emit('msg_deleted', {
            'id': message_id
        }, broadcast=True)

@socket.on('heartbeat')
def user_status():
    user_last_seen[current_user.get_id()] = datetime.now().timestamp()
    emit('status',{'status':'online','user':(live_users[current_user.get_id()]['name']).upper(),'color':'green'},broadcast=True)


@socket.on('check-active-user')
def check_active_user():
    for user in user_last_seen:
        if datetime.now().timestamp() - user_last_seen[user]>=10:
            emit('status',{'status':'offline','user':(live_users[user]['name']).upper(),'color':'red'},broadcast=True)



if __name__=="__main__":
    socket.run(app,host="0.0.0.0",port=5000,allow_unsafe_werkzeug=True)

from flask import Flask,render_template,redirect,request,session,abort
from flask_socketio import SocketIO,emit
from flask_login import login_required,LoginManager,UserMixin,current_user,login_user
from sqlalchemy import create_engine,text
import os
from dotenv import load_dotenv
import json

load_dotenv()



_db_engine = create_engine(os.getenv("URL"),pool_pre_ping=True,connect_args={'connect_timeout':10})
with open('client_secret.json','w') as f:
    data = json.loads(os.getenv("GOOGLE"))
    json.dump(data,f)

conn = _db_engine.connect()


import os
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"


import google.oauth2.credentials
import google_auth_oauthlib.flow
from googleapiclient.discovery import build



def flow_create(redirection_uri="https://live-chating-app.onrender.com/callback"):
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file('client_secret.json',
        scopes=[
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'openid'
        ])

    flow.redirect_uri = redirection_uri

    return flow








live_users = {}









import uuid
from datetime import datetime 




class Client(UserMixin):

    def __init__(self,id):
        self.id = id



app = Flask(__name__)

app.config['SECRET_KEY'] = 'secret_key_app'


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
        btnType = request.form.get('btn-type')
        if btnType == 'google-sign-in':
            flow = flow_create()
            authorization_url, state = flow.authorization_url(
                access_type = "offline",
                include_granted_scopes='true',
                prompt = 'consent'

            )
            
            session['state'] = state 

            return redirect(authorization_url)
        
        
        
    return render_template('index.html')


@app.route('/callback')
def callback():
    flow = flow_create()
    
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

    print(user_info)
    user = Client(user_info['id'])


    login_user(user)
    try:
        conn.execute(text(f"INSERT INTO USER_INFO (ID, NAME,EMAIL,PROFILE) VALUES('{user_info['id']}','{user_info['name']}','{user_info['email']}','{user_info['picture']}');"))
        conn.commit()
    except:
        print("dublicate")
    live_users[current_user.get_id()] = {
        'name' : user_info['name'],
        'email': user_info['email']
    }
    
    return redirect('/chat')


@app.route('/chat')
@login_required
def chat():
    try:
        username = live_users[current_user.get_id()]['name']
        print("username : ",username)
    except:
        result = conn.execute(text(f"select name,email from user_info where id='{current_user.get_id()}';"))
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
    



@socket.on('connect')
def handle_connection(_):
    user_connected = []
    for i in live_users.keys():
        user_connected.append(live_users[i]['name'])
    data = { 'user': live_users[current_user.get_id()]['name'],
            'type': 'connection',
            'connection': user_connected}
    emit('connection-found',data,broadcast=True)

@socket.on('user-typing')
def handle_your_typing(user):
    data = { 'user': live_users[current_user.get_id()]['name'],
            'type': 'typing'}
    emit("connection-found",data,broadcast=True)


messages_store = {}

@socket.on('send_msg')
def handle_msg(msg):
    message_id = str(uuid.uuid4())
    timestamp = datetime.now().strftime('%H:%M')
    message_data = {
        'id': message_id,
        'msg': msg,
        'username': live_users[current_user.get_id()]['name'],
        'timestamp': timestamp,
        'edited': False
    }
    messages_store[message_id] = message_data
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



if __name__=="__main__":
    socket.run(app,host="0.0.0.0",port=5000,allow_unsafe_werkzeug=True,debug=True)
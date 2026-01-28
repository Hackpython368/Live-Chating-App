from flask import Flask,render_template,redirect,request,session,abort
from flask_socketio import SocketIO,emit
from flask_login import login_required,LoginManager,UserMixin,current_user,login_user


import os
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"


import google.oauth2.credentials
import google_auth_oauthlib.flow
from googleapiclient.discovery import build



def flow_create(redirection_uri="http://localhost:5000/callback"):
    flow = google_auth_oauthlib.flow.Flow.from_client_secrets_file('client_secret.json',
        scopes=[
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email',
            'openid'
        ])

    flow.redirect_uri = redirection_uri

    return flow






















class Client(UserMixin):

    def __init__(self,username):
        self.id = username
        self.username = username


app = Flask(__name__)

app.config['SECRET_KEY'] = 'secret_key_app'


socket = SocketIO(app)
login_manage = LoginManager()
login_manage.init_app(app)
login_manage.login_view = 'login'




@login_manage.user_loader
def load_user(username):
    return Client(username)




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
    user = Client(user_info['name'])

    login_user(user)

    
    return redirect('/chat')


@app.route('/chat')
@login_required
def chat():

    return render_template('chat.html',username=current_user.get_id())



@socket.on('connect')
def handle_connection():
    data = { 'user': current_user.get_id(),
            'type': 'connection'}
    emit('connection-found',data,broadcast=True)

@socket.on('user-typing')
def handle_your_typing(user):
    data = { 'user': current_user.get_id(),
            'type': 'typing'}
    emit("connection-found",data,broadcast=True)


@socket.on('send_msg')
def handle_msg(msg):
    emit('recv',{'msg':msg,'username':current_user.get_id()},broadcast=True)




if __name__=="__main__":
    socket.run(app,debug=True)


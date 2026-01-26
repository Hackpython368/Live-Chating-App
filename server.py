from flask import Flask,render_template,redirect,request
from flask_socketio import SocketIO,emit
from flask_login import login_required,LoginManager,UserMixin,current_user,login_user
import uuid
from datetime import datetime 




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
        username = request.form.get('username')

        user = Client(username)

        login_user(user)

        return redirect('/chat')
    return render_template('index.html')



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


# Store messages in memory (in production, use a database)
messages_store = {}

@socket.on('send_msg')
def handle_msg(msg):
    message_id = str(uuid.uuid4())
    timestamp = datetime.now().strftime('%H:%M')
    message_data = {
        'id': message_id,
        'msg': msg,
        'username': current_user.get_id(),
        'timestamp': timestamp,
        'edited': False
    }
    messages_store[message_id] = message_data
    emit('recv', message_data, broadcast=True)

@socket.on('edit_msg')
def handle_edit(data):
    message_id = data.get('id')
    new_msg = data.get('msg')
    username = current_user.get_id()
    
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
    username = current_user.get_id()
    
    if message_id in messages_store and messages_store[message_id]['username'] == username:
        del messages_store[message_id]
        emit('msg_deleted', {
            'id': message_id
        }, broadcast=True)



if __name__=="__main__":
    socket.run(app,host="0.0.0.0",port=5000,allow_unsafe_werkzeug=True)
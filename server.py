from flask import Flask,render_template,redirect,request
from flask_socketio import SocketIO,emit
from flask_login import login_required,LoginManager,UserMixin,current_user,login_user

count = 0




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

        print("Found POST request")

        return redirect('/chat')
    return render_template('index.html')



@app.route('/chat')
@login_required
def chat():
    print("User authenticated :",current_user.is_authenticated,current_user.get_id())
    return render_template('chat.html',username=current_user.get_id())



@socket.on('connect')
def handle_connection():
    global count 
    count += 1
    print(f"{count} Connection Found")
    data = { 'user': current_user.get_id(),
            'type': 'connection'}
    emit('connection-found',data,broadcast=True)
    print(current_user)

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


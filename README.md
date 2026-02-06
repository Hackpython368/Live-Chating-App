# 💬 Live-Chat-App (v2)

Live-Chat-App is a real-time web-based chat application built using **Flask**, **Flask-SocketIO**, and **Flask-Login**.  
The project demonstrates real-time communication, authentication, user session management, and a responsive UI designed for both mobile and desktop environments.

Version 2 introduces user presence tracking, editable messages, improved UI stability, theme customization, and Google authentication.

---

## 🚀 Features

### ✅ Core Features
- 🔐 User authentication system
- 🧠 Session management using Flask-Login
- ⚡ Real-time messaging with WebSockets (Socket.IO)
- 📡 Message broadcasting to connected users
- 👤 Secure user identification using server-side sessions
- ⌨️ Send messages using the Enter key

### 🆕 Version 2 Features
- 🟢 **User Status Indicator**
  - Online / Offline presence tracking
  - Real-time status updates using heartbeat logic

- ✏️ **Editable Messages**
  - Messages can only be edited by the original sender
  - Server-side validation ensures message ownership

- 🎨 **Redesigned UI**
  - Improved layout stability on desktop and mobile devices
  - Better message alignment and responsiveness
  - Cleaner and more consistent chat interface

- 🌗 **Dark / Light Theme Toggle**
  - User-controlled theme switching
  - Improved readability for different environments

- 🔑 **Google Authentication**
  - Secure login using Google OAuth
  - Simplified and faster user onboarding

---
## 📦 Version History

### ✅ v2.0 (Current)
- User online/offline status
- Editable messages (owner-only)
- UI redesign for desktop and mobile stability
- Dark / Light theme toggle
- Google authentication integration

###  v1.0
- Real-time messaging using Flask-SocketIO
- Username-based authentication
- Session management with Flask-Login
- Broadcast messaging

---

## 🛠️ Tech Stack

### Backend
- Python
- Flask
- Flask-SocketIO
- Flask-Login
- Eventlet

### Frontend
- HTML
- CSS (Mobile-first design)
- Vanilla JavaScript
- Socket.IO Client

---

## 📁 Project Structure

```bash
Live-Chat-App/
│
├── server.py
├── requirements.txt
│
├── templates/
│ ├── index.html # Login page
│ └── chat.html # Chat page
│
├── static/
│ └── css/
│ └── style.css 
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/Live-Chat-App.git
cd Live-Chat-App
```

### 2️⃣ Create a virtual environment (recommended)

```python
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
```


### 3️⃣ Install dependencies

```python 
pip install -r requirements.txt
```


### 4️⃣ Run the application
```bash
python server.py
```

### 🌐 Open in Browser

```bash
http://127.0.0.1:5000
```

---
# 🔑 Authentication Flow

- Users authenticate using Google OAuth or username session

- Flask-Login manages user sessions securely

- User identity is stored server-side

- current_user is used in:

- Flask routes

- Socket.IO events

- User identity is never trusted from client-side JavaScript

# 🔄 Real-Time Messaging Flow

```bash
User Login
   ↓
Session Created
   ↓
Socket.IO Connection
   ↓
Message Sent from Client
   ↓
Server identifies current_user
   ↓
Message broadcast to users
```


## 🟢 User Presence System

- Users send periodic heartbeat signals

- Server updates online/offline status

- Status changes are reflected in real time

- Handles reconnect scenarios when network drops

## 📱 Responsive Design

- Mobile-first design approach

- Full-screen chat interface on phones

- Optimized layout for desktop/laptop

- Stable input handling on mobile devices

- Left/right aligned chat bubbles for clarity

## 🚧 Known Limitations

- Messages are not permanently stored in a database

- Broadcast-only chat (no private rooms yet)

- No media support

- Designed primarily for learning and architecture understanding

## 🔮 Future Improvements (v3 Roadmap)

- 🗄️ Database message persistence

- 👥 Private and group chat rooms

- 📎 Media file sharing

- ✔✔ Message delivery and read receipts

- 📞 Call signaling support

- ☁️ Production deployment (Render / Fly.io)

- 🤝 Contributors

---
## 🤝 Contributors

<div align="center">

<table>
<tr>

<td align="center">
<a href="https://github.com/hackpython368">
<img src="https://github.com/hackpython368.png" width="100px;" style="border-radius:50px;" alt="Vidya Prakash Pandey"/>
<br />
<b>Vidya Prakash Pandey</b>
</a>
</td>

<td align="center">
<a href="https://github.com/shishir282006">
<img src="https://github.com/shishir282006.png" width="100px;" style="border-radius:50px;" alt="Contributor Name"/>
<br />
<b>Contributor Tushar Srivastava</b>
</a>
</td>

<td align="center">
<a href="https://github.com/shaluyadav25">
<img src="https://github.com/shaluyadav25.png" width="100px;" style="border-radius:50px;" alt="Contributor Name"/>
<br />
<b>Contributor Shalu Yadav</b>
</a>
</td>

</tr>
</table>

</div>


Want to contribute? Feel free to fork the repository and open a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---
## ✨ Author

Built with ❤️ to learn and demonstrate real-time web communication, authentication, session handling, and WebSocket-based messaging using Flask.
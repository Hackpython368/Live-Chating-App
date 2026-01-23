# 💬 Live-Chat-App

Live-Chat-App is a real-time web-based chat application built using **Flask**, **Flask-SocketIO**, and **Flask-Login**.  
The project demonstrates real-time communication, user session management, and a mobile-first responsive UI.

---

## 🚀 Features

- 🔐 Username-based login system
- 🧠 Session management using Flask-Login
- ⚡ Real-time messaging with WebSockets (Socket.IO)
- 📡 Message broadcasting to all connected users
- 👤 Secure username handling using server-side sessions
- 📱 Mobile-first responsive chat UI
- 💻 Desktop-friendly fallback layout
- ⌨️ Send messages using the Enter key

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
```
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
│ |__ css # Mobile-first styling
|       |___ style.css
| 
│
└── README.md


```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/Live-Chat-App.git
cd Live-Chat-App
```
### 2️⃣ Create a virtual environment (recommended)
```bash
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
```
### 3️⃣ Install dependencies
```bash
pip install -r requirements.txt
```

### 4️⃣ Run the application
```bash
python app.py
```
or (recommended for Socket.IO support):
```bash
python -m eventlet app.py
```
### 🌐 Open in Browser
```
http://127.0.0.1:5000
```
---
### 🔑 How Authentication Works
- Users log in using a username only

- Flask-Login creates and manages the session

- User identity is stored securely on the server

- current_user.username is used in:

  - Flask routes

  - Socket.IO events

- Username is never trusted from client-side JavaScript
---
### 🔄 Real-Time Messaging Flow
```pgsql
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
Message broadcast to all users
```
---
### 📱 Responsive Design
- Mobile-first design approach

- Full-screen chat interface on phones

- Centered chat container on desktop/laptop

- Optimized input to prevent mobile auto-zoom

- Left/right aligned chat bubbles for clarity

---
### 🚧 Known Limitations
- No database integration (messages are not persisted)

- Broadcast-only chat (no private rooms)

- Username-only authentication (no passwords)

- These limitations are intentional for learning and simplicity.
---
### 🔮 Future Improvements

- 🗄️ Database integration (MySQL / PostgreSQL)

- 👥 Private and group chat rooms

- 🟢 Online/offline user indicator

- ✔✔ Message delivery and read receipts

- 🔐 Password-based authentication

- ☁️ Production deployment (Render / Fly.io)
---
### 🤝 Contributing
1. Contributions are welcome!

2. Fork the repository

3. Create a new branch

4. Commit your changes

5. Open a pull request
---
### 📜 License
This project is licensed under the MIT License.

✨ Author
Built with ❤️ to learn and demonstrate real-time web communication, session handling, and WebSocket-based messaging using Flask.

---
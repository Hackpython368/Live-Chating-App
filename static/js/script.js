const socket = io();

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");


function send_msg_to_server(){
  msg = document.getElementById('messageInput').value
  socket.emit('send_msg',msg)
}







// Send message
sendBtn.addEventListener("click", sendMessage);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = input.value.trim();
  if (!message) return;

  socket.emit("chat_message", { message });
  input.value = "";
}

// Receive message
socket.on("chat_message", (data) => {
  addMessage(data.message, data.self);
});

function addMessage(text, isMine) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.classList.add(isMine ? "my-message" : "other-message");
  div.textContent = text;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

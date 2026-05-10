📌 Mini WhatsApp Clone

A simple CRUD chat application built using Node.js, Express, MongoDB, and EJS.This project simulates a basic WhatsApp-like interface where users can create, edit, and delete chats.

🚀 Features
📩 Create new chats
📜 View all chats
✏️ Edit existing messages
❌ Delete chats
🕒 Timestamp for each message

🛠️ Tech Stack
Node.js
Express.js
MongoDB
Mongoose
EJS (Template Engine)
CSS

📂 Project Structure
models/        → Database schema
views/         → EJS templates
public/        → CSS files
init        → Sample data script
index.js         → Main server file

⚙️ Installation
1. Clone the repository
git clone https://github.com/your-username/mini-chat-app.git
cd mini-chat-app
2. Install dependencies
npm install
3. Start MongoDB
Make sure MongoDB is running locally:
mongodb://127.0.0.1:27017/whatsapp
4. Run the server
node index.js

---

## 📸 Screenshots

### 🏠 Homepage

<p align="center">
  <img src="screenshots/homepage.png" width="800">
</p>

---


### 🛠️ Edit Post Page

<p align="center">
  <img src="screenshots/edit_page.png" width="800">
</p>

---

### 🛠️ New Post Page

<p align="center">
  <img src="screenshots/newchat.png" width="800">
</p>

---

🌐 Routes
Route	-      Method	-  Description
/chats	-      GET	-      Show all chats
/chats/new	-  GET	-      New chat form
/chats	-      POST	-      Create chat
/chats/:id/edit	-GET	-  Edit form
/chats/:id	-  PUT	-      Update chat
/chats/:id	-  DELETE	-  Delete chat


👩‍💻 Author
Dilpreet Kaur
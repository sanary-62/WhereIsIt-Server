# 🧳 WhereIsIt – Lost & Found Web App (Server)

This is the backend API for **WhereIsIt**, a full-stack Lost & Found application. Built with Node.js, Express.js, and MongoDB, it manages secure authentication, item management, and recovery workflows.

---

## 🔗 Live Server URL

🌐 [API Base URL](https://whereisit-server-beta.vercel.app/)

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- dotenv
- CORS
- Morgan
- Cookie-parser (optional)

---

## ✨ Key Features

✅ JWT-based authentication and route protection  
✅ RESTful APIs for Lost & Found item creation, update, delete  
✅ User-specific endpoints for "My Items"  
✅ Recovery status management and logging  
✅ Secure handling of user roles and data access  
✅ CORS-enabled for cross-origin requests  
✅ Environment-based config for secure deployment

---

## 📦 Dependencies

"bash"
"express"
"mongoose"
"cors"
"dotenv"
"jsonwebtoken"
"morgan"
"cookie-parser"
"nodemon" (for development)

⚙️ How to Run Locally
Clone the repo:

bash
git clone https://github.com/your-username/WhereIsIt-Server.git
Install dependencies:

bash
npm install
Create a .env file in the root folder:

env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
Start the server:

bash
npm start
The server will run at http://localhost:5000 by default.

📚 Related Links
🔗 [Live Client Site](https://whereisit-app-bdc3b.web.app/)

📁 [Client GitHub Repo](https://github.com/sanary-62/WhereIsIt-Client)


📄 Description
WhereIsIt is a full-stack Lost and Found web application built to help users report lost or found items and connect with others who may have recovered them. The app supports authentication, item posting, conditional item recovery, and role-based dashboard features. Users can report items, view details, manage posts, and track recovered items easily in a secure and responsive interface.

🔗 Live Project Link
🌐[ Visit the Live Site](https://whereisit-server-beta.vercel.app/)

💻 Technologies Used
Frontend: React.js, Tailwind CSS, React Router DOM, Axios, React Hook Form, React Datepicker, Framer Motion, SweetAlert2

Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, dotenv, CORS

Authentication: Firebase Auth (Email/Password & Google)

UI Add-ons: Lottie, Dynamic Document Titles, Loading Spinners, Tooltips

📄 README File Content
✅ Concise Project Overview
A modern and user-friendly lost & found tracking system that lets users report missing or discovered items. Includes features like JWT auth, conditionally rendered buttons, dynamic layout changes, and secure data storage.


🧰 Main Technologies Used
React.js

Firebase Auth

Express.js

MongoDB

JWT

Tailwind CSS

React Hook Form

Axios

React Datepicker

Framer Motion

SweetAlert2

⚙️ Core Features
🔐 Secure Firebase + JWT Authentication

🔍 Search by title or location

📝 Add & Update Lost/Found item posts

📦 Store recovered item info in separate collection

📂 Conditional button actions based on item type

📅 Track lost/found and recovery dates

📱 Responsive for mobile, tablet, desktop

💡 Toggle layout (card ↔ table)

📛 404 Page & Dynamic Page Titles

🧹 Real-time form validation and visual feedback

🧑‍💼 Logged-in users can manage only their own items

📦 Dependencies
bash
Frontend:
"react", "react-router-dom", "firebase", "react-hook-form", "axios", "react-toastify", "framer-motion", "react-datepicker", "lottie-react", "react-tooltip"

Backend:
"express", "cors", "dotenv", "mongoose", "jsonwebtoken", "morgan"
🚀 How to Run the Project Locally
Client Setup:
Clone the client repo:

bash
git clone https://github.com/your-username/WhereIsIt-Client.git
cd WhereIsIt-Client
Install dependencies:

bash
npm install
Create a .env file:

env
VITE_FIREBASE_API_KEY=your_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_SERVER_URL=http://localhost:5000
Run the project:

bash
npm run dev
Server Setup:
Clone the server repo:

bash
git clone https://github.com/your-username/WhereIsIt-Server.git
cd WhereIsIt-Server
Install dependencies:

bash
npm install
Create a .env file:

env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Start the server:

bash
npm run start



📚 Related Links

[Client GitHub Repo](https://github.com/sanary-62/WhereIsIt-Client)
 [Live Client Site](https://whereisit-app-bdc3b.web.app/)

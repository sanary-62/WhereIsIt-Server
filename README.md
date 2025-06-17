#  WhereIsIt - Backend Server

This is the backend server for the **WhereIsIt** platform — a secure and scalable system for managing lost and recovered items using Firebase Authentication and JWT for user verification.

##  Live Server URL

>  Currently running locally: `http://localhost:3000`

>  Live Deployment :https://whereisit-server-beta.vercel.app
---

##  Purpose

The purpose of this backend is to:

- Manage item data for lost and found submissions.
- Secure user authentication via Firebase.
- Protect API routes using JWT (JSON Web Tokens).
- Store and fetch data from MongoDB Atlas.

---

##  Key Features

-  Firebase Admin Token Verification (for user authentication)
-  JWT Token Generation and Route Protection
-  MongoDB CRUD for Items and Recovered Items
-  Filter items by user email
-  Create, update, and delete lost items securely
-  Mark item status as recovered
-  Recovered item management via separate collection

---

##  NPM Packages Used

| Package           | Purpose                                      |
|------------------|----------------------------------------------|
| `express`         | Server creation and routing                  |
| `cors`            | Enable cross-origin requests                 |
| `dotenv`          | Load environment variables securely          |
| `firebase-admin`  | Verify Firebase ID tokens                    |
| `jsonwebtoken`    | Sign and verify JWTs                         |
| `mongodb`         | Interact with MongoDB database               |
| `nodemon` (dev)   | Auto-restarts server during development      |

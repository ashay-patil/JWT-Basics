# 🔐 JSON Web Tokens (JWT) Authorization

## 📌 Project Overview
This project is an attempt to understand JSON Web Tokens (JWT) and their use in authorization. It demonstrates how to generate and validate JWTs without using any database management system (DBMS). The code serves different response messages to different logged-in users based on their username.

## ✨ Features
- ✅ User authentication using JWT.
- 🔑 JWT token generation and verification.
- 📝 Serving different responses based on the username in the token.
- ❌ No database integration, making it simple and focused on JWT authentication.
- ⚠️ Here the user login credentials are not stored anywhere. The credentials are just used to create the token.

## 🛠 Technologies Used
- 🚀 Node.js
- 🌐 Express.js
- 🔒 JSON Web Token (jsonwebtoken package)

## 📥 Installation
1. 📌 Clone the repository:
   ```sh
   git clone https://github.com/ashay-patil/JWT-Basics.git
   ```
2. 📂 Navigate to the project directory:
   ```sh
   cd JWT-Basics
   ```
3. 📦 Install dependencies:
   ```sh
   npm install
   ```
4. ▶️ Start the server:
   ```sh
   npm start
   ```

## 🚀 Usage
1. 🔐 Send a login request to generate a JWT token.
2. 🔑 Use the generated token to access protected routes.
3. 📝 Based on the username, different responses will be served.

## 📡 API Endpoints
- 🔹 `POST /login` - Logs in a user and returns a JWT token.
- 🔹 `GET /dashboard` - A protected route that returns a personalized response based on the username in the token.

## 📊 Example Request and Response
### 🔑 Login Request
```sh
POST /login
Content-Type: application/json

{
  "username": "ashay", "password":"dummy@password"
}
```
### ✅ Response
```json
{
  "msg" : "User Created",
  "token": "your.jwt.token.here"
}
```

### 🔒 Access Protected Route
```sh
GET /dashboard
Authorization: Bearer your.jwt.token.here
```
### 📩 Response (varies by username)
```json
{
  "msg": "Hey Ashay!" ,"secret":"Your lucky number is 51"
}
```


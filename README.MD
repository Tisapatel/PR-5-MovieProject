<<<<<<< HEAD
# 🎬 Movie Booking System (PR-5-MovieProject)

A ** Movie Booking System** inspired by platforms like BookMyShow.  
Built with **Node.js, Express.js, MongoDB, and EJS**, this project provides users with a seamless experience for browsing movies, booking tickets, and managing reservations.  
Admins can efficiently handle movies, shows, and user bookings through a secure dashboard.

---

## ✨ Features

### 👤 User Features
- 🔑 Secure Authentication (Signup/Login with JWT)
- 🎥 Browse Movies with details (genre, cast, description, posters)
- 🎟 Book tickets for available shows in real-time
- 📅 View & manage booking history
- 🔒 Protected routes using middleware

### 🛠️ Admin Features
- 🎬 Add, Update & Delete movies
- 🎭 Manage shows and schedules
- 📊 View booking statistics
- 👥 Manage users and bookings

---

## 📂 Project Structure

```
PR-5-MovieProject/
│── index.js              # Application entry point
│── package.json          # Dependencies & scripts
│── .env                  # Environment variables
│── config/
│   └── db.js             # MongoDB connection
│── controllers/
│   ├── adminController.js
│   ├── authController.js
│   ├── bookingController.js
│   ├── movieController.js
│   ├── showController.js
│   └── userController.js
│── middlewares/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── upload.js
│── models/
│   └── movieModel.js
│── views/                # EJS templates (frontend)
│── public/               # Static assets (CSS, JS, Images)
```

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **Frontend**: EJS Templating Engine + Bootstrap  
- **Authentication**: JWT (JSON Web Tokens)  
- **Middleware**: Custom Auth, Error Handling, Multer (File Uploads)  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/movie-booking-system.git
cd movie-booking-system
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server
```bash
npm run dev   # Start server with Nodemon
```
Server will be live at 👉 `http://localhost:5000`

---

## 📡 API Endpoints
 
### 🎬 Movies
- `GET /movies` → Fetch all movies  
- `POST /movies` → Add new movie (Admin only)  
- `PUT /movies/:id` → Update a movie (Admin only)  
- `DELETE /movies/:id` → Delete a movie (Admin only)  

---

## 📸 Screenshots (UI)
 ![Home Page](<c:\Users\trpat\OneDrive\Pictures\Screenshots\Screenshot 2025-08-23 013341.png>)
 ![Movies](<c:\Users\trpat\OneDrive\Pictures\Screenshots\Screenshot 2025-08-23 013405.png>)
 ![Movies-details](<c:\Users\trpat\OneDrive\Pictures\Screenshots\Screenshot 2025-08-23 013456.png>)
 ![Admin Page](<c:\Users\trpat\OneDrive\Pictures\Screenshots\Screenshot 2025-08-23 013521.png>)
 ![Movie Add From](<c:\Users\trpat\OneDrive\Pictures\Screenshots\Screenshot 2025-08-23 013609.png>)
 ![Movie ManageFrom](<c:\Users\trpat\OneDrive\Pictures\Screenshots\Screenshot 2025-08-23 013630.png>)

---

## 📦 Deployment

- 🌐 Backend → [Heroku / Render / Railway]  
- 💾 Database → MongoDB Atlas  
- 🎨 Frontend → EJS + Bootstrap hosted with Node.js  

---

## 👨‍💻 Author

**Tisa Patel **   

📧 Email: _tisapatel1204@gmail.com_   
🐙 GitHub: [your-username](https://github.com/your-username)

---



---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **Frontend**: EJS Templating Engine + Bootstrap  
- **Authentication**: JWT (JSON Web Tokens)  
- **Middleware**: Custom Auth, Error Handling, Multer (File Uploads)  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/movie-booking-system.git
cd movie-booking-system
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server
```bash
npm run dev   # Start server with Nodemon
```
Server will be live at 👉 `http://localhost:5000`

---

## 📡 API Endpoints
 
### 🎬 Movies
- `GET /movies` → Fetch all movies  
- `POST /movies` → Add new movie (Admin only)  
- `PUT /movies/:id` → Update a movie (Admin only)  
- `DELETE /movies/:id` → Delete a movie (Admin only)  

---

## 📦 Deployment

- 🌐 Backend → [Heroku / Render / Railway]  
- 💾 Database → MongoDB Atlas  
- 🎨 Frontend → EJS + Bootstrap hosted with Node.js  

---

## 👨‍💻 Author

**Tisa Patel **   

📧 Email: _tisapatel1204@gmail.com_   
🐙 GitHub: [Tisa patel](https://github.com/Tisapatel)
=======
# 🎬 Movie Booking System (PR-5-MovieProject)

A ** Movie Booking System** inspired by platforms like BookMyShow.  
Built with **Node.js, Express.js, MongoDB, and EJS**, this project provides users with a seamless experience for browsing movies, booking tickets, and managing reservations.  
Admins can efficiently handle movies, shows, and user bookings through a secure dashboard.

---


## ✨ Features

### 👤 User Features
- 🔑 Secure Authentication (Signup/Login with JWT)
- 🎥 Browse Movies with details (genre, cast, description, posters)
- 🎟 Book tickets for available shows in real-time
- 📅 View & manage booking history
- 🔒 Protected routes using middleware

### 🛠️ Admin Features
- 🎬 Add, Update & Delete movies
- 🎭 Manage shows and schedules
- 📊 View booking statistics
- 👥 Manage users and bookings

---

## 📂 Project Structure

```
PR-5-MovieProject/
│── index.js              # Application entry point
│── package.json          # Dependencies & scripts
│── .env                  # Environment variables
│── config/
│   └── db.js             # MongoDB connection
│── controllers/
│   ├── adminController.js
│   ├── authController.js
│   ├── bookingController.js
│   ├── movieController.js
│   ├── showController.js
│   └── userController.js
│── middlewares/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── upload.js
│── models/
│   └── movieModel.js
│── views/                # EJS templates (frontend)
│── public/               # Static assets (CSS, JS, Images)
```

---

## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB with Mongoose  
- **Frontend**: EJS Templating Engine + Bootstrap  
- **Authentication**: JWT (JSON Web Tokens)  
- **Middleware**: Custom Auth, Error Handling, Multer (File Uploads)  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/movie-booking-system.git
cd movie-booking-system
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server
```bash
npm run dev   # Start server with Nodemon
```
Server will be live at 👉 `http://localhost:5000`

---

## 📡 API Endpoints
 
### 🎬 Movies
- `GET /movies` → Fetch all movies  
- `POST /movies` → Add new movie (Admin only)  
- `PUT /movies/:id` → Update a movie (Admin only)  
- `DELETE /movies/:id` → Delete a movie (Admin only)  

---

## 📦 Deployment

- 🌐 Backend → [Heroku / Render / Railway]  
- 💾 Database → MongoDB Atlas  
- 🎨 Frontend → EJS + Bootstrap hosted with Node.js  

---

## 👨‍💻 Author

**Tisa Patel **   

📧 Email: _tisapatel1204@gmail.com_   
🐙 GitHub: [Tisa patel](https://github.com/Tisapatel)

---

>>>>>>> 5eb9dc0a04a6c763a9d15feb6310a9cccf835fd7

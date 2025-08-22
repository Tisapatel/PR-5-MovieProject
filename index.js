
require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const adminRouter = require("./routers/adminRouter");
const clientRouter = require("./routers/movieRouter");
const expressLayouts = require('express-ejs-layouts');

const app = express();

// DB Connection
connectDB();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(expressLayouts);
app.set('layout', 'admin/layout');
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", clientRouter);
app.use("/admin", adminRouter);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

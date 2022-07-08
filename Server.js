const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");



const routes = require("./routes/ToDoRoutes");

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb://localhost:27017", {
    // .connect("mongodb+srv://piyush2020:piyush2020@cluster0.0tn84ml.mongodb.net/todo", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Mongodb Connected..."))
    .catch((err) => console.error(err));


// Routes

app.use(routes);

app.listen(PORT, () => console.log("Server running on port " + PORT));
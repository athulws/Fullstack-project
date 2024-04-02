require("dotenv").config();
const express = require("express")
const app = express();
const mongoose = require("mongoose");
require("./Models/userSchema");
const cors = require("cors");
const router = require("./routes/router");
const cookieParser = require('cookie-parser');

const port = 8008;

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());




app.use(router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
})



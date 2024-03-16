const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/saas')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { 
        type: String,
        required: true
    }
})

const transfers = new mongoose.model("transfers",userSchema);

module.exports = transfers;
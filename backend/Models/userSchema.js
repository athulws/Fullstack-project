const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/saas')


const bcrypt = require('bcryptjs');// install and import "bcryptjs"

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

// -----------------hashing----------------//

//encrypting password before saving

userSchema.pre('save', async function(next){
    if (!this.isModified('password')) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
});

// -----------------hashing----------------//

const transfers = new mongoose.model("transfers",userSchema);

module.exports = transfers;
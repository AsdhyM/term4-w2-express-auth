const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLenght: 3,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLenght: 8,
        trim: true
    }
});

const User = mongoose.model("User", UserSchema);

module.exports= {
    User
}
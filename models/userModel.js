const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    },

    title : {
        type: String,
        required: [true, "Please enter your title!"],
        trim: true
    },
    description : {
        type: String,
        required: [true, "Please enter your description !"],
        trim: true
    }






}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)
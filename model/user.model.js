const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    bio: String,
    image: {
        type: String,
        default: 'https://acelegalservices.vercel.app/Images/Signup/avatar.png'
    }
})
const UserModel = mongoose.model('user',userSchema)
module.exports = UserModel;
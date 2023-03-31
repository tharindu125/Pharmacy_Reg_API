const mongoose = require('mongoose')

const Schema = mongoose.Schema

const registerSchema = new Schema({
    f_name:{
        type: String,
        required: true
    },
    l_name:{
        type: String,
        required: true
    },
    m_number:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },

}, {timestamps:true})

registerSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw Error("User not found");
    if (user.password != password) throw Error("Password mismatch");
    return user;
};

module.exports = mongoose.model('register', registerSchema)
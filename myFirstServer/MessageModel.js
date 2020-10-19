const mongoose = require('mongoose');

const messageModel = new mongoose.Schema({
    email: String,
    message: String
});

const Message = mongoose.model('Message', messageModel);

exports.newMessage = (email, message) => {
    var message = new Message({
        email: email,
        message: message
    })
    return message
}

exports.getAllMessages = () => {
    let messages = Message.find({})
    return messages
}
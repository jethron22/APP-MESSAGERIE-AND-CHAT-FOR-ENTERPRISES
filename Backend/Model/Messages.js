const mongoose = require('mongoose')

const MessagesSend = (req, res) => {
    const MessageSchema = new mongoose.Schema({
      
        senderMessage : {type : string},
        receiverMessage : {type: string},
       
    },
    {collection: "All-Message"})
}

const SendAndReceived = mongoose.model('SendAndReceived ', MessageSchema)
module.exports = SendAndReceived

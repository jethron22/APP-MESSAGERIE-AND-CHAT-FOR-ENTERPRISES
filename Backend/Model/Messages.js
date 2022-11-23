const mongoose = require('mongoose')


    const MessageSchema = new mongoose.Schema({
      
        senderMessage : {type : string},
        receiverMessage : {type: string},
       
    },
    {collection: "All-Messages"})


const SendAndReceived = mongoose.model('SendAndReceived ', MessageSchema)
module.exports = SendAndReceived

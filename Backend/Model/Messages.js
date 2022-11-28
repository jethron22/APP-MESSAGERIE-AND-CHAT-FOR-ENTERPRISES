const express = require('express')
const mongoose = require('mongoose')


    const MessageSchema = new mongoose.Schema({

        senderUserId : {type : String},
        receiverUserId : {type: String},
        message : {type: String},
        
    },
    {collection: "All-Messages"})


const SendAndReceived = mongoose.model('SendAndReceived ', MessageSchema)
module.exports = SendAndReceived

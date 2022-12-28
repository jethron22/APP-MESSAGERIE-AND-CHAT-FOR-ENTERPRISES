const express = require('express')
const mongoose = require('mongoose')

const User = new mongoose.Schema({
    nom: {
        type: String
    },
    telephone: {
        type: String
    },
    motdePass: {
        type: String
    },
}, {collection: "Users"},)

module.exports = mongoose.model('user', User)
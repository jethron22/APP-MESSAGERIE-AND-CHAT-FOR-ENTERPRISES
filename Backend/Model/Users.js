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
})

module.exports = mongoose.model('user', User)
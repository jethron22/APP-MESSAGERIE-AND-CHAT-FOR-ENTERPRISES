const express = require('express')
const mongoose = require('mongoose')

const User = new mongoose.Schema({
    nom: {
        type: String
    },
    postnom: {
        type: String
    },
    motdepasse: {
        type: String
    },
})

module.exports = mongoose.model('user', User)
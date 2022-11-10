const express = require('express')
const mongoose = require('mongoose')

const User = new mongoose.Schema({
    nom : {
        type : String,
    },
    postnom : {
        type : String},
    téléphones : {
            type : Number},
})


module.exports = mongoose.model('user' , User)
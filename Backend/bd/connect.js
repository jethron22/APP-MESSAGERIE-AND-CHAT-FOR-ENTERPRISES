const mongoose = require('mongoose');
const express = require('express');

const connecter =()=> {
    mongoose.connect("mongodb+srv://Mirindi:201533@cluster0.e6pkmtn.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(result => {
            console.log("Connexion à la base de donnée réussi !")
        })
        .catch(error => {
            console.log("Erreur lors de la connexion à la base de donnée");
            process.exit(-1)
        }
    )}

    module.exports = {connecter};
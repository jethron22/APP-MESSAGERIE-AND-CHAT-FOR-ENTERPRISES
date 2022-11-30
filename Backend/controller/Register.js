const Users = require("../Model/Users")
const connecter = require("../controller/Users")
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Login = require("./Login")
const express = require('express')


const register = async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.motdePass, 10) 
    const user = new User({
        nom : req.body.nom,
        telephone : req.body.telephone,
        motdePass : hashedPassword,
    })

    user.save()
    .then((data) => {
        res.status(201).json({ message: 'Utilisateur enregister avec succes !'})
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).json({error, 'message': "Erreur d'authentification"})
    })
}

module.exports = { register }
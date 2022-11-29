const Users = require("../Model/Users")
const connecter = require("../controller/Users")
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const addUsers = async (req, res) => {

    try {

        console.log(req.body)
        const PasswordHashed = await bcrypt.hash(req.body.motdePass, 10) 

        let users = new Users({

            nom : req.body.nom,
            téléphone: req.body.téléphone,
            motdePass: PasswordHashed

        })

        let result = await users.save()
        res.status(200).json({ message: "L'utilisateur est enregisté avec succès"});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: " Erreur lors de l'enregistrement ! "});
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await Users.find()

        if (users) {
            res.json({ statut: true, users })
        }

    } catch (error) {
        next(error)
    }

}


module.exports = { addUsers, getAllUsers }
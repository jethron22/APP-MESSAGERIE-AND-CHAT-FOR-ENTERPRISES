const Users = require("../Model/Users")
const connecter = require("../controller/Users")
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const addUsers = async (req, res) => {

    try {

        console.log(req.body)
        const { nom, téléphone, motdePass } = req.body

        let users = new Users({

            nom,
            téléphone,
            motdePass,

        })

        let result = await users.save()
        res.status(200).json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
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

const login = (req, res, next) => {
    console.log(req.body)
    Users.findOne({ motdePass: req.body.motdePass })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: "Cet utilisateur n'existe pas" });
            }

            const salt = bcrypt.genSalt(req.body.motdePass, 10)
            return bcrypt.compare(req.body.motdePass, user.motdePass, salt)

                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: "Vous avez entré un mot de passe incorrect !" });
                    }
                    return res.status(200).json({
                        userId: user._id,
                        name: user.nom,
                        motdepasse: user.motdePass,
                        token: jwt.sign({
                            userId: user._id
                        },
                            'MY-TOKEN-IS-SECRET-WHEN-I-SIGN-IN',
                            { expireIn: '24h' },)
                    });
                })

        })
}

module.exports = { addUsers, getAllUsers, login }
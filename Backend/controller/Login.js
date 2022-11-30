const Users = require("../Model/Users")
const connecter = require("../controller/Users")
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const login = (req, res) => {
    console.log(req.body.telephone);
    console.log(req.body.motdepasse);
    Users.findOne({ telephone: req.body.telephone })
        .then(user => {
            console.log(user)
            if (!user) {
                return res.status(401).json({ message: "Vous avez entré un numéro de téléphone incorrect !" });

            } else {   
   
                bcrypt.compare(req.body.motdePass, user.motdePass)
                    .then(valid => {
                        if (!valid) {
                            return res.status(401).json({ message: 'Vous avez entré un mot de passe incorect' })
                        } else {
                            res.status(200).json({
                                message: "Connexion réussi",
                                userId: user._id,
                                userName: user.nom,
                                userToken: jwt.sign(
                                    {
                                        userId: user._id,
                                    },
                                    'USER_CHAT_TOKEN_SECRET',
                                    { expiresIn: '24h' }
                                )
                            })
                        }

                    })
                    .catch(error => res.status(500).json({ error, message: "erreur lors de la connexion" }));

            }


        });

}

module.exports = { login }
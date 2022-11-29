const Users = require("../Model/Users")
const connecter = require("../controller/Users")
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');



const login = (req, res) => {
    Users.findOne({ nom : req.body.nom})
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Paire login/mot de passe incorrecte'});
            }
            bcrypt.compare(req.body.motdePass, user.motdePass)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ message: 'Le paire login mot de passe incorrecte' });
                }
                res.status(200).json({
                    userId: user._id,
                    userName: user.nom,
                    userToken: jwt.sign(
                        {
                            userId : user._id,
                        
                        },
                        'USER_CHAT_TOKEN_SECRET',
                        { expiresIn: '24h' }
                    )
                });
            })
            .catch(error => res.status(500).json({ error, message: "erreur de connexion"}));

    })
    .catch(error => res.status(500).json({ "error" : error, message : "erreur serveur"}));
}

module.exports = { login }
const Users = require("../Model/Users")
const connecter = require("../controller/Users")
const mongoose = require('mongoose')

const addUsers = async (req, res) => {

    try {

        console.log(req.body)
        const { nom, postnom, motdepasse } = req.body

        let users = new Users({

            nom,
            postnom,
            motdepasse,

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
    Users.findOne({ nom: req.body.nom })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: "Nom d'utilisateur ou mot de passe incorrect" });
            }
            bcrypt.compare(req.body.motdepasse, user.motdepasse)
                .then(valid => {
                    if (!motdepasse) {
                        return res.status(501).json({ message: "Nom d'utilisateur ou mot de passe incorrect!" });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign({
                            userId: user._id
                        },
                            'MY-TOKEN-IS-SECRET-WHEN-I-SIGN-IN',
                            { expireIn: '24h' })
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
}

module.exports = { addUsers, getAllUsers, login }
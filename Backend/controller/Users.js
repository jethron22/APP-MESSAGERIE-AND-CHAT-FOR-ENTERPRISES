const Users = require("../Model/Users")
const connecter = require("../controller/Users")
const mongoose = require('mongoose')

const addUsers = async (req, res) => {
    
try {
    const { nom, postnom, téléphones} = req.body 
    let users = new Users({
        nom,
        postnom,
        téléphones,

    })
    let result = users.save()
    res.status(200).json(result);
} catch (error) {
    console.log(error);
    res.status(500).json(error);
}
}

module.exports = {addUsers}
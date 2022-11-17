const express = require("express")
const { addUsers, getAllUsers, } = require("../controller/Users")
const router = express.Router()

router.route("/user").post(addUsers);   
router.route("/Users").get(getAllUsers); 
 
module.exports = {router}         
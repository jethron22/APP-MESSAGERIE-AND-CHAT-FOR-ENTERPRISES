const express = require("express")
const { addUsers } = require("../controller/Users")
const router = express.Router()

router.route("/users").post(addUsers);

module.exports = router;
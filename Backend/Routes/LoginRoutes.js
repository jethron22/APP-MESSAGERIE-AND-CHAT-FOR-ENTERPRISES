const express = require('express');
const {login} = require('../controller/Login');
const router = express.Router();


router.route('/login').post(login);

module.exports = router
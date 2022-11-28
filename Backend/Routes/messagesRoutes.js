const express = require('express');
const getMessages = require('../controller/getAllMessages');
const SentMessages = require('../controller/sendAllMessage');
const router = express.Router();

router.route("/api/sentMessages").post(SentMessages);   
router.route("/api/getMessages/:areUserConnectedID").get(getMessages); 

module.exports = router
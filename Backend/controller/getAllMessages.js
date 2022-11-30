const MessagesSend = require('../Model/Messages')

const getMessages = (req, res) => {
    MessagesSend.find({
        $or: [
            { MessagesSenderId: req.params.areUserConnectedID },
            { MessagesReceiverId: req.params.areUserConnectedID }
        ]

    }).then((data) => {
        res.status(200).json({ message: data })
    }).catch((error) => {
        res.status(401).json({ message: error })
    })
}

module.exports = getMessages
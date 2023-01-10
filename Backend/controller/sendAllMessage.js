const UsersSentMessages = require('../Model/Messages')

const SentMessages = (req, res) => {
   console.log({
      senderUserId: req.body.senderUserId,
      receiverUserId: req.body.receiverUserId,
      message: req.body.message
   })
Messages = new UsersSentMessages({
       senderUserId: req.body.senderUserId,
       receiverUserId: req.body.receiverUserId,
       message: req.body.message,

    })

    Messages.save().then((data) => {
       
       res.status(200).json({ message: 'Message envoyé' })
    }).catch(() => {
       res.status(500).json({ message: "Ce message ne peut pas etre envoyé !" })
    })
 }

 module.exports = SentMessages
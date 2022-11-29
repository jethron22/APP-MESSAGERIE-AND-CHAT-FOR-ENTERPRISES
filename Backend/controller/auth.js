const jwt = require('jsonwebtoken');
const { login } = require('./Login');


 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'USER_CHAT_TOKEN_SECRET');
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId,

       };
	next();
   } catch(error) {

       res.status(401).json({ message: "Une erreur s'est produite lors de la connexion" });
   }
};  

module.exports.login = login;
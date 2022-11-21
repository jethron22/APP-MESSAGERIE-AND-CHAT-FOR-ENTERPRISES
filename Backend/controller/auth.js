const jwt = require('jsonwebtoken');
const { login } = require('./Users');


 
module.exports = (req, res, next) => {
   try {
       const token = req.headers.authorization.split(' ')[1];
       const decodedToken = jwt.verify(token, 'MY-TOKEN-IS-SECRET-WHEN-I-SIGN-IN');
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {

       res.status(401).json({ message: "Une erreur s'est produite lors du login" });
   }
};  

module.exports.login = login;

const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const { connecter } = require('./bd/connect');
const usersRoutes = require('./Routes/Users');
const allUsersRoutes = require('./Routes/Users');
const auth = require('./controller/auth');
const app = express();
const LoginUser = require('./Routes/LoginRoutes')
const PORT = 2707;
const bcrypt = require('bcrypt') 

// connexion avec mongoDB

connecter()

// Middleware

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATH,OPTIONS');
    next();

})


app.use(bodyParser.json());
app.use(cors({
    credential: true,
}))

app.use(express.json())


app.use(session({
    secret: "monCodeSecret",
    resave: true,
    saveUninitialized: true,

}));

app.use(cookieParser("monCodeSecret"))
     
//Routes
app.get('/Users', allUsersRoutes)
app.post('/login', LoginUser) 
app.get('/User', usersRoutes)

app.listen(PORT, () => {
    console.log(`SERVER IS LISTEN ON PORT ${PORT}`)
})



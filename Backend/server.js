
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const {connecter} = require('./bd/connect');
const usersRoutes = require('./Routes/Users');
const app = express();
const PORT = 2706; 



// connexion avec mongoDB

connecter()

// Middleware

app.use(bodyParser.json());
app.use(cors({
    origin: "http://localhost:3000/", // react app origin connection
    credential: true,
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use("/users" , usersRoutes) 

// app.use(session({
//     secret: "monCodeSecret",
//     resave: true,
//     saveUninitialized: true,

// }));

app.use((_, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATH,OPTIONS');
    next();

})

app.use(cookieParser("monCodeSecret"))

//Routes
app.get('/users', (req, res) => {
    res.send("okay");
});

app.listen(PORT, () => {
    console.log(`SERVER IS LISTEN ON PORT ${PORT}`)
})
  


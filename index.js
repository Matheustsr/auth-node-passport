const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const passport = require('passport')
const app = express()

//Basis strategy
// passport.use(require('./src/auth/basic'))
// app.get('*', passport.authenticate('basic', { session: false })) // todas as rotas fazem parte da estrategia


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

require('./src/index')(app)

mongoose.connect('mongodb://localhost:27017/auth')
app.listen(3000, () => {
    console.log("Lets rock!")
});
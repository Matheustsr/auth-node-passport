const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const passport = require('passport')
const app = express()

//Basic strategy
// passport.use(require('./src/auth/basic'))
// app.get('*', passport.authenticate('basic', { session: false })) // todas as rotas fazem parte da estrategia


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize()) // init passport 

app.set('view engine', 'pug') // use pug
app.set('views', path.join(__dirname, 'src/view')) // set templates folder

require('./src/index')(app) // require a instance to routes

mongoose.connect('mongodb://db:27017/auth')
mongoose.Promise = global.Promise

app.listen(3000, () => {
    console.log("Lets rock!")
});
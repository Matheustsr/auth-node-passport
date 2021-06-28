const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const passport = require('passport')
const app = express()

//Basic strategy
passport.use(require('./src/auth/basic'))


app.use(morgan('dev'))
app.use(passport.initialize()) // init passport 
app.use('/users', require('./src/controller/users/index')(passport))

app.set('view engine', 'pug') // use pug
app.set('views', path.join(__dirname, 'src/view')) // set templates folder

app.get('*', passport.authenticate('basic', { session: false })) // todas as rotas fazem parte da estrategia
require('./src/index')(app) // require a instance to routes

mongoose.connect('mongodb://localhost:27017/auth')

app.listen(3000, () => {
    console.log("Lets rock!")
});
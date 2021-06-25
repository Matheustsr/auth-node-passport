const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport')
const app = express()


passport.use(require('./src/auth/basic'))

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())

app.get('*', passport.authenticate('basic', { session: false })) // todas as rotas fazem parte da estrategia
require('./src/index')(app)

app.listen(3000, () => {
    console.log("Lets rock!")
});
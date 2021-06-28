const express = require('express')
const router = express.Router()

router.get('/new', require('./new.js'))

module.exports = router
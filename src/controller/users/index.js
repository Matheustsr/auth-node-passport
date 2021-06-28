const express = require('express')
const router = express.Router()

router.get('/new', require('./new'))

module.exports = router
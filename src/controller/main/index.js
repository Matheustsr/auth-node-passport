const express = require('express')
const router = express.Router();
const isAuth = require('./../../auth/middleware')

router.get('/', isAuth, require('./main'))
module.exports = router
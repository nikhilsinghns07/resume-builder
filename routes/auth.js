const express = require('express')

const authController = require('../controller/auth')
const router = express.Router()

router.post('/register',authController.signup)
router.post('/login',authController.login)
router.post('update',authController.update)

module.exports = router
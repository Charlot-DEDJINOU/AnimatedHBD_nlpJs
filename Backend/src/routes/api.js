const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const devinetteController = require('../controllers/devinetteController')

router.post('/login', userController.login)
router.post('/preprocessing', devinetteController.preprocessing)

module.exports = router

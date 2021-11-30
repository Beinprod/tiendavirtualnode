const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

// Home de la tienda
router.get('/', mainController.index)

// Dashboard de la tienda
router.get('/dashboard', mainController.dashboard)


module.exports = router
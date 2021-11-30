const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');


// Dashboard de la tienda
router.get('/', rolesController.index);


module.exports = router;
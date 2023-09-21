const express = require('express');
const router = express.Router();

const itemControllers = require('../controllers/itemsControllers');

router.get('/', itemControllers.getAllItems)


module.exports = router;
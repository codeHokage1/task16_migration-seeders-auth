const express = require('express');
const router = express.Router();

const ordersControllers =  require("../controllers/ordersControllers")

router.get('/', ordersControllers.getAllOrders)


module.exports = router;
const express = require('express');
const router = express.Router();

const usersControllers = require("../controllers/usersControllers");
const validateRequest = require("../middlewares/validatRequest");

router
    .get('/', usersControllers.getAllUsers)
    .post('/', validateRequest.checkNewUser, usersControllers.createUser)


module.exports = router;
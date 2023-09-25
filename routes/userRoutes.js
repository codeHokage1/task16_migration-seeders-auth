const express = require('express');
const router = express.Router();

const usersControllers = require("../controllers/usersControllers");
const validateRequest = require("../middlewares/validatRequest");

router
    .get('/', usersControllers.getAllUsers)
    .post('/signup', validateRequest.checkNewUser, usersControllers.createUser)
    .post('/login', validateRequest.checkLogin, usersControllers.loginUser)


module.exports = router;
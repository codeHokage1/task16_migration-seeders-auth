const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersControllers");
const middlewares = require("../middlewares/validRequest");

router
	.get("/", usersControllers.getAllUsers)
	.post("/signup", middlewares.checkNewUser, usersControllers.createUser)
	.post("/login", middlewares.checkLogin, usersControllers.loginUser);

module.exports = router;

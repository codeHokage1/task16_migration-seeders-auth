const express = require("express");
const router = express.Router();

const itemControllers = require("../controllers/itemsControllers");
const auth = require("../middlewares/auth");

router.use(auth.validateAccess);

router.get("/", itemControllers.getAllItems);

module.exports = router;

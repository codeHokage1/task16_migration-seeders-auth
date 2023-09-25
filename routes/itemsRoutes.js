const express = require("express");
const router = express.Router();

const itemControllers = require("../controllers/itemsControllers");
const auth = require("../middlewares/auth");
const validateRequest = require("../middlewares/validatRequest");

router.use(auth.validateAccess);
router
	.get("/", itemControllers.getAllItems)
	.post("/", validateRequest.cheeckNewItem, itemControllers.createItem)
	.put("/:id", itemControllers.updateItem)
    .delete("/:id", itemControllers.deleteItem);

module.exports = router;

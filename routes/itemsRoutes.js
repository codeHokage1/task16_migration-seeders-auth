const express = require("express");
const router = express.Router();

const itemControllers = require("../controllers/itemsControllers");
const validRequest = require("../middlewares/validRequest");
const auth = require("../middlewares/auth");

router.use(auth.validateAccess);

router
    .get("/", itemControllers.getAllItems)
    .post("/", validRequest.checkNewItem, itemControllers.createItem)
    .put("/:id", itemControllers.updateItem)
    .delete("/:id", itemControllers.deleteItem);

module.exports = router;

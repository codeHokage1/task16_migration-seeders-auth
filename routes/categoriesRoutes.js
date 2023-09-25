const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categoriesControllers');
const validateRequest = require('../middlewares/validatRequest');

router
    .get('/', categoriesController.getAllCategories)
    .post('/', validateRequest.checkNewCategory, categoriesController.createCategory)


module.exports = router;
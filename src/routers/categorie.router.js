const caterogy = require('express').Router();
const LoginController = require('../controllers/login.controller');
const CategoryController = require('../controllers/categorie.controller');
const CategoryValidator = require('../middleweres/categoryValidator');

const { createCategory } = CategoryController;
const { isNameValid } = CategoryValidator;
const { validateToken } = LoginController;

caterogy.post('/', validateToken, isNameValid, createCategory);

module.exports = caterogy;
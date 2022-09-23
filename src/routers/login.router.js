const login = require('express').Router();
const LoginController = require('../controllers/login.controller');
const userValidator = require('../middleweres/userValidator');

const { validateBody, validateUser } = userValidator;
const { createToken } = LoginController;
login.post('/', validateBody, validateUser, createToken);

module.exports = login;
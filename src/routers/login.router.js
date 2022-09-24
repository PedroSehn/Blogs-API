const login = require('express').Router();
const LoginController = require('../controllers/login.controller');
const userValidator = require('../middleweres/userValidator');

const { validateBody, validateUser } = userValidator;
const { createLoginToken } = LoginController;

login.post('/', validateBody, validateUser, createLoginToken);

module.exports = login;
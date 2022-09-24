const user = require('express').Router();
const UserController = require('../controllers/user.controller');
const LoginController = require('../controllers/login.controller');

const UserValidator = require('../middleweres/userValidator');

const { createUser } = UserController;
const { emailValidator, validateCreateUser } = UserValidator;
const { createPostUserToken } = LoginController;

user.post('/', emailValidator, validateCreateUser, createUser, createPostUserToken);

module.exports = user;
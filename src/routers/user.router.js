const user = require('express').Router();
const UserController = require('../controllers/user.controller');

const LoginController = require('../controllers/login.controller');
const UserValidator = require('../middleweres/userValidator');

const { createUser, getAllUsers } = UserController;
const { emailValidator, validateCreateUser } = UserValidator;
const { createPostUserToken, validateToken } = LoginController;

user.post('/', emailValidator, validateCreateUser, createUser, createPostUserToken);
user.get('/', validateToken, getAllUsers);

module.exports = user;
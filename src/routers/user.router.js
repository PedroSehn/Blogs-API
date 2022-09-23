const users = require('express').Router();
const UserController = require('../controllers/user.controller');

const { getAllUsers } = UserController;

users.get('/', getAllUsers);

module.exports = users;
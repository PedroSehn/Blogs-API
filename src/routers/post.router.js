const post = require('express').Router();

const LoginController = require('../controllers/login.controller');
const PostController = require('../controllers/post.controller');

const PostValidator = require('../middleweres/postValidator');

const { isDataValid, vaidateCategory } = PostValidator;
const { validateToken } = LoginController;
const { createPost } = PostController;

post.post('/', validateToken, isDataValid, vaidateCategory, createPost);

module.exports = post;
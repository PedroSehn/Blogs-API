require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const createLoginToken = async (rec, res) => {
    const { email } = rec.body;
    const user = await UserService.findbyEmail(email);
    const token = jwt.sign({ data: { userId: user.id } }, SECRET, jwtConfig);
    return res.status(200).json({ token });
};

const createPostUserToken = async (rec, res) => {
    const { email } = rec.body;
    const user = await UserService.findbyEmail(email);
    const token = jwt.sign({ data: { userId: user.id } }, SECRET, jwtConfig);
    return res.status(201).json({ token });
};

module.exports = { createLoginToken, createPostUserToken };
require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const createToken = async (rec, res) => {
    const { email } = rec.body;
    const user = await UserService.findbyEmail(email);
    const token = jwt.sign({ data: { userId: user.id } }, SECRET, jwtConfig);
    res.status(200).json(token);
};

module.exports = { createToken };
require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const createToken = async (email) => {
    const user = await UserService.findbyEmail(email);
    const token = jwt.sign({ data: { userId: user.id } }, SECRET, jwtConfig);
    return token;
};

const createLoginToken = async (rec, res) => {
    const { email } = rec.body;
    const token = await createToken(email);
    return res.status(200).json({ token });
};

const createPostUserToken = async (rec, res) => {
    const { email } = rec.body;
    const token = await createToken(email);
    return res.status(201).json({ token });
};

const validateToken = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Token not found' });
    try {
        const decoded = jwt.verify(token, SECRET);
      
        const { userId } = decoded.data;
        const user = await UserService.findById(userId);
        if (!user) return res.status(400).json({ message: 'invalid user' });
        
        req.decodedUser = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};
module.exports = { createLoginToken, createPostUserToken, validateToken };
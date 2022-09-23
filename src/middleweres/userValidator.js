const UserService = require('../services/user.service');

const validateBody = async (rec, res, next) => {
    const { email, password } = rec.body;
    const isValid = email && password;

    if (!isValid) return res.status(400).json({ message: 'Some required fields are missing' });
    
    next();
};

const validateUser = async (rec, res, next) => {
    const { email, password } = rec.body;
    const user = await UserService.findbyEmail(email);
    
    if (!user) return res.status(400).json({ message: 'Invalid fields' });
    if (user.password !== password) return res.status(400).json({ message: 'Invalid fields' });

    next();
};

module.exports = {
    validateBody,
    validateUser,
};
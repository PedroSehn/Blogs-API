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

const emailValidator = async (rec, res, next) => {
    const { email } = rec.body;
    const rejext = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const isValid = rejext.test(email);
    const user = await UserService.findbyEmail(email);

    if (!isValid) return res.status(400).json({ message: '"email" must be a valid email' });
  
    if (!user.id === false) { return res.status(409).json({ message: 'User already registered' }); }
    
    next();
};

const validateCreateUser = async (rec, res, next) => {
    const { displayName, password } = rec.body;
    
    if (displayName.length < 8) {
        return res.status(400).json(
            { message: '"displayName" length must be at least 8 characters long' },
        );
    }

    if (password.length < 6) {
        return res.status(400).json(
            { message: '"password" length must be at least 6 characters long' },
        );
    }

    next();
};

module.exports = {
    validateBody,
    validateUser,
    validateCreateUser,
    emailValidator,
};
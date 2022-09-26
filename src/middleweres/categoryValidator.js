// const CategoryService = require('../services/caterogy.service');

const isNameValid = (rec, res, next) => {
    const { name } = rec.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });
    next();
};

module.exports = { 
    isNameValid,
};
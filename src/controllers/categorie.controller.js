const CategoryService = require('../services/caterogy.service');

const createCategory = async (rec, res, _next) => {
    const { name } = rec.body;
    console.log('===========>>', rec.body, '<<===============');
    const result = await CategoryService.createCategory(name);
    return res.status(201).json(result);
};

module.exports = {
    createCategory,
};
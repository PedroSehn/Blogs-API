const CategoryService = require('../services/caterogy.service');

const createCategory = async (rec, res, _next) => {
    const { name } = rec.body;
    const result = await CategoryService.createCategory(name);
    return res.status(201).json(result);
};

const getAllCategories = async (rec, res, _next) => {
    const result = await CategoryService.getAllCategories();
    return res.status(200).json(result);
};

module.exports = {
    createCategory,
    getAllCategories,
};
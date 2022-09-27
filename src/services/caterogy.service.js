const { Category } = require('../models');

const createCategory = async (name) => {
    const result = await Category.create({ name });
    return result;
};

const getAllCategories = async () => {
    const result = await Category.findAll();
    return result;
};

const getCategoryById = async (id) => {
    const result = await Category.findByPk(id);
    return result;
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
};
const CategoryService = require('../services/caterogy.service');

const vaidateCategory = async (rec, res, next) => {
    const { categoryIds } = rec.body;
    const categoryArr = categoryIds.map(async (id) => CategoryService.getCategoryById(id));
    const clearArray = await Promise.all(categoryArr);
    const isValid = clearArray.some((item) => item === null);
    if (isValid === true) return res.status(400).json({ message: '"categoryIds" not found' });
    next();
};

const isDataValid = async (rec, res, next) => {
    const { title, content, categoryIds } = rec.body;
    if (!title || !content || !categoryIds[0]) {
        return res.status(400).json({ 
        message: 'Some required fields are missing',
     }); 
    }
    next();
};

module.exports = { isDataValid, vaidateCategory };
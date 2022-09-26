const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
    const result = await User.create({ displayName, email, password, image });   
    return result;
};

const getAllUsers = async () => {
    const result = await User.findAll();
    return result;
};

const findbyEmail = async (email, _password) => {
    const result = await User.findOne({ where: { email } });
    if (!result) return {};
    return result.dataValues;
};

const findById = async (id) => {
    const user = await User.findByPk(id, { atributes: { exclude: ['password'] } });
    if (!user) return {};
    return user;
};

module.exports = {
    getAllUsers,
    findbyEmail,
    createUser,
    findById,
};
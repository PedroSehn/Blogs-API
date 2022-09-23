const { User } = require('../models');

const getAllUsers = async () => {
    const result = await User.findAll();
    return result;
};

const findbyEmail = async (email, _password) => {
    const result = await User.findOne({ where: { email } });
    if (!result) return {};
    return result.dataValues;
};

module.exports = {
    getAllUsers,
    findbyEmail,
};
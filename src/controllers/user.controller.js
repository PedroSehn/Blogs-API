const UserService = require('../services/user.service');

const getAllUsers = async (rec, res) => {
    const result = await UserService.getAllUsers();
    return res.status(200).json(result);
};

const createUser = async (rec, res, next) => {
    const { displayName, email, password, image } = rec.body;
    await UserService.createUser(displayName, email, password, image);
    next();
};

module.exports = {
    getAllUsers,
    createUser,
};
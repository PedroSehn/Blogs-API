const UserService = require('../services/user.service');

const getAllUsers = async (rec, res) => {
    const result = await UserService.getAllUsers();
    return res.status(200).json(result);
};

module.exports = {
    getAllUsers,
};
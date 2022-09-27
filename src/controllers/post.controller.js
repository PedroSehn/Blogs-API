const PostService = require('../services/post.service');

const createPost = async (rec, res, _next) => {
    const { id } = rec.decodedUser;
    const { title, content, categoryIds } = rec.body;
    const result = await PostService.createPost({ id, title, content, categoryIds });
    return res.status(201).json(result);
};

module.exports = { createPost };
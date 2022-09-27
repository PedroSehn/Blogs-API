const { BlogPost, /* PostCategory */ sequelize } = require('../models');

const getPostById = async (id) => {
    const result = await BlogPost.findByPk(id);
    return result;
};

const createPost = async (data) => {
    const { id, title, content } = data; 
    try {
        const result = await sequelize.transaction(async (t) => {
                const post = await BlogPost.create({
                    userId: id,
                    title,
                    content }, { transaction: t });
                /*
                const postId = post.dataValues.id;
                const postCategoryArr = categoryIds.map((categoryId) => ({ postId, categoryId }));
                await PostCategory.bulkCreate(postCategoryArr, { transaction: t });
                */
                return post;
            });
            return result;
    } catch (err) {
        return err;
    }
};

module.exports = {
    createPost,
    getPostById,
};
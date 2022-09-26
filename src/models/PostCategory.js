const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategoryTable = sequelize.define('PostCategory', {

        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
        },

        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            foreignKey: true,
        },

    }, {
        tableName: `posts_categories`,
        timestamps: false,
        underscored: true,
    });

    PostCategoryTable.associate = (models) => {
        
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategoryTable,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });

        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogPosts',
            through: PostCategoryTable,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        });

    };

    return PostCategoryTable;
};

module.exports = PostCategorySchema;
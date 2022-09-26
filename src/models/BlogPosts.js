const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define('BlogPosts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        published: {
            type: DataTypes.DATE,
        },
        updated: {
            type: DataTypes.DATE,
        },
    }, {
        tableName: 'blog_posts',
        underscored: true,
        timestamps: false,
    });

    BlogPostTable.associate = (models) => {
        BlogPostTable.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id',
        });
    };

    return BlogPostTable;
};

module.exports = BlogPostSchema;
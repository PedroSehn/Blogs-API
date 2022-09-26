const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPostTable = sequelize.define('BlogPost', {
        
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
        userId: {
            field: 'user_id',
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
        BlogPostTable.hasMany(models.User, {
            as: 'user',
            foreignKey: 'id',
        });
    };

    return BlogPostTable;
};

module.exports = BlogPostSchema;
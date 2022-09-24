const UserSchema = (sequelize, DataTypes) => {
    const UserTable = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        displayName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: false,
        tableName: 'users',
        underscored: true,
    });
/*
    UserTable.associate = (models) => {
        User.belongsToMany(models.blog_posts, {
            as: 'blog_posts',
            foreignKey: 'id',
        });
    };
*/
    return UserTable;
};


module.exports = UserSchema;
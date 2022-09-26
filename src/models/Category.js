const CategorySchema = (sequelize, DataTypes) => {
    const CategoryTable = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories',
    });

    return CategoryTable;
};

module.exports = CategorySchema;
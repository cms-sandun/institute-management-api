module.exports = function (sequelize, DataTypes) {
    const Course = sequelize.define('course', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        course_fee: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('enabled', 'disabled'),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true
    });

    return Course;

}






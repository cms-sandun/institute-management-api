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
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('enabled', 'disabled'),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        freezeTableName: true
    });

    return Course;

}






module.exports = function (sequelize, DataTypes) {
    const EmpAttendance = sequelize.define('empAttendance', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('present', 'absent'),
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

    return EmpAttendance;
}
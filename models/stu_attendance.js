module.exports = function (sequelize, DataTypes) {
    const StuAttendance = sequelize.define('stu_attendance', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        classes_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        student_id: {
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

    StuAttendance.associate = function (models) {
        StuAttendance.belongsTo(models.student,{foreignKey: "student_id"});
    }

    return StuAttendance;
}

module.exports = function (sequelize, DataTypes) {
    const Student = sequelize.define('student', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        middle_name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM('male','female'),
            allowNull: false
        },
        contact_no: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        image_path: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        student_no: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('enabled', 'disabled','archived'),
            allowNull: true
        },
        users_id: {
            type: DataTypes.INTEGER,
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

    Student.associate = function (models) {
        Student.belongsToMany(models.batch, {
            through: 'stu_registration',
            foreignKey: 'student_id'
        })
        Student.belongsToMany(models.exam, {
            through: 'exam_registration',
            foreignKey: 'student_id'
        })
    }

    return Student;

}






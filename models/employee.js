module.exports = function (sequelize, DataTypes) {
    const Employee = sequelize.define('employee', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        middle_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact_no: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: DataTypes.ENUM('male','female'),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('enabled', 'disabled','archived'),
            allowNull: false
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: true
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

    return Employee;
}






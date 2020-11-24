module.exports = function (sequelize, DataTypes) {
    const Class = sequelize.define('class', {
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
        branch_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'branch',
                key: 'id'
            }
        },
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'employee',
                key: 'id'
            }
        },
        day: {
            type: DataTypes.ENUM('monday', 'tuesday','wednesday','thursday','friday','saturday','sunday'),
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

    return Class;

}






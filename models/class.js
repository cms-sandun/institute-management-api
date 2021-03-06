module.exports = function (sequelize, DataTypes) {
    const Class = sequelize.define('classes', {
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
        day: {
            type: DataTypes.ENUM('monday', 'tuesday','wednesday','thursday','friday','saturday','sunday'),
            allowNull: true
        },
        start_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        end_at: {
            type: DataTypes.TIME,
            allowNull: true
        },
        is_repeated: {
            type: DataTypes.INTEGER,
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






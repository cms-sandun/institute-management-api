module.exports = function (sequelize, DataTypes) {
    const Guardian = sequelize.define('guardian', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        type: {
            type: DataTypes.ENUM('mother','father','relation'),
            allowNull: false
        },

        fullname: {
            type: DataTypes.STRING,
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
        email: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        student_id: {
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

    return Guardian;


}






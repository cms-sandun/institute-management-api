
module.exports = function (sequelize, DataTypes) {
    const Payment = sequelize.define('payment', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        paid_amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        remaining_amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        payment_method: {
            type: DataTypes.ENUM('direct', 'bank deposit','online payment'),
            allowNull: false
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

    Payment.associate = function (models) {
        Payment.belongsTo(models.student, {foreignKey:'student_id'})
    }

    return Payment;

}






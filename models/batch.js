module.exports = function (sequelize, DataTypes) {
    const Batch = sequelize.define('batch', {
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
        student_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        course_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'course',
                key: 'id'
            }
        },
        branch_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'branch',
                key: 'id'
            }
        },
        year: {
            type: DataTypes.INTEGER(4),
            allowNull: false,
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

    return Batch;

}






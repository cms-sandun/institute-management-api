module.exports = function (sequelize, DataTypes) {
    const Exam = sequelize.define('exam', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        batch_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        exam_name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        exam_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        end_time: {
            type: DataTypes.TIME,
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

    Exam.associate = function (models) {
        Exam.belongsTo(models.batch, {foreignKey:'batch_id'})
        Exam.belongsToMany(models.student, {
            through: 'exam_registration',
            foreignKey: 'exam_id'
        })
    }

    return Exam;

}






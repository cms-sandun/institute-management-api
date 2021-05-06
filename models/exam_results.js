module.exports = function (sequelize, DataTypes) {
    const ExamResults = sequelize.define('exam_results', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        exam_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        student_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        result: {
            type: DataTypes.TEXT,
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

    ExamResults.associate = function (models) {
        ExamResults.belongsTo(models.student, {foreignKey:'student_id'})
    }

    return ExamResults;
}

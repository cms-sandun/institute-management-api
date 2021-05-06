const examModel = require("../models").exam;
const batchModel = require("../models").batch;
const studentModel = require("../models").student;
const examRegistrationModel = require("../models").exam_registration;

class ExamRepository {

    create(exam) {
        return examModel.create(exam)
    }

    findAll() {
        return examModel.findAll({
            include: [
                {
                    model: batchModel,
                    attributes: ["name"]
                }
            ]
        })
    }

    findStudentsByExamId(exam_id) {
        return examModel.findAll({
            include:
                {
                    model: studentModel,
                    through: {where: {exam_id: exam_id}}
                }
        })
    }

    findById(id) {
        return examModel.findOne({
            where: {
                id: id
            }
        })
    }

    update(id, exam) {
        return examModel.update(
            exam,
            {
                where: {
                    id: id
                }
            }
        )
    }

    destroy(id) {
        return examModel.destroy({
            where: {
                id: id
            }
        })
    }
}

const examRepository = new ExamRepository();
export default examRepository;

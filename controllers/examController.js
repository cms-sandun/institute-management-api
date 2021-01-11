import examRepository from "../repositories/examRepository";

class ExamController {

    async saveExam(req, res) {
        try {
            const exam = {};
            exam.name = req.body.name;
            exam.year = req.body.year;
            exam.course_fee = req.body.course_fee;
            exam.course_id = req.body.course_id;
            exam.branch_id = req.body.branch_id;
            exam.status = 'enabled';

            const newExam = await examRepository.create(exam);
            res.status(200).send({
                'success': true,
                'data': newExam,
                'msg': "Successfully Saved"
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getAllExames(req, res) {
        try {
            let exames = await examRepository.findAll();
            res.status(200).send({
                'success': true,
                'data': exames
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getExamById(req, res) {
        try {
            let examId = req.params.id;
            let exam = await examRepository.findById(examId);
            res.status(200).send({
                'success': true,
                'data': exam
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async updateExam(req, res) {
        try {
            let exam = {};

            let examId = req.params.id;
            exam.name = req.body.name;
            exam.year = req.body.year;
            exam.course_fee = req.body.course_fee;

            let isUpdated = await examRepository.update(examId, exam)

            if (isUpdated) {
                res.status(200).send({
                    'success': true,
                    'msg': "Successfully Updated"
                });
            }
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async deleteExam(req, res) {
        try {
            const examId = req.params.id
            let isDeleted = await examRepository.destroy(examId)
            if (isDeleted) {
                res.status(200).send({
                    'success': true,
                    'msg': "Successfully Deleted"
                });
            }
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

}

const examController = new ExamController();
export default examController;

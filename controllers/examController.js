import examRepository from "../repositories/examRepository";

class ExamController {

    async saveExam(req, res) {
        try {
            //create object
            const exam = {};
            exam.batch_id = req.body.batch_id;
            exam.exam_name = req.body.name;
            exam.exam_date = req.body.exam_date;
            exam.start_time = req.body.start_time;
            exam.end_time = req.body.end_time;

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

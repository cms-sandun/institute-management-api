import examResultsRepository from "../repositories/examResultsRepository";


class ExamResultsController {

    async getResultsByExamId(req, res) {
        try {
            const exam_id = req.query.exam_id
            let results = await examResultsRepository.findResultsByExamId(exam_id);
            res.status(200).send({
                'success': true,
                'data': results
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

}

const examResultsController = new ExamResultsController();
export default examResultsController;

import examRepository from "../repositories/examRepository";
import examResultsRepository from "../repositories/examResultsRepository";
import studentRepository from "../repositories/studentRepository";
import reportHelper from "../helpers/reportHelper";
import moment from "moment";

class ReportController {

    async getResultSummaryReport(req, res) {
        try {
            //create object
            const selectedExam = req.query.exam_id;
            const resultsSummary = await examResultsRepository.findByExamId(selectedExam);
            const exam = await examRepository.findById(selectedExam)

            // Get total student count
            var total = 0;
            resultsSummary.forEach((row) => {
                total += row.dataValues.result_count;
            })

            // Calculate percentage
            var percentages = []
            resultsSummary.forEach((row) => {
                const percentage = (row.dataValues.result_count / total) * 100
                percentages.push(percentage.toFixed(2))
            })

            const examDate = moment(exam.exam_date).format('YYYY-MM-DD');
            const reportDate = moment(new Date()).format('YYYY-MM-DD');

            const data = {
                examDate : examDate,
                reportDate: reportDate,
                dataArr : percentages,
                resultsSummary: resultsSummary
            };

            const path = await reportHelper.exportPdf("Exam_Results","resultsSummary",data)
            res.status(200).send({
                'success': true,
                'data': path
            });

        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

}

const reportController = new ReportController();
export default reportController;

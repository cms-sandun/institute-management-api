import examRepository from "../repositories/examRepository";
import studentRepository from "../repositories/studentRepository";
import emailHelper from "../helpers/emailHelper";
import examRegRepository from "../repositories/examRegRepository";
import examResultsRepository from "../repositories/examResultsRepository";
import reportHelper from "../helpers/reportHelper";
import moment from "moment";

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

    async notifyBatch(req, res) {
        try {
            const exam_id = req.body.exam_id
            const exam = await examRepository.findById(exam_id)

            // Get students by batch
            const students = await studentRepository.findByBatchId(exam.batch_id)

            // Send batch email to notify about exam
            students.forEach(student => {
                const emaildata = {
                    email: student.email,
                    subject: "New exam is scheduled. Please check the below link",
                    text: `
                                <p>Hello ${student.first_name}</p>
                                <p>New exam has been published.</p>
                                <h5>Exam details</h5>
                                <p>Exam : ${exam.exam_name}</p>
                                <p>Exam Date : ${exam.exam_date}</p>
                                <p>Exam Time : ${exam.start_time} - ${exam.end_time}</p>
                                <h5>Please click the below link for enrollment</h5>
                                <a href="http://localhost:3000/exams/enroll?stu_id=${student.id}&exam_id=${exam_id}">Enroll Now</a>
                            `
                }
                emailHelper.sendTextEmail(emaildata)
            })

            res.status(200).send({
                'success': true,
                'msg': "Successfully notified " + students.length + " students."
            });


        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async enrollToExam(req, res) {
        try {
            const stu_id = req.query.stu_id
            const exam_id = req.query.exam_id

            if (!stu_id || !exam_id) {
                res.status(200).send({
                    'success': false,
                    'msg': "Error occurred"
                });
            }

            const obj = {
                student_id: stu_id,
                exam_id: exam_id
            }

            // Get students by batch
            const examReg = await examRegRepository.create(obj)

            // Get exam object
            const exam = await examRepository.findById(exam_id)

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

    async addExamResult(req, res) {

        try {
            const exam_id = req.body.exam_id
            const stu_id = req.body.student_id
            const result = req.body.result

            if (!stu_id || !exam_id || !result) {
                res.status(200).send({
                    'success': false,
                    'msg': "values are missing"
                });
                return
            }

            const obj = {
                exam_id: exam_id,
                student_id: stu_id,
                result: result
            }

            const examResult = await examResultsRepository.create(obj)

            res.status(200).send({
                'success': true,
                'data': examResult
            });

        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }

    }

    async exportEnrolledStudentsReport(req, res) {

        try {
            const exam_id = req.query.exam_id

            if (!exam_id) {
                res.status(200).send({
                    'success': false,
                    'msg': "values are missing"
                });
            }

            var enrolledStudents = await examRepository.findStudentsByExamId(exam_id)
            const exam = await examRepository.findById(exam_id)
            var students = enrolledStudents[0].dataValues.students

            const data = {
                examName: exam.exam_name,
                examDate: moment(exam.exam_date).format('YYYY-MM-DD'),
                enrolledStudents: students
            }

            const path = await reportHelper.exportPdf("Enrolled_Results","enrolledStudents",data)
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

    async exportEnrolledStudentsList(req, res) {

        try {
            const exam_id = req.query.exam_id

            if (!exam_id) {
                res.status(200).send({
                    'success': false,
                    'msg': "values are missing"
                });
                return
            }


            var enrolledStudents = await examRepository.findStudentsByExamId(exam_id)
            var students = enrolledStudents[0].dataValues.students

            res.status(200).send({
                'success': true,
                'data': students
            });

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

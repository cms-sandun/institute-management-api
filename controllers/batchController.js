import batchRepository from "../repositories/batchRepository";
import studentRegRepository from "../repositories/studentRegRepository";

class BatchController {

    async saveBatch(req, res) {
        try {
            const batch = {};
            batch.name = req.body.name;
            batch.description = req.body.description;
            batch.course_id = req.body.course_id;
            batch.status = 'enabled';

            const newBatch = await batchRepository.create(batch);
            res.status(200).send({
                'success': true,
                'data': newBatch,
                'msg': "Successfully Saved"
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getAllBatches(req, res) {
        try {
            let batches = await batchRepository.findAll();
            res.status(200).send({
                'success': true,
                'data': batches
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getBatchById(req, res) {
        try {
            let batchId = req.params.id;
            let batch = await batchRepository.findById(batchId);
            res.status(200).send({
                'success': true,
                'data': batch
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async updateBatch(req, res) {
        try {
            let batch = {};

            let batchId = req.params.id;
            batch.name = req.body.name;
            batch.year = req.body.year;
            batch.description = req.body.description;
            batch.course_id = req.body.course_id;
            batch.status = 'enabled';

            let isUpdated = await batchRepository.update(batchId, batch)

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

    async deleteBatch(req, res) {
        try {
            const batchId = req.params.id
            let isDeleted = await batchRepository.destroy(batchId)
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

    async addAssociateStudent(req, res) {
        try {
            const batchId = req.body.batch_id
            const student_id = req.body.student_id

            const payload = {
                batch_id : batchId,
                student_id : student_id
            }

            let register = await studentRegRepository.create(payload)

            if (register) {
                res.status(200).send({
                    'success': true,
                    'msg': "Successfully Added"
                });
            }
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getAssociateStudents(req, res) {
        try {
            const batchId = req.query.batch_id
            let registeredStudents = await batchRepository.findStudentsByBatchId(batchId)
            var students = registeredStudents[0].dataValues.students

            if (students) {
                res.status(200).send({
                    'success': true,
                    'data': students
                });
            }
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async deleteAssociateStudents(req, res) {
        try {
            const batchId = req.query.batch_id
            let registeredStudents = await batchRepository.findStudentsByBatchId(batchId)
            var students = registeredStudents[0].dataValues.students

            if (students) {
                res.status(200).send({
                    'success': true,
                    'data': students
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

const batchController = new BatchController();
export default batchController;

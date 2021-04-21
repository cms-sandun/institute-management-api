import classesRepository from "../repositories/classesRepository";

class ClassesController {

    async saveCls(req, res) {
        try {
            const classes = {};
            classes.name = req.body.name;
            classes.teacher_id = req.body.teacher_id;
            classes.day = req.body.day;
            classes.start_at = req.body.start_at;
            classes.end_at = req.body.end_at;
            classes.status = 'enabled';

            const newCls = await classesRepository.create(classes);
            res.status(200).send({
                'success': true,
                'data': newCls,
                'msg': "Successfully Saved"
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getAllClss(req, res) {
        try {
            let classeses = await classesRepository.findAll();
            res.status(200).send({
                'success': true,
                'data': classeses
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getClssByQueryParams(req, res) {
        try {
            let nameQuery = req.query.name;
            console.log(nameQuery)
            let students = await classesRepository.findByName(nameQuery);
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

    async getClsById(req, res) {
        try {
            let classesId = req.params.id;
            let classes = await classesRepository.findById(classesId);
            res.status(200).send({
                'success': true,
                'data': classes
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async updateCls(req, res) {
        try {
            let classes = {};

            let classesId = req.params.id;
            classes.name = req.body.name;
            classes.description = req.body.description;
            classes.classes_fee = req.body.classes_fee;
            classes.status = req.body.status;

            let isUpdated = await classesRepository.update(classesId, classes)

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

    async deleteCls(req, res) {
        try {
            const classesId = req.params.id
            let isDeleted = await classesRepository.destroy(classesId)
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

const classesController = new ClassesController();
export default classesController;

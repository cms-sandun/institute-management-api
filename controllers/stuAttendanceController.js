import stuAttendanceRepository from "../repositories/stuAttendanceRepositoy";
import status from '../enums/status';

class StuAttendanceController {

    async saveStuAttendance(req, res) {
        try {
            //create object
            const stuAttendance = {};
            stuAttendance.status = req.body.status;
            stuAttendance.stu_id = req.body.stu_id;
            stuAttendance.classes_id = req.body.classes_id;

            const newStuAttendance = await stuAttendanceRepository.create(stuAttendance);
            res.status(200).send({
                'success': true,
                'data': newStuAttendance,
                'msg': "Successfully Saved"
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }


    async getAllStuAttendance(req, res) {
        try {
            let stuAttendance = await stuAttendanceRepository.findAll();
            res.status(200).send({
                'success': true,
                'data': stuAttendance
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getStuAttendanceById(req, res) {
        try {
            let stuAttendanceId = req.params.id;
            let stuAttendance = await stuAttendanceRepository.findById(stuAttendanceId);
            res.status(200).send({
                'success': true,
                'data': stuAttendance
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async updateStuAttendance(req, res) {
        try {
            let stuAttendance = {};

            let stuAttendanceId = req.params.id;
            stuAttendance.status = req.body.status;

            let isUpdated = await stuAttendanceRepository.update(stuAttendanceId, stuAttendance)

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

    async deleteStuAttendance(req, res) {
        try {
            const stuAttendanceId = req.params.id
            let isDeleted = await stuAttendanceRepository.destroy(stuAttendanceId)
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

const stuAttendanceController = new StuAttendanceController();
export default stuAttendanceController;

import empAttendanceRepository from "../repositories/empAttendanceRepositoy";
import status from '../enums/status';

class EmpAttendanceController {

    async saveEmpAttendance(req, res) {
        try {
            //create object
            const empAttendance = {};
            empAttendance.status = req.body.status;
            empAttendance.employee_id = req.body.emp_id;

            const newEmpAttendance = await empAttendanceRepository.create(empAttendance);
            res.status(200).send({
                'success': true,
                'data': newEmpAttendance,
                'msg': "Successfully Saved"
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }


    async getAllEmpAttendance(req, res) {
        try {
            let empAttendance = await empAttendanceRepository.findAll();
            res.status(200).send({
                'success': true,
                'data': empAttendance
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getEmpAttendanceById(req, res) {
        try {
            let empAttendanceId = req.params.id;
            let empAttendance = await empAttendanceRepository.findById(empAttendanceId);
            res.status(200).send({
                'success': true,
                'data': empAttendance
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async updateEmpAttendance(req, res) {
        try {
            let empAttendance = {};

            let empAttendanceId = req.params.id;
            empAttendance.status = req.body.status;

            let isUpdated = await empAttendanceRepository.update(empAttendanceId, empAttendance)

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

    async deleteEmpAttendance(req, res) {
        try {
            const empAttendanceId = req.params.id
            let isDeleted = await empAttendanceRepository.destroy(empAttendanceId)
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

const empAttendanceController = new EmpAttendanceController();
export default empAttendanceController;

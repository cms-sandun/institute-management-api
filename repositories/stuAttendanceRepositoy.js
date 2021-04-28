import {Op} from 'sequelize'
import sequelize from 'sequelize'

const stuAttendanceModel = require("../models").stu_attendance;
const student = require("../models").student;


class StuAttendanceRepository {

    create(stuAttendance) {
        return stuAttendanceModel.create(stuAttendance)
    }

    findAll() {
        return stuAttendanceModel.findAll()
    }

    findById(id) {
        return stuAttendanceModel.findOne({
            where: {
                id: id
            }
        })
    }

    findByClassIdAndDate(class_id, date) {
        return stuAttendanceModel.findAll({
            where: {
                [Op.and]: [
                    {classes_id: class_id},
                    sequelize.where(sequelize.fn('DATE', sequelize.col('stuAttendance.created_at')), date)
                ]
            },
            include: [
                {
                    model: student,
                    attributes: ["first_name"]
                }
            ]
        })
    }

    update(id, stuAttendance) {
        return stuAttendanceModel.update(
            {
                status: stuAttendance.status
            },
            {
                where: {
                    id: id
                }
            }
        )
    }

    destroy(id) {
        return stuAttendanceModel.destroy({
            where: {
                id: id
            }
        })
    }

}

const stuAttendanceRepository = new StuAttendanceRepository();
export default stuAttendanceRepository;

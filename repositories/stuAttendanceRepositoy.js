import  sequelize from 'sequelize'
const stuAttendanceModel =  require("../models").stu_attendance;


class StuAttendanceRepository{

    create(stuAttendance){
        return stuAttendanceModel.create(stuAttendance)
    }

    findAll(){
        return stuAttendanceModel.findAll()
    }

    findById(id){
        return stuAttendanceModel.findOne({
            where :{
                id : id
            }
        })
    }

    findByClassIdAndDate(class_id, date){
        return stuAttendanceModel.findAll({
            where :sequelize.where(sequelize.fn('DATE', sequelize.col('created_at')), date)
        })
    }

    update(id, stuAttendance){
        return stuAttendanceModel.update(
            {
                status: stuAttendance.status
            },
            {
                where:{
                    id: id
                }
            }
        )
    }

    destroy(id){
        return stuAttendanceModel.destroy({
            where :{
                id : id
            }
        })
    }

}

const stuAttendanceRepository = new StuAttendanceRepository();
export default stuAttendanceRepository;

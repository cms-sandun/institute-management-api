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

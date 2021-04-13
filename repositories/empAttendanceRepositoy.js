const empAttendanceModel =  require("../models").emp_attendance;

class EmpAttendanceRepository{

    create(empAttendance){
        return empAttendanceModel.create(empAttendance)
    }

    findAll(){
        return empAttendanceModel.findAll()
    }

    findById(id){
        return empAttendanceModel.findOne({
            where :{
                id : id
            }
        })
    }

    update(id, empAttendance){
        return empAttendanceModel.update(
            {
                status: empAttendance.status
            },
            {
                where:{
                    id: id
                }
            }
        )
    }

    destroy(id){
        return empAttendanceModel.destroy({
            where :{
                id : id
            }
        })
    }

}

const empAttendanceRepository = new EmpAttendanceRepository();
export default empAttendanceRepository;

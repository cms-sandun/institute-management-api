const studentModel =  require("../models").student;

class StudentRepository{

    create(student){
        return studentModel.create(student)
    }

    findAll(){
        return studentModel.findAll()
    }

    findById(id){
        return studentModel.findOne({
            where :{
                id : id
            }
        })
    }

    update(id, student){
        return studentModel.update(
            {
                first_name: student.first_name,
                middle_name: student.middle_name,
                last_name: student.last_name,
                address: student.address,
                gender: student.gender,
                contact_no: student.contact_no,
                dob: student.dob,
                email: student.email,
            },
            {
                where:{
                    id: id
                }
            }
        )
    }

    destroy(id){
        return studentModel.destroy({
            where :{
                id : id
            }
        })
    }

}

const studentRepository = new StudentRepository();
export default studentRepository;

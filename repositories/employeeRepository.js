const employeeModel =  require("../models").employee;

class StudentRepository{

    create(employee){
        return employeeModel.create(employee)
    }

    findAll(){
        return employeeModel.findAll()
    }

    findById(id){
        return employeeModel.findOne({
            where :{
                id : id
            }
        })
    }

    update(id, employee){
        return employeeModel.update(
            {
                first_name: employee.first_name,
                middle_name: employee.middle_name,
                last_name: employee.last_name,
                dob: employee.dob,
                address: employee.address,
                contact_no: employee.contact_no,
                image_path: employee.image_path,
                gender: employee.gender,
                email: employee.email,
            },
            {
                where:{
                    id: id
                }
            }
        )
    }

    destroy(id){
        return employeeModel.destroy({
            where :{
                id : id
            }
        })
    }

}

const studentRepository = new StudentRepository();
export default studentRepository;

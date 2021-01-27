const employeeModel =  require("../models").employee;

class EmployeeRepository{

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
                qualifications: employee.qualifications,
                contact_no: employee.contact_no,
                image_path: employee.image_path,
                gender: employee.gender,
                email: employee.email,
                type: employee.type,
                status: employee.status
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

const employeeRepository = new EmployeeRepository();
export default employeeRepository;

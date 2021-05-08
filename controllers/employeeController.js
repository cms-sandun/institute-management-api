import employeeRepository from '../repositories/employeeRepository';
import status from '../enums/status';
import numberHelper from '../helpers/numberHelper';
import responseHelper from "../helpers/responseHelper";
import studentRepository from "../repositories/studentRepository";
const fs = require('fs');

class EmployeeController {

    async saveEmployee(req, res) {
        try {
            console.log(req.body)
            let employee = {};

            // Get values from request body
            employee.first_name= req.body.firstName;
            employee.middle_name= req.body.middleName;
            employee.last_name= req.body.lastName;
            employee.employee_no = numberHelper.generateRandomNumber(100000);
            employee.address= req.body.address;
            employee.gender= req.body.gender;
            employee.contact_no= req.body.contactNo;
            employee.email= req.body.email;
            employee.dob= req.body.dob;
            employee.qualifications= req.body.qualifications;
            employee.type= req.body.type;
            employee.status = status.ENABLED;

            // Upload profile image
            // fs.writeFileSync(__dirname + '/../uploads/'+Date.now()+'.jpg', req.file,  function(err){
            //     if (err) console.log(err)
            // })

            let newEmployee = await employeeRepository.create(employee);

            return responseHelper.sendSuccessfullyCreated(res, newEmployee);

        } catch (e) {
            return responseHelper.sendBadRequest(res, e.message);
        }
    }

    async getAllEmployees(req, res) {
        try {
            let employees = await employeeRepository.findAll();
            return responseHelper.sendSuccessResponse(res, employees);
        } catch (e) {
            return responseHelper.sendBadRequest(res, e.message);
        }
    }

    async getEmployeesByQueryParams(req, res) {
        try {
            let nameQuery = req.query.name;
            let employees = await employeeRepository.findByName(nameQuery);
            return responseHelper.sendSuccessResponse(res, employees);
        } catch (e) {
            return responseHelper.sendBadRequest(res, e.message);
        }
    }

    async getEmployeeById(req, res) {
        try {
            let employeeId = req.params.id;
            let employee = await employeeRepository.findById(employeeId);
            res.status(200).send({
                'success': true,
                'data': employee
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async updateEmployee(req, res) {
        try {
            let employee = {};

            let employeeId = req.params.id;
            employee.first_name = req.body.firstName;
            employee.middle_name = req.body.middleName;
            employee.last_name = req.body.lastName;
            employee.address = req.body.address;
            employee.gender = req.body.gender;
            employee.contact_no = req.body.contactNo;
            employee.dob = req.body.dob;
            employee.email = req.body.email;

            let isUpdated = await employeeRepository.update(employeeId, employee)

            return responseHelper.sendSuccessfullyUpdated(res, isUpdated);
        } catch (e) {
            return responseHelper.sendBadRequest(res, e.message);
        }
    }

    async deleteEmployee(req, res) {
        try {
            const employeeId = req.params.id
            let isDeleted = await employeeRepository.destroy(employeeId)
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

const employeeController = new EmployeeController();
export default employeeController;

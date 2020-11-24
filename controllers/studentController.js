import studentRepository from '../repositories/studentRepository';

class StudentController {

    async saveStudent(req, res) {
        try {
            let student = {};
            // Get values from request body
            student.branch_id = req.body.branchId;
            student.first_name = req.body.firstName;
            student.middle_name = req.body.middleName;
            student.last_name = req.body.lastName;
            student.address = req.body.address;
            student.gender = req.body.gender;
            student.contact_no = req.body.contactNo;
            student.dob = req.body.dob;
            student.email = req.body.email;
            student.status = 'disabled';

            // Generate student ID
            //TODO: call the helper and generate student id
            student.studentNo = 'autogenerated';

            //TODO: upload image and set image path

            let newStudent = await studentRepository.create(student);

            res.status(200).send({
                'success': true,
                'data': newStudent,
                'msg': "Successfully Saved"
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getAllStudents(req, res) {
        try {
            let students = await studentRepository.findAll();
            res.status(200).send({
                'success': true,
                'data': students
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getStudentsByQueryParams(req, res) {
        try {
            let nameQuery = req.query.name;
            console.log(nameQuery)
            let students = await studentRepository.findByName(nameQuery);
            res.status(200).send({
                'success': true,
                'data': students
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getStudentById(req, res) {
        try {
            let studentId = req.params.id;
            let student = await studentRepository.findById(studentId);
            res.status(200).send({
                'success': true,
                'data': student
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async updateStudent(req, res) {
        try {
            let student = {};

            let studentId = req.params.id;
            student.first_name = req.body.firstName;
            student.middle_name = req.body.middleName;
            student.last_name = req.body.lastName;
            student.address = req.body.address;
            student.gender = req.body.gender;
            student.contact_no = req.body.contactNo;
            student.dob = req.body.dob;
            student.email = req.body.email;

            let isUpdated = await studentRepository.update(studentId, student)

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

    async deleteStudent(req, res) {
        try {
            const studentId = req.params.id
            let isDeleted = await studentRepository.destroy(studentId)
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

const studentController = new StudentController();
export default studentController;

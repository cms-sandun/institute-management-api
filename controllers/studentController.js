import studentRepository from '../repositories/studentRepository';
import emailHelper from "../helpers/emailHelper";
import imageUploadHelper from "../helpers/imageUploadHelper";
import userRepository from "../repositories/userRepository";
var QRCode = require('qrcode')
var fs = require('fs');

class StudentController {

    async saveStudent(req, res) {
        try {

            let student = {};
            // Get values from request body
            student.first_name = req.body.firstName;
            student.middle_name = req.body.middleName;
            student.last_name = req.body.lastName;
            student.address = req.body.address;
            student.gender = req.body.gender;
            student.contact_no = req.body.contactNo;
            student.dob = req.body.dob;
            student.email = req.body.email;
            student.status = 'enabled';
            //student.image_path = req.file.filename
            // Generate student ID
            student.student_no = Math.floor(1000 + Math.random() * 9000);

            let newStudent = await studentRepository.create(student);
            // Create QR code and email to the student
            QRCode.toFile('images/QRcode.png', newStudent.id.toString(), {
                color: {
                    dark: '#000',  // Black dots
                    light: '#0000' // Transparent background
                }
            }, function (err) {
                if (err) throw err

                const emaildata = {
                    studentEmail : student.email,
                    QRImagePath : "http://localhost:5000/images/QRcode.png",
                    studentName:student.first_name
                }
                emailHelper.sendEmailWithAttachment(emaildata)
            })

            // Create user account
            let user = {};
            user.username = student.first_name.toLowerCase()+Math.floor(100 + Math.random() * 100);
            user.password = Math.floor(1000 + Math.random() * 9000);
            user.user_type = 'student';
            let newUser = await userRepository.create(user);

            // Send user account details to the student
            const emaildata = {
                email: student.status,
                subject: "User account created",
                text: `
                                <p>Hello ${student.first_name}</p>
                                <p>New user account has been created.</p>
                                <h5>details</h5>
                                <p>User Name : ${newUser.username}</p>
                                <p>Pwd : ${newUser.password}</p>
                                <a href="http://localhost:3000/login">Login</a>
                            `
            }

            await emailHelper.sendTextEmail(emaildata)


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

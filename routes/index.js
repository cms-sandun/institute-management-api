import courseController from '../controllers/courseController'
import studentController from '../controllers/studentController'
import branchController from '../controllers/branchController'
import employeeController from "../controllers/employeeController";
import batchController from "../controllers/batchController";
import examController from "../controllers/examController";
import empAttendanceController from "../controllers/empAttendanceController";
import stuAttendanceController from "../controllers/stuAttendanceController";
import userController from "../controllers/userController";
import guardianController from "../controllers/guardianController";
import classesController from "../controllers/classesController";
import paymentController from "../controllers/paymentController";


var multer  = require('multer')

var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, __dirname + '/../images/')
    },

    filename: function (req, file, cb) {
        let filename = file.originalname;
        req.body.file = filename

        cb(null, filename)
    }
})

var upload = multer({ storage: storage })

import express from 'express';
import reportController from "../controllers/reportController";
import examResultsController from "../controllers/examResultsController";
import eventsController from "../controllers/eventsController";


const router = express.Router();

// Employee
router.post('/api/employees', upload.single('profileImage'), employeeController.saveEmployee);
router.get('/api/employees', employeeController.getAllEmployees);
router.get('/api/employees/search', employeeController.getEmployeesByQueryParams);
router.get('/api/employees/:id', employeeController.getEmployeeById);
router.put('/api/employees/:id', employeeController.updateEmployee);
router.delete('/api/employees/:id', employeeController.deleteEmployee);

// Branch
router.post('/api/branches', branchController.saveBranch);
router.get('/api/branches', branchController.getAllBranches);
router.get('/api/branches/:id', branchController.getBranchById);
router.put('/api/branches/:id', branchController.updateBranch);
router.delete('/api/branches/:id', branchController.deleteBranch);

// Student
router.post('/api/students', upload.single('profileImage'), studentController.saveStudent);
router.get('/api/students', studentController.getAllStudents);
router.get('/api/students/search', studentController.getStudentsByQueryParams);
router.get('/api/students/:id', studentController.getStudentById);
router.put('/api/students/:id', studentController.updateStudent);
router.delete('/api/students/:id', studentController.deleteStudent);

// Course
router.post('/api/courses', courseController.saveCourse);
router.get('/api/courses', courseController.getAllCourses);
router.get('/api/courses/search', courseController.getCoursesByQueryParams);
router.get('/api/courses/:id', courseController.getCourseById);
router.put('/api/courses/:id', courseController.updateCourse);
router.delete('/api/courses/:id', courseController.deleteCourse);

// Batch
router.post('/api/batches', batchController.saveBatch);
router.post('/api/batches/associate_students', batchController.addAssociateStudent);
router.get('/api/batches/associate_students', batchController.getAssociateStudents);
router.delete('/api/batches/associate_students', batchController.deleteAssociateStudents);
router.get('/api/batches', batchController.getAllBatches);
router.get('/api/batches/:id', batchController.getBatchById);
router.put('/api/batches/:id', batchController.updateBatch);
router.delete('/api/batches/:id', batchController.deleteBatch);

// Exam
router.post('/api/exams', examController.saveExam);
router.get('/api/exams/enrolled_students', examController.exportEnrolledStudentsList);
router.post('/api/exams/notify', examController.notifyBatch);
router.post('/api/exams/results', examController.addExamResult);
router.get('/api/exams/results', examResultsController.getResultsByExamId);
router.get('/api/exams', examController.getAllExames);
router.get('/api/exams/enroll', examController.enrollToExam);
router.get('/api/exams/:id', examController.getExamById);
router.delete('/api/exams/:id', examController.deleteExam);
router.get('/api/exams/export/enrolled_students', examController.exportEnrolledStudentsReport);


// Employee attendance
router.post('/api/employees/attendance', empAttendanceController.saveEmpAttendance);
router.get('/api/employees/attendance', empAttendanceController.getAllEmpAttendance);
router.get('/api/employees/:id/attendance', empAttendanceController.getEmpAttendanceById);
router.put('/api/employees/attendance/:id', empAttendanceController.updateEmpAttendance);
router.delete('/api/employees/attendance/:id', empAttendanceController.deleteEmpAttendance);

// User
router.post('/api/users', userController.saveUser);
router.get('/api/users', userController.getAllUsers);
router.post('/api/users/login', userController.login);
router.get('/api/users/:id', userController.getUsersById);
router.put('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

// Guardian
router.post('/api/guardian', guardianController.saveGuardian);
router.get('/api/guardian', guardianController.getAllGuardians);
router.get('/api/guardian/:id', guardianController.getGuardianById);
router.put('/api/guardian/:id', guardianController.updateGuardian);
router.delete('/api/guardian/:id', guardianController.deleteGuardian);

// Student attendance
router.post('/api/students/attendance', stuAttendanceController.saveStuAttendance);
router.get('/api/students/attendance', stuAttendanceController.getAllStuAttendance);
router.get('/api/students/:id/attendance', stuAttendanceController.getStuAttendanceById);
router.get('/api/students/attendance/search', stuAttendanceController.getStuAttendanceByClassIdAndDate);
router.get('/api/students/attendance/export', stuAttendanceController.exportAttendanceReport);
router.put('/api/students/attendance/:id', stuAttendanceController.updateStuAttendance);
router.delete('/api/students/attendance/:id', stuAttendanceController.deleteStuAttendance);


// Classes
router.post('/api/classes', classesController.saveCls);
router.get('/api/classes', classesController.getAllClss);
router.put('/api/classes/:id', classesController.updateCls);
router.get('/api/classes/search', classesController.getClssByQueryParams);
router.delete('/api/classes/:id', classesController.deleteCls);

// Reports
router.get('/api/reports/result_summary', reportController.getResultSummaryReport);

// Payments
router.post('/api/payments', paymentController.savePayment);
router.get('/api/payments', paymentController.getAllPayments);
router.put('/api/payments/:id', paymentController.updatePayment);
router.delete('/api/payments/:id', paymentController.deletePayment);

// Events
router.get('/api/events', eventsController.getAllEvents);

export default router;


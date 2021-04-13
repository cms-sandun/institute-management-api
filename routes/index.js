import courseController from '../controllers/courseController'
import studentController from '../controllers/studentController'
import branchController from '../controllers/branchController'
import employeeController from "../controllers/employeeController";
import batchController from "../controllers/batchController";
import examController from "../controllers/examController";
import empAttendanceController from "../controllers/empAttendanceController";
import userController from "../controllers/userController";
import guardianController from "../controllers/guardianController";
import express from 'express';


const router = express.Router();

// Employee
router.post('/api/employees', employeeController.saveEmployee);
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
router.post('/api/students', studentController.saveStudent);
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
router.get('/api/batches', batchController.getAllBatches);
router.get('/api/batches/:id', batchController.getBatchById);
router.put('/api/batches/:id', batchController.updateBatch);
router.delete('/api/batches/:id', batchController.deleteBatch);

// Exam
router.post('/api/exams', examController.saveExam);
router.get('/api/exams', examController.getAllExames);
router.get('/api/exams/:id', examController.getExamById);
router.put('/api/exams/:id', examController.updateExam);
router.delete('/api/exams/:id', examController.deleteExam);

// Employee attendance
router.post('/api/empAttendance', empAttendanceController.saveEmpAttendance);
router.get('/api/empAttendance', empAttendanceController.getAllEmpAttendance);
router.get('/api/empAttendance/:id', empAttendanceController.getEmpAttendanceById);
router.put('/api/empAttendance/:id', empAttendanceController.updateEmpAttendance);
router.delete('/api/empAttendance/:id', empAttendanceController.deleteEmpAttendance);

// User
router.post('/api/users', userController.saveUser);
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:id', userController.getUsersById);
router.put('/api/users/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

// Guardian
router.post('/api/guardian', guardianController.saveGuardian);
router.get('/api/guardian', guardianController.getAllGuardians);
router.get('/api/guardian/:id', guardianController.getGuardianById);
router.put('/api/guardian/:id', guardianController.updateGuardian);
router.delete('/api/guardian/:id', guardianController.deleteGuardian);

export default router;


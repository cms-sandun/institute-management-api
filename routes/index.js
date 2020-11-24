import courseController from '../controllers/courseController'
import studentController from '../controllers/studentController'
import branchController from '../controllers/branchController'
import employeeController from "../controllers/employeeController";
import batchController from "../controllers/batchController";
import express from 'express';


const router = express.Router();

// Employee
router.post('/api/employees', employeeController.saveEmployee);
router.get('/api/employees', employeeController.getAllEmployees);
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
router.get('/api/courses/:id', courseController.getCourseById);
router.put('/api/courses/:id', courseController.updateCourse);
router.delete('/api/courses/:id', courseController.deleteCourse);

// Batch
router.post('/api/batches', batchController.saveBatch);
router.get('/api/batches', batchController.getAllBatches);
router.get('/api/batches/:id', batchController.getBatchById);
router.put('/api/batches/:id', batchController.updateBatch);
router.delete('/api/batches/:id', batchController.deleteBatch);

// Class


export default router;


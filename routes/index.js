import courseController from '../controllers/courseController'
import studentController from '../controllers/studentController'
import branchController from '../controllers/branchController'
import express from 'express';


const router = express.Router();

// Branch
router.post('/api/branches', branchController.saveBranch);
router.get('/api/branches', branchController.getAllBranches());
router.get('/api/branches/:id', branchController.getBranchById());
router.put('/api/branches/:id', branchController.updateBranch());
router.delete('/api/branches/:id', branchController.deleteBranch());

// Student
router.post('/api/students', studentController.saveStudent);
router.get('/api/students', studentController.getAllStudents);
router.get('/api/students/:id', studentController.getStudentById);
router.put('/api/students/:id', studentController.updateStudent);
router.delete('/api/students/:id', studentController.deleteStudent);

// Course
router.post('/api/courses', courseController.createCourse);
router.put('/api/courses/:id', courseController.updateCourse);
router.get('/api/courses', courseController.getAllCourses);
router.get('/api/courses/:id', courseController.getCourseById);

export default router;


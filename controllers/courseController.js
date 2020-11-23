
import courseRepository from '../repositories/courseRepository'

class CourseController {

    async createCourse(req, res) {
        var course = {};
        course.name = req.body.name;
        course.description = req.body.description;
        course.course_fee = req.body.course_fee;
        course.status = 'enabled';

        res.status(200).send(await courseRepository.create(course));
    }

    async updateCourse(req, res) {
        var course = {};
        var course_id = req.params.id

        course.name = req.body.name;
        course.description = req.body.description;
        course.course_fee = req.body.course_fee;

        res.status(200).send(await courseRepository.update(course_id, course));
    }

    async getAllCourses(req, res) {
        res.status(200).send(await courseRepository.getAll());
    }

    async getCourseById(req, res) {
        var course_id = req.params.id
        res.status(200).send(await courseRepository.getByID(course_id));
    }

}

const courseController = new CourseController();
export default courseController;
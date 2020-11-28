import courseRepository from "../repositories/courseRepository";
import studentRepository from "../repositories/studentRepository";

class CourseController {

    async saveCourse(req, res) {
        try {
            const course = {};
            course.name = req.body.name;
            course.description = req.body.description;
            course.course_fee = req.body.course_fee;
            course.status = 'enabled';

            const newCourse = await courseRepository.create(course);
            res.status(200).send({
                'success': true,
                'data': newCourse,
                'msg': "Successfully Saved"
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getAllCourses(req, res) {
        try {
            let coursees = await courseRepository.findAll();
            res.status(200).send({
                'success': true,
                'data': coursees
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getCoursesByQueryParams(req, res) {
        try {
            let nameQuery = req.query.name;
            console.log(nameQuery)
            let students = await courseRepository.findByName(nameQuery);
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

    async getCourseById(req, res) {
        try {
            let courseId = req.params.id;
            let course = await courseRepository.findById(courseId);
            res.status(200).send({
                'success': true,
                'data': course
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async updateCourse(req, res) {
        try {
            let course = {};

            let courseId = req.params.id;
            course.name = req.body.name;
            course.description = req.body.description;
            course.course_fee = req.body.course_fee;
            course.status = req.body.status;

            let isUpdated = await courseRepository.update(courseId, course)

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

    async deleteCourse(req, res) {
        try {
            const courseId = req.params.id
            let isDeleted = await courseRepository.destroy(courseId)
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

const courseController = new CourseController();
export default courseController;

const course = require("../models").course;

class CourseRepository {
  getAll() {
    return course.findAll();
  }

  create(data) {
    return course.create(data);
  }

  getByID(id) {
    return course.findOne({
      where: { id: id },
    });
  }

  update(id, data) {
    return course.update(
      {
        name : data.name,
        description : data.description,
        course_fee : data.course_fee
      },
      {
        where: { id: id }
      }
    );
  }
}

const courseRepository = new CourseRepository();
export default courseRepository;

const courseModel = require("../models").course;

class CourseRepository {

  create(course){
    return courseModel.create(course)
  }

  findAll(){
    return courseModel.findAll()
  }

  findById(id){
    return courseModel.findOne({
      where :{
        id : id
      }
    })
  }

  update(id, course){
    return courseModel.update(
        {
          name: course.name,
          description: course.address,
          course_fee: course.contact_no
        },
        {
          where:{
            id: id
          }
        }
    )
  }

  destroy(id){
    return courseModel.destroy({
      where :{
        id : id
      }
    })
  }
  
}

const courseRepository = new CourseRepository();
export default courseRepository;

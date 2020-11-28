const {Op} = require('sequelize')

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

  findByName(name) {
    return courseModel.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${name}%`
            }
          }
        ]
      }
    })
  }

  update(id, course){
    return courseModel.update(
        {
          name: course.name,
          description: course.description,
          course_fee: course.course_fee,
          status: course.status
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

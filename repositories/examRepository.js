const examModel = require("../models").exam;

class ExamRepository {

  create(exam){
    return examModel.create(exam)
  }

  findAll(){
    return examModel.findAll()
  }

  findById(id){
    return examModel.findOne({
      where :{
        id : id
      }
    })
  }

  update(id, exam){
    return examModel.update(
        {
          name: exam.name,
          year: exam.year,
          course_fee: exam.course_fee
        },
        {
          where:{
            id: id
          }
        }
    )
  }

  destroy(id){
    return examModel.destroy({
      where :{
        id : id
      }
    })
  }

}

const examRepository = new ExamRepository();
export default examRepository;

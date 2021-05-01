const examModel = require("../models").exam;
const batchModel = require("../models").batch;

class ExamRepository {

  create(exam){
    return examModel.create(exam)
  }

  findAll(){
    return examModel.findAll({
      include: [
        {
          model: batchModel,
          attributes: ["name"]
        }
      ]
    })
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
       exam,
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

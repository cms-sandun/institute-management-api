const examResultsModel = require("../models").exam_results;
const studentModel = require("../models").student;
const {Sequelize} = require('sequelize')

class ExamResultsRepository {

  create(examResult){
    return examResultsModel.create(examResult)
  }

  findByExamId(exam_id){
    return examResultsModel.findAll({
      where : {
        exam_id : exam_id
      },
      attributes: ['result', [Sequelize.fn('COUNT', 'result'), 'result_count']],
      group: ['result']
    })
  }

  findResultsByExamId(exam_id){
    return examResultsModel.findAll({
      where : {
        exam_id : exam_id
      },
      include: studentModel
    })
  }

}

const examResultsRepository = new ExamResultsRepository();
export default examResultsRepository;

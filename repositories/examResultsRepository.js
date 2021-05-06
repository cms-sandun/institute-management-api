const examResultsModel = require("../models").exam_results;
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

}

const examResultsRepository = new ExamResultsRepository();
export default examResultsRepository;

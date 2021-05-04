const examRegModel = require("../models").exam_registration;

class ExamRegRepository {

  create(exam_registration){
    return examRegModel.create(exam_registration)
  }

}

const examRegRepository = new ExamRegRepository();
export default examRegRepository;

const studentRegModel = require("../models").stu_registration;

class StudentRegRepository {

  create(stu_registration){
    return studentRegModel.create(stu_registration)
  }

  delete(id){
    return studentRegModel.destroy({
      where : {
        id : id
      }
    })
  }

}

const studentRegRepository = new StudentRegRepository();
export default studentRegRepository;

const branchModel = require("../models").branch;

class BranchRepository {

  create(branch){
    return branchModel.create(branch)
  }

  findAll(){
    return branchModel.findAll()
  }

  findById(id){
    return branchModel.findOne({
      where :{
        id : id
      }
    })
  }

  update(id, branch){
    return branchModel.update(
        {
          name: branch.first_name,
          address: branch.middle_name,
          contact_no: branch.last_name
        },
        {
          where:{
            id: id
          }
        }
    )
  }

  destroy(id){
    return branchModel.destroy({
      where :{
        id : id
      }
    })
  }

}

const branchRepository = new BranchRepository();
export default branchRepository;

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
          name: branch.name,
          address: branch.address,
          contact_no: branch.contact_no
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

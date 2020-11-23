const batchModel = require("../models").batch;

class BatchRepository {

  create(batch){
    return batchModel.create(batch)
  }

  findAll(){
    return batchModel.findAll()
  }

  findById(id){
    return batchModel.findOne({
      where :{
        id : id
      }
    })
  }

  update(id, batch){
    return batchModel.update(
        {
          name: batch.name,
          year: batch.year,
          course_fee: batch.course_fee
        },
        {
          where:{
            id: id
          }
        }
    )
  }

  destroy(id){
    return batchModel.destroy({
      where :{
        id : id
      }
    })
  }

}

const batchRepository = new BatchRepository();
export default batchRepository;

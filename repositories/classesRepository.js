const {Op} = require('sequelize')

const classModel = require("../models").class;

class ClassesRepository {

  create(cls){
    return classModel.create(cls)
  }

  findAll(){
    return classModel.findAll()
  }

  findById(id){
    return classModel.findOne({
      where :{
        id : id
      }
    })
  }

  findByName(name) {
    return classModel.findAll({
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

  update(id, cls){
    return classModel.update(
        {
          name: cls.name,
          description: cls.day,
          start_at: cls.start_at,
          end_at: cls.end_at,
          status: cls.status
        },
        {
          where:{
            id: id
          }
        }
    )
  }

  destroy(id){
    return classModel.destroy({
      where :{
        id : id
      }
    })
  }
  
}

const classesRepository = new ClassesRepository();
export default classesRepository;

const guardianModel = require("../models").guardian;
const {Op} = require('sequelize')

class GuardianRepository {

    create(guardian) {
        return guardianModel.create(guardian)
    }

    findAll() {
        return guardianModel.findAll({
            order: [['id','DESC']]
        })
    }

    findById(id) {
        return guardianModel.findOne({
            where: {
                id: id
            }
        })
    }

    update(id, guardian) {
        return guardianModel.update(
            {
                type: guardian.type,
                fullname: guardian.fullname,
                gender: guardian.gender,
                contact_no: guardian.contact_no,
                email: guardian.email,
            },
            {
                where: {
                    id: id
                }
            }
        )
    }

    destroy(id) {
        return guardianModel.destroy({
            where: {
                id: id
            }
        })
    }

}

const guardianRepository = new GuardianRepository();
export default guardianRepository;

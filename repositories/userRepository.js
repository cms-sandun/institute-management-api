const userModel = require("../models").user;
const {Op} = require('sequelize')

class UserRepository {

    create(user) {
        return userModel.create(user)
    }

    findAll() {
        return userModel.findAll({
            order: [['id','DESC']]
        })
    }

    findById(id) {
        return userModel.findOne({
            where: {
                id: id
            }
        })
    }

    findByUserNameAndPwd(userName, pwd){
        return userModel.findOne({
            where: {
                username : userName,
                password: pwd
            }
        })
    }


    update(id, user) {
        return userModel.update(
            {
                username: user.username,
                password: user.password,
                user_type: user.user_type,
            },
            {
                where: {
                    id: id
                }
            }
        )
    }

    destroy(id) {
        return userModel.destroy({
            where: {
                id: id
            }
        })
    }

}

const userRepository = new UserRepository();
export default userRepository;

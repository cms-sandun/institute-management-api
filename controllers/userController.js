import userRepository from '../repositories/userRepository';

class UserController {

    async saveUser(req, res) {
        try {
            let user = {};
            // Get values from request body

            user.username = req.body.name;
            user.password = req.body.password;
            user.user_type = req.body.user_type;
            user.user_roles = req.body.user_roles;

            let newStudent = await userRepository.create(user);

            res.status(200).send({
                'success': true,
                'data': newStudent,
                'msg': "Successfully Saved"
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getAllUsers(req, res) {
        try {
            let users = await userRepository.findAll();
            res.status(200).send({
                'success': true,
                'data': users
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getUsersById(req, res) {
        try {
            let userId = req.params.id;
            let user = await userRepository.findById(userId);
            res.status(200).send({
                'success': true,
                'data': user
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

        async updateUser(req, res) {
        try {
            let user = {};
            let userId = req.params.id;
            user.username = req.body.name;
            user.password = req.body.password;
            user.user_type = req.body.user_type;

            let isUpdated = await userRepository.update(userId, user)

            if (isUpdated) {
                res.status(200).send({
                    'success': true,
                    'msg': "Successfully Updated"
                });
            }
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async deleteUser(req, res) {
        try {
            const userId = req.params.id
            let isDeleted = await userRepository.destroy(userId)
            if (isDeleted) {
                res.status(200).send({
                    'success': true,
                    'msg': "Successfully Deleted"
                });
            }
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

}

const userController = new UserController();
export default userController;

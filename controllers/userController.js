import userRepository from '../repositories/userRepository';

class UserController {

    async login(req, res) {
        try {
            let userName = req.body.user_name
            let pwd = req.body.pwd

            const user = await userRepository.findByUserNameAndPwd(userName, pwd)

            if(user){
                res.status(200).send({
                    'success': true,
                    'data': user
                });
            }else{
                res.status(400).send({
                    'success': false,
                    'msg': 'Invalid User'
                });
            }

        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async saveUser(req, res) {
        try {
            let user = {};
            // Get values from request body

            user.username = req.body.name;
            // Need to encrypt the password
            user.password = req.body.password;
            user.user_type = req.body.user_type;

            let newUser = await userRepository.create(user);

            // update user id in employee table

            res.status(200).send({
                'success': true,
                'data': newUser,
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

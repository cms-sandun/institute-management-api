import branchRepository from "../repositories/branchRepository";

class BranchController {

    async saveBranch(req, res) {
        try {
            const branch = {};
            branch.name = req.body.name;
            branch.address = req.body.address;
            branch.contact_no = req.body.contact_no;

            const newBranch = await branchRepository.create(branch);
            res.status(200).send({
                'success': true,
                'data': newBranch,
                'msg': "Successfully Saved"
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getAllBranches(req, res) {
        try {
            let branches = await branchRepository.findAll();
            res.status(200).send({
                'success': true,
                'data': branches
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async getBranchById(req, res) {
        try {
            let branchId = req.params.id;
            let branch = await branchRepository.findById(branchId);
            res.status(200).send({
                'success': true,
                'data': branch
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async updateBranch(req, res) {
        try {
            let branch = {};

            let branchId = req.params.id;
            branch.name = req.body.name;
            branch.address = req.body.address;
            branch.contact_no = req.body.contactNo;

            let isUpdated = await branchRepository.update(branchId, branch)

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

    async deleteBranch(req, res) {
        try {
            const branchId = req.params.id
            let isDeleted = await branchRepository.destroy(branchId)
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

const branchController = new BranchController();
export default branchController;

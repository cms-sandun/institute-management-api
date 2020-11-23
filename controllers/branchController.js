import branchRepository from "../repositories/branchRepository";

class BranchController {

    async saveBranch(req, res) {
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
    }

    async getAllBranches(req, res){
        let branches = await branchRepository.findAll();
        res.status(200).send({
            'success' : true,
            'data':branches
        });
    }

    async getBranchById(req, res){
        let branchId = req.params.id;
        let branch = await branchRepository.findById(branchId);
        res.status(200).send({
            'success' : true,
            'data':branch
        });
    }

    async updateBranch(req, res){
        let branch = {};

        let branchId = req.params.id;
        branch.name = req.body.name;
        branch.address = req.body.address;
        branch.contact_no = req.body.contactNo;

        let isUpdated = await branchRepository.update(branchId, branch)

        if(isUpdated){
            res.status(200).send({
                'success' : true,
                'msg': "Successfully Updated"
            });
        }

    }

    async deleteBranch(req, res){
        const branchId = req.params.id
        let isDeleted = await branchRepository.destroy(branchId)
        if(isDeleted){
            res.status(200).send({
                'success' : true,
                'msg': "Successfully Deleted"
            });
        }
    }

}

const branchController = new BranchController();
export default branchController;


import paymentRepository from "../repositories/paymentRepository";
import moment  from "moment";

class PaymentController {

    async savePayment(req, res) {
        try {

            console.log("------- req body",req.body)
            //create object
            const payment = {};
            payment.student_id = req.body.studentId;
            payment.paid_amount = req.body.paidAmount;
            payment.remaining_amount = req.body.remainingAmount;
            const paymentDate = moment(req.body.date).format('YYYY-MM-DD')
            payment.date = paymentDate;
            payment.payment_method = req.body.paymentMethod;
            console.log("----------------",payment)
            const newPayment = await paymentRepository.create(payment);
            res.status(200).send({
                'success': true,
                'data': newPayment,
                'msg': "Successfully Saved"
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }

    async updatePayment(req, res) {
        try {
            let payments = {};

            let paymentId = req.params.id;
            payments.first_name = req.body.firstName;
            payments.paid_amount = req.body.paid_amount;
            payments.remaining_amount = req.body.remaining_amount;
            payments.date = req.body.date;
            payments.payment_method = req.body.payment_method;

            let isUpdated = await paymentRepository.update(paymentId, payments)

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
    async getAllPayments(req, res) {
        try {
            let payments = await paymentRepository.findAll();
            res.status(200).send({
                'success': true,
                'data': payments
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }


    async deletePayment(req, res) {
        try {
            const paymentId = req.params.id
            let isDeleted = await paymentRepository.destroy(paymentId)
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

const paymentController = new PaymentController();
export default paymentController;

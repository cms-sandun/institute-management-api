const paymentModel = require("../models").payment;
const studentModel = require("../models").student;
const {Op} = require('sequelize')
const { QueryTypes } = require('sequelize');
import sequelize from 'sequelize'

class PaymentRepository {

    create(payment) {
        return paymentModel.create(payment)
    }

    findAll() {
        return paymentModel.findAll({
            include: studentModel,
            order: [['id','DESC']]
        })
    }

    findById(id) {
        return sequelize.query("SELECT * FROM `payment` where id="+id, { type: QueryTypes.SELECT });
    }

    findByBatchId(batchId){
        return studentModel.findAll({
            include: [
                {
                    model:  batchModel,
                    where : {
                        id:batchId
                    }
                }
            ]
        })
    }

    update(id, payment) {
        return paymentModel.update(
            {
                first_name: payment.first_name,
                paid_amount: payment.paid_amount,
                remaining_amount: payment.remaining_amount,
                date: payment.date,
                payment_method: payment.payment_method,
            },
            {
                where: {
                    id: id
                }
            }
        )
    }

    destroy(id) {
        return paymentModel.destroy({
            where: {
                id: id
            }
        })
    }



}

const paymentRepository = new PaymentRepository();
export default paymentRepository;

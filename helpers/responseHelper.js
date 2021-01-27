import httpStatusCode from '../enums/httpStatusCode'

class ResponseHelper{

    sendSuccessfullyCreated(res, data = null){
        return res.status(httpStatusCode.CREATED).send({
            'success': true,
            'data': data,
            'msg': "Successfully Saved"
        });
    }

    sendSuccessfullyUpdated(res, data = null){
        return res.status(httpStatusCode.UPDATED).send({
            'success': true,
            'data': data,
            'msg': "Successfully Updated"
        });
    }

    sendBadRequest(res, msg){
        return res.status(httpStatusCode.BAD_REQUEST).send({
            'success': false,
            'msg': msg
        });
    }

}

const responseHelper = new ResponseHelper();
export default responseHelper;

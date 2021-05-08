import examRepository from "../repositories/examRepository";
import studentRepository from "../repositories/studentRepository";
import emailHelper from "../helpers/emailHelper";
import examRegRepository from "../repositories/examRegRepository";
import examResultsRepository from "../repositories/examResultsRepository";
import reportHelper from "../helpers/reportHelper";
import moment from "moment";
import eventRepository from "../repositories/eventRepository";

class EventsController {

    async getAllEvents(req, res) {
        try {

            const events = await eventRepository.findAll();

            res.status(200).send({
                'success': true,
                'data': events
            });
        } catch (e) {
            res.status(200).send({
                'success': false,
                'msg': e.message
            });
        }
    }
}

const eventsController = new EventsController();
export default eventsController;

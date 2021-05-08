const eventModel = require("../models").events;

class EventRepository {

    create(exam) {
        return eventModel.create(exam)
    }

    findAll() {
        return eventModel.findAll()
    }
}

const eventRepository = new EventRepository();
export default eventRepository;

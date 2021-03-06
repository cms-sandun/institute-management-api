'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname+'/../config/config.json')[env];
import branch from './branch';
import course from './course';
import employee from './employee';
import student from './student';
import batch from './batch';
import exam from './exam';
import emp_attendance from './emp_attendance';
import stu_attendance from './stu_attendance';
import guardian from './guardian';
import user from './user';
import classes from './class';
import stu_registration from './stu_registration';
import exam_registration from './exam_registration';
import exam_results from './exam_results';
import payment from './payment';
import events from './events';

var sequelize = new Sequelize(config.database, config.username,
    config.password, config);

const db = {};

db.branch = branch(sequelize, Sequelize);
db.course = course(sequelize, Sequelize);
db.employee = employee(sequelize, Sequelize);
db.student = student(sequelize, Sequelize);
db.batch = batch(sequelize, Sequelize);
db.exam = exam(sequelize, Sequelize);
db.emp_attendance = emp_attendance(sequelize, Sequelize);
db.stu_attendance = stu_attendance(sequelize, Sequelize);
db.guardian = guardian(sequelize, Sequelize);
db.user = user(sequelize, Sequelize);
db.class = classes(sequelize, Sequelize);
db.stu_registration = stu_registration(sequelize, Sequelize);
db.exam_registration = exam_registration(sequelize, Sequelize);
db.exam_results = exam_results(sequelize, Sequelize);
db.payment = payment(sequelize, Sequelize);
db.events = events(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

sequelize.sync();
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;

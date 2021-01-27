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

var sequelize = new Sequelize(config.database, config.username,
    config.password, config);

const db = {};

db.branch = branch(sequelize, Sequelize);
db.course = course(sequelize, Sequelize);
db.employee = employee(sequelize, Sequelize);
db.student = student(sequelize, Sequelize);
db.batch = batch(sequelize, Sequelize);
db.exam = exam(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

sequelize.sync();
db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;

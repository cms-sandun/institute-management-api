'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname+'/../config/config.json')[env];
import branch from './branch';
import course from './course';
import employee from './employee';
import student from './student';
import batch from './batch';

var sequelize = new Sequelize(config.database, config.username,
    config.password, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.branch = branch(sequelize, Sequelize);
db.course = course(sequelize, Sequelize);
db.employee = employee(sequelize, Sequelize);
db.student = student(sequelize, Sequelize);
db.batch = batch(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

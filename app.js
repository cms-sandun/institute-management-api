import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/index';
import db from './models/index';

const PORT = 5000;

const app = express();

db.sequelize.sync()
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('uploads'))
app.use(router);

app.listen( PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})

module.exports = app;

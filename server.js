//Import the dependancies
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
const PORT = process.env.PORT || 5000;

const db = require('./config/database');
app.use(express.json());

//House routes
app.use('/houses', require('./routes/houses'));

db.authenticate()
    .then(() => console.log('database connected'))
    .catch((err) => console.log(err));

//Make the server listen on a port
app.listen(PORT, console.log(`listening on port ${PORT}`));
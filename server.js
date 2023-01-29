require('dotenv').config();
const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const router = require('./network/routes');
const db = require('./db');

let url = config.dbUrl;
db(url);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);
router(app);

app.use('/app', express.static('public'));


server.listen(config.port, () => {
    console.log(`La app está corriendo en ${config.host}:${config.port}`);
});

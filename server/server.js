const express    = require('express');
const bodyParser = require('body-parser');
const database = require('./services/database');
const consign = require('consign');
let morgan = require('morgan');
const logger = require('./services/logger');

let app = express();

app.routes = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // log requests to the console

const port = process.env.PORT || 8080;
database.connect();

consign({logger})
    .include('controllers')
    .then('routes')
    .into(app);

app.use('/api', app.routes);

app.listen(port, () => logger.info(`Server listening on port ${port} in ${app.get('env')} mode.`));

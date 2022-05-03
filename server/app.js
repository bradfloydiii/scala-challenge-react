let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');

const port = process.env.PORT || 3001;
const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('../client/build'));
app.use('/', router);

// loads the challenge data
require('./routes/routes')(router);

app.listen(port, () => console.log(`App listening on port ${port}!`));

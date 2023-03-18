const express = require('express');
const cors = require('cors');
const connectDb = require('./libs/mongoose');
const {
  logsError, boomErrorHandler, errorHandler, mongooseErrorHandler,
} = require('./middlewares/error.handler');
const routerApi = require('./routes');
const { config } = require('./config/config');

const app = express();

app.use(express.json());
app.use(cors());

require('./utils/auth');

// router

routerApi(app);

app.use(logsError);
app.use(boomErrorHandler);
app.use(mongooseErrorHandler);
app.use(errorHandler);

console.log(config.port)

app.listen(config.port, () => {
  console.log(`Server corriendo en puerto ${config.port}`);
});

connectDb();

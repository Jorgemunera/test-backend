function logsError(err, req, res, next) {
  console.log('--logsError', err);
  next(err);
}

function boomErrorHandler(err, req, res, next) {
  console.log('--boomErrorHandler');
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function mongooseErrorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {
    res.status(422).json({
      statusCode: 422,
      message: err.message,
      errors: err.errors,
    });
  } else if (err.name === 'CastError') {
    res.status(400).json({
      statusCode: 400,
      message: `Invalid ${err.kind} value: ${err.value}`,
      errors: err,
    });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res) {
  console.log('--errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = {
  logsError,
  boomErrorHandler,
  mongooseErrorHandler,
  errorHandler,
};

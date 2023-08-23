var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/auth.route');
var usersRouter = require('./routes/users.route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// enable cors pre-flight
app.options('*', cors());
// somehow cors failed #Testing only
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const { getFullPath } = require('./src/utils/string');
const traverseDir = getFullPath(__dirname + '/routes/');

for (const fullPath of traverseDir) {
  app.use('/', require(fullPath));
}

app.use((err, req, res, next) => {
  if (typeof err.handle === 'function') {
    err.handle();
  }

  if (err.printMsg === undefined) {
    err.stack += ` [Path: ${req.path}]`;
    console.error(err);
  }

  res.status(err.statusCode || 500).json({
    code: err.statusCode || 500,
    msg: err.printMsg || 'Something went wrong!',
    errorCode: err.errorCode,
  });
});

module.exports = app;

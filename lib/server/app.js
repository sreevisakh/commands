'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _commands = require('./commands.model');

var _commands2 = _interopRequireDefault(_commands);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());
_mongoose2.default.connect('mongodb://localhost/commands');

app.get('/', function (req, res) {
  res.sendFile(_path2.default.resolve('src/client/index.html'));
});

app.get('/search', function (req, res) {
  _commands2.default.find({ tags: req.query.q }, 'title command date tags', function (err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
});

app.get('/command/:id', function (req, res) {
  _commands2.default.find({ _id: req.params.id }, 'title command date tags', function (err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
});

app.post('/add', function (req, res) {
  var _validateInput = validateInput(req.body),
      command = _validateInput.command,
      title = _validateInput.title,
      tags = _validateInput.tags;

  var commandObj = new _commands2.default({
    title: title,
    command: command,
    tags: tags,
    date: new Date()
  });

  commandObj.save(function (err, response) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(response);
    }
  });
});

app.get('/list', function (req, res) {
  var query = _commands2.default.find({}).limit(20).sort({ date: -1 }).select('title command date tags');
  query.exec(function (err, response) {
    if (err) {
      res.sattaus(500).send(err);
    } else {
      res.send(response);
    }
  });
});

app.listen(8081, function () {
  console.log('App Listing on 8081');
});

function validateInput(_ref) {
  var command = _ref.command,
      title = _ref.title,
      tags = _ref.tags;

  return {
    command: command,
    title: title,
    tags: tags
  };
}
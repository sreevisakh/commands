'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema,
    ObjectId = Schema.ObjectId;

var CommandSchema = new Schema({
    id: ObjectId,
    title: String,
    command: String,
    date: Date,
    tags: []
});

exports.default = _mongoose2.default.model('Command', CommandSchema);
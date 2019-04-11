"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _repositoriesReducer = _interopRequireDefault(require("./repositories-reducer"));

var _commitsReducer = _interopRequireDefault(require("./commits-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  repositories: _repositoriesReducer.default,
  commits: _commitsReducer.default
});
var _default = rootReducer;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _store = _interopRequireDefault(require("../store"));

var _selectApp = _interopRequireDefault(require("../components/select-app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = function Root() {
  return _react.default.createElement(_reactRedux.Provider, {
    store: _store.default
  }, _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/"
  }), _react.default.createElement(_reactRouterDom.Route, {
    path: "/show-repository-commits",
    component: _selectApp.default
  }))));
};

var _default = Root;
exports.default = _default;
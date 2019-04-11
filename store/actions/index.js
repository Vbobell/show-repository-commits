"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRepositories = getRepositories;
exports.getSelectedRepository = getSelectedRepository;
exports.getCommitsRepository = getCommitsRepository;

var _type = require("./type");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BASE_URL_GIT = "https://api.github.com";

function getRepositories() {
  return _getRepositories.apply(this, arguments);
}

function _getRepositories() {
  _getRepositories = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response, repositories;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(BASE_URL_GIT, "/users/vbobell/repos"));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            repositories = _context.sent;
            repositories = repositories.map(function (_ref) {
              var id = _ref.id,
                  name = _ref.name;
              return {
                id: id,
                name: name
              };
            });
            return _context.abrupt("return", {
              type: _type.GET_REPOSITORIES,
              repositories: repositories
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getRepositories.apply(this, arguments);
}

function getSelectedRepository(id) {
  var repositories = this.repositories.map(function (repository) {
    repository.id === parseInt(id) ? repository.selected = true : repository.selected = false;
    return repository;
  });
  return {
    type: _type.SELECTED_REPOSITORY,
    repositories: repositories
  };
}

function getCommitsRepository(_x) {
  return _getCommitsRepository.apply(this, arguments);
}

function _getCommitsRepository() {
  _getCommitsRepository = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(repoName) {
    var response, commits;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("".concat(BASE_URL_GIT, "/repos/vbobell/").concat(repoName, "/commits"));

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.json();

          case 5:
            commits = _context2.sent;
            commits = commits.map(function (_ref2) {
              var commit = _ref2.commit,
                  sha = _ref2.sha;
              return {
                commit: commit,
                sha: sha
              };
            });
            return _context2.abrupt("return", {
              type: _type.GET_COMMITS,
              commits: commits
            });

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCommitsRepository.apply(this, arguments);
}
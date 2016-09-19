'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (firstState, handlers) {
  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? firstState : arguments[0];
    var action = arguments[1];

    return !!handlers[action.type] ? handlers[action.type](state, action) : state;
  };
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var dispatch = _ref.dispatch;


  return function (next) {
    return function (action) {
      var types = action.types;
      var requestingAPI = action.requestingAPI;
      var _action$params = action.params;
      var params = _action$params === undefined ? {} : _action$params;

      // Pass through ordinary action

      if (!types) {
        return next(action);
      }

      if ('function' !== typeof requestingAPI) {
        throw new Error('queryingAPI must be a function');
      }

      var pre = types.pre;
      var success = types.success;
      var fail = types.fail;


      dispatch(_extends({ type: pre }, params));

      return requestingAPI().then(function (result) {
        return dispatch(_extends({ type: success }, params, { result: result }));
      }).catch(function (error) {
        return dispatch({ type: fail, error: error });
      });
    };
  };
};
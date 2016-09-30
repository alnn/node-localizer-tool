'use strict';
import API from './../api/db';

export default function ({ dispatch }) {

  return next => action => {
    const {
        types,
        params = {}
      } = action;

    // Pass through ordinary action
    if (!types) {
      return next(action);
    }

    if ('function' !== typeof requestingAPI) {
      throw new Error('queryingAPI must be a function');
    }

    const { pre, success, fail } = types;

    dispatch({ type: pre, ...params });

    return requestingAPI().then(
      result => dispatch({ type: success, ...params, result })
    ).catch(
      error => dispatch({ type: fail, error })
    );

  };

}

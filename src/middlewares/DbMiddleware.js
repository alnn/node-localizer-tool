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

    if ('function' !== typeof API[types.on]) {
      throw new Error(`DB API function ${types.on} does not exist`);
    }

    const { on, success, fail } = types;

    dispatch({ type: on, ...params });

    return API[types.on](params).then(
      result => dispatch({ type: success, ...params, result })
    ).catch(
      error => dispatch({ type: fail, error })
    );

  };

}

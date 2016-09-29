'use strict';
import reducerCreator from '../libs/reducerCreator';
import types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/Initial';

function setError(state, action) {
  return {
    ...state,
    error: action.error
  };
}

export default reducerCreator(INITIAL_STATE, {
  [types.FAIL_FETCHING]: setError,
  [types.FAIL_INSERTING]: setError,
  [types.FAIL_UPDATING]: setError,
  [types.FAIL_DELETING]: setError
});

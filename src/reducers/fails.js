'use strict';
import reducerCreator from '../libs/reducerCreator';
import types from '../constants/ActionTypes';
import INITIAL_STATE from '../constants/Initial';

export const fails = reducerCreator(INITIAL_STATE, {
  [types.FAIL_FETCHING] (state, action) {
    return state.set('error', action.error);
  },
  [types.FAIL_INSERTING] (state, action) {
    return state.set('error', action.error);
  },
  [types.FAIL_UPDATING] (state, action) {
    return state.set('error', action.error);
  },
  [types.FAIL_DELETING] (state, action) {
    return state.set('error', action.error);
  }
});

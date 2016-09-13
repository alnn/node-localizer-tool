'use strict';
import { fromJS } from 'immutable';
import reducerCreator from '../libs/reducerCreator';
import types from '../constants/ActionTypes';
import INITIAL_STATE from '../constants/Initial';

export const localeterms = reducerCreator(INITIAL_STATE, {
  [types.FETCHING_LOCALE_TERMS] (state, action) {
    return state;
  },
  [types.SET_LOCALE_TERMS] (state, action) {
    //return state.set('terms', fromJS(action.result));
  }
});

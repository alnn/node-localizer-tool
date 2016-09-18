'use strict';
import { fromJS } from 'immutable';
import reducerCreator from '../libs/reducerCreator';
import types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/Initial';

export default reducerCreator(INITIAL_STATE, {
  [types.SET_LOCALES] (state) {


    return state;
  }
});

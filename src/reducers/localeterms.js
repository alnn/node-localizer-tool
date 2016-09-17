'use strict';
import { fromJS } from 'immutable';
import reducerCreator from '../libs/reducerCreator';
import types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/Initial';

export default reducerCreator(INITIAL_STATE, {
  [types.FETCHING_LOCALE_TERMS] (state) {
    return state;
  },
  [types.SET_LOCALE_TERMS] (state, action) {
    return state.set('terms', fromJS({
      section: action.section,
      locale: action.locale,
      list: action.result
    }));
  },
  [types.INSERTING_LOCALE_TERM] (state) {
    return state;
  },
  [types.ADD_LOCALE_TERM] (state, action) {
    return state.updateIn([ 'terms', 'list' ], list => list.push(action.result));
  },
  [types.UPDATING_LOCALE_TERM] (state) {
    return state;
  },
  [types.CHANGE_LOCALE_TERM] (state, action) {
    const index = state.get('terms').map(
      (term, index) => term.id === action.result.id ? index : undefined
    ).filter(item => item !== undefined).get(0);
    return state.updateIn([ 'terms', 'list' ], list => list.setIn([index], action.result));
  },
  [types.DELETING_LOCALE_TERM] (state) {
    return state;
  },
  [types.REMOVE_LOCALE_TERM] (state, action) {
    return state.setIn([ 'terms', 'list' ], state.getIn([ 'terms', 'list' ]).filter(term => term.id !== action.id));
  }
});

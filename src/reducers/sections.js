'use strict';
import { fromJS } from 'immutable';
import reducerCreator from '../libs/reducerCreator';
import types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/Initial';

export default reducerCreator(INITIAL_STATE, {
  [types.FETCHING_SECTIONS] (state) {
    return state;
  },
  [types.SET_SECTIONS] (state, action) {
    return state.set('sections', fromJS(action.result));
  },
  [types.INSERTING_SECTION] (state) {
    return state;
  },
  [types.ADD_SECTION] (state, action) { // action.name, action.result
    return state.updateIn(['sections'], list => list.push(action.result));
  },
  [types.UPDATING_SECTION] (state) { // action.id, action.name
    return state;
  },
  [types.CHANGE_SECTION] (state, action) { // action.id, action.name, action.result
    const index = state.get('sections').map(
      (section, index) => section.id === action.id ? index : undefined
    ).filter(item => item !== undefined).get(0);
    return state.updateIn(['sections'], list => list.setIn([index], action.result));
  },
  [types.DELETING_SECTION] (state) { // action.id
    return state;
  },
  [types.REMOVE_SECTION] (state, action) { // action.id
    return state.setIn(['sections'], state.get('sections').filter(section => section.id !== action.id));
  },
  [types.INSERTING_LOCALE] (state) { // action.sectionID, action.localeID
    return state;
  },
  [types.ADD_LOCALE] (state, action) { // action.sectionID, action.localeID, action.result
    return state.setIn(['sections'], state.get('sections').map(section => {
      if (section.id === action.sectionID) {
        return section.setIn(['locales'], section.get('locales').push(action.localeID));
      } else {
        return section;
      }
    }));
  },
  [types.DELETING_LOCALE] (state) { // action.sectionID, action.localeID
    return state;
  },
  [types.REMOVE_LOCALE] (state, action) { // action.sectionID, action.localeID, action.result
    return state.setIn(['sections'], state.get('sections').map(section => {
      if (action.sectionID === section.id) {
        return section.setIn(['locales'], section.get('locales').filter(locale => action.localeID !== locale));
      } else {
        return section;
      }
    }));
  }
});

'use strict';
import reducerCreator from '../libs/reducerCreator';
import types from '../constants/ActionTypes';
import { INITIAL_STATE } from '../constants/Initial';

export default reducerCreator(INITIAL_STATE, {
  [types.FETCHING_SECTIONS] (state) {
    return { ...state };
  },
  [types.SET_SECTIONS] (state, action) {
    return { ...state, sections: action.result };
  },
  [types.INSERTING_SECTION] (state) {
    return { ...state };
  },
  [types.ADD_SECTION] (state, action) { // action.name, action.result
    return { ...state, sections: [...state.sections, action.result] };
  },
  [types.UPDATING_SECTION] (state) { // action.id, action.name
    return { ...state };
  },
  [types.CHANGE_SECTION] (state, action) { // action.id, action.name, action.result
    const sections = state.sections.map(section => section.id === action.id ? action.result : { ...section });
    return { ...state, sections: [ ...sections ] };
  },
  [types.DELETING_SECTION] (state) { // action.id
    return { ...state };
  },
  [types.REMOVE_SECTION] (state, action) { // action.id
    const sections = state.sections.filter(section => section.id !== action.id);
    return { ...state, sections: [ ...sections ] };
  },
  [types.INSERTING_LOCALE] (state) { // action.sectionID, action.localeID
    return { ...state };
  },
  [types.ADD_LOCALE] (state, action) { // action.sectionID, action.localeID, action.result
    const sections = state.sections.map(section => {
      return {
        ...section,
        locales: section.id === action.sectionID ? [ ...section.locales, action.localeID ] : [ ...section.locales ]
      };
    });
    return { ...state, sections: [ ...sections ] };
  },
  [types.DELETING_LOCALE] (state) { // action.sectionID, action.localeID
    return { ...state };
  },
  [types.REMOVE_LOCALE] (state, action) { // action.sectionID, action.localeID, action.result
    const sections = state.sections.map(section => {
      return {
        ...section,
        locales: section.locales.filter(locale => section.id !== action.sectionID || action.localeID !== locale)
      };
    });
    return { ...state, sections: [ ...sections ] };
  }
});

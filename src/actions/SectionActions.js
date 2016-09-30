'use strict';
import mongoose from 'mongoose';
import actionCreator from '../libs/actionCreator';
import types from '../constants/ActionTypes';

export const fetchingSections = actionCreator(types.FETCHING_SECTIONS);
export const setSections = actionCreator(types.SET_SECTIONS, 'result');

export const insertingSection = actionCreator(types.INSERTING_SECTION, 'name');
export const addSection = actionCreator(types.ADD_SECTION, 'name', 'result');

export const updatingSection = actionCreator(types.UPDATING_SECTION, 'id', 'name');
export const changeSection = actionCreator(types.CHANGE_SECTION, 'id', 'name', 'result');

export const deletingSection = actionCreator(types.DELETING_SECTION, 'id');
export const removeSection = actionCreator(types.REMOVE_SECTION, 'id');

export const insertingLocale = actionCreator(types.INSERTING_LOCALE, 'sectionID', 'localeID');
export const addLocale = actionCreator(types.ADD_LOCALE, 'sectionID', 'localeID', 'result');

export const deletingLocale = actionCreator(types.DELETING_LOCALE, 'sectionID', 'localeID');
export const removeLocale = actionCreator(types.REMOVE_LOCALE, 'sectionID', 'localeID', 'result');

const Section = mongoose.model('Section');

// Async action creators:

export function fetchSections () {
  return {
    types: {
      pre: types.FETCHING_SECTIONS,
      success: types.SET_SECTIONS,
      fail: types.FAIL_FETCHING
    },
    params: {}
  };
}

export function insertSection (name) {
  return {
    types: {
      pre: types.INSERTING_SECTION,
      success: types.ADD_SECTION,
      fail: types.FAIL_INSERTING
    },
    params: {
      name
    }
  };
}

export function updateSection (id, name) {
  return {
    types: {
      pre: types.UPDATING_SECTION,
      success: types.CHANGE_SECTION,
      fail: types.FAIL_UPDATING
    },
    params: {
      id, name
    }
  };
}

export function deleteSection (id) {
  return {
    types: {
      pre: types.DELETING_SECTION,
      success: types.REMOVE_SECTION,
      fail: types.FAIL_DELETING
    },
    params: {
      id
    }
  };
}

export function insertLocale (sectionID, localeID) {
  return {
    types: {
      pre: types.INSERTING_LOCALE,
      success: types.ADD_LOCALE,
      fail: types.FAIL_INSERTING
    },
    params: {
      sectionID, localeID
    }
  };
}

export function deleteLocale (sectionID, localeID) {
  return {
    types: {
      pre: types.DELETING_LOCALE,
      success: types.REMOVE_LOCALE,
      fail: types.FAIL_DELETING
    },
    params: {
      sectionID, localeID
    }
  };
}

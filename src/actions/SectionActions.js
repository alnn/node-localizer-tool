'use strict';

import types from '../constants/ActionTypes';
import dbApi from '../api/db';

// TODO: replace dbApi by mongoose just here

// Async action creators:

export function fetchSections () {
  return {
    types: {
      pre: types.FETCHING_SECTIONS,
      success: types.SET_SECTIONS,
      fail: types.FAIL_SECTIONS
    },
    params: {},
    requestingAPI: () => dbApi.fetchSections(),
  };
}

export function insertSection (name) {
  return {
    types: {
      pre: types.INSERTING_SECTION,
      success: types.ADD_SECTION,
      fail: types.FAIL_SECTIONS
    },
    params: {
      name
    },
    requestingAPI: () => dbApi.insertSection(name)
  };
}

export function updateSection (id, name) {
  return {
    types: {
      pre: types.UPDATING_SECTION,
      success: types.CHANGE_SECTION,
      fail: types.FAIL_SECTIONS
    },
    params: {
      id, name
    },
    requestingAPI: () => dbApi.updateSection(id, name)
  };
}

export function deleteSection (id) {
  return {
    types: {
      pre: types.DELETING_SECTION,
      success: types.REMOVE_SECTION,
      fail: types.FAIL_SECTIONS
    },
    params: {
      id
    },
    requestingAPI: () => dbApi.deleteSection(id)
  };
}

export function insertLocale (sectionID, localeID) {
  return {
    types: {
      pre: types.INSERTING_LOCALE,
      success: types.ADD_LOCALE,
      fail: types.FAIL_SECTIONS,
    },
    params: {
      sectionID, localeID
    },
    requestingAPI: () => dbApi.insertLocale(sectionID, localeID)
  };
}

export function deleteLocale (sectionID, localeID) {
  return {
    types: {
      pre: types.DELETING_LOCALE,
      success: types.REMOVE_LOCALE,
      fail: types.FAIL_SECTIONS,
    },
    params: {
      sectionID, localeID
    },
    requestingAPI: () =>  dbApi.deleteLocale(sectionID, localeID)
  };
}

// Plain action creators:
const generateActionCreator = (type, ...argNames) => {
  return function(...args) {

    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });

    return action;
  }
};

export const fetchingSections = generateActionCreator(types.FETCHING_SECTIONS);
export const setSections = generateActionCreator(types.SET_SECTIONS, 'result');
export const failSections = generateActionCreator(types.FAIL_SECTIONS, 'error');

export const insertingSection = generateActionCreator(types.INSERTING_SECTION, 'name');
export const addSection = generateActionCreator(types.ADD_SECTION, 'name', 'result');

export const updatingSection = generateActionCreator(types.UPDATING_SECTION, 'id', 'name');
export const changeSection = generateActionCreator(types.CHANGE_SECTION, 'id', 'name', 'result');

export const deletingSection = generateActionCreator(types.DELETING_SECTION, 'id');
export const removeSection = generateActionCreator(types.REMOVE_SECTION, 'id');

export const insertingLocale = generateActionCreator(types.INSERTING_LOCALE, 'sectionID', 'localeID');
export const addLocale = generateActionCreator(types.ADD_LOCALE, 'sectionID', 'localeID', 'result');

export const deletingLocale = generateActionCreator(types.DELETING_LOCALE, 'sectionID', 'localeID');
export const removeLocale = generateActionCreator(types.REMOVE_LOCALE, 'sectionID', 'localeID', 'result');

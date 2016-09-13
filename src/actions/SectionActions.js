'use strict';
import mongoose from 'mongoose';
import actionCreator from '../libs/actionCreator';
import types from '../constants/ActionTypes';

const Section = mongoose.model('Section');

export const fetchingSections = actionCreator(types.FETCHING_SECTIONS);
export const setSections = actionCreator(types.SET_SECTIONS, 'result');
export const failSections = actionCreator(types.FAIL_SECTIONS, 'error');

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

// Async action creators:

export function fetchSections () {
  return {
    types: {
      pre: types.FETCHING_SECTIONS,
      success: types.SET_SECTIONS,
      fail: types.FAIL_SECTIONS
    },
    params: {},
    requestingAPI: () => {
      return Section.getList().then((result) => {
        return result.map(item => item.toPlain());
      });
    },
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
    requestingAPI: () => {
      return (new Section({ name })).save().then((result) => {
        return result.toPlain();
      });
    }
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
    requestingAPI: () => {
      return Section.findOneAndUpdate({ _id: id }, { name }).exec().then((section) => {
        return section && section.toPlain();
      });
    }
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
    requestingAPI: () => {
      return Section.removeById(id).then(() => {
        return id;
      });
    }
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
    requestingAPI: () => {
      return Section.find({ _id: sectionID }).exec().then((section) => {
        return section[0].addLocale(localeID).save();
      }).then((section) => {
        return section && section.toPlain();
      });
    }
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
    requestingAPI: () =>  {
      return Section.find({ _id: sectionID }).exec().then(section => {
        return section[0].removeLocale(localeID).save();
      }).then(section => {
        return section && section.toPlain();
      });
    }
  };
}

'use strict';
import mongoose from 'mongoose';
import actionCreator from '../libs/actionCreator';
import types from '../constants/ActionTypes';

const LocaleTerm = mongoose.model('LocaleTerm');

export const fetchingLocaleTerms = actionCreator(types.FETCHING_LOCALE_TERMS, 'section', 'locale');
export const setLocaleTerms = actionCreator(types.SET_LOCALE_TERMS, 'result');
export const failFetching = actionCreator(types.FAIL_FETCHING, 'error');

export const insertingLocaleTerm = actionCreator(types.INSERTING_LOCALE_TERM, 'section', 'locale', 'path');
export const addLocaleTerm = actionCreator(types.ADD_LOCALE_TERM, 'result');
export const failInserting = actionCreator(types.FAIL_INSERTING, 'error');

export const updatingLocaleTerm = actionCreator(types.UPDATING_LOCALE_TERM, 'id', 'phrase');
export const changeLocaleTerm = actionCreator(types.CHANGE_LOCALE_TERM, 'result');
export const failUpdating = actionCreator(types.FAIL_UPDATING, 'error');

export const deletingLocaleTerm = actionCreator(types.DELETING_LOCALE_TERM, 'id');
export const removeLocaleTerm = actionCreator(types.REMOVE_LOCALE_TERM, 'id');
export const failDeleting = actionCreator(types.FAIL_DELETING, 'error');

// Async action creators:

export function fetchLocaleTerms (section, locale) {
  return {
    types: {
      pre: types.FETCHING_LOCALE_TERMS,
      success: types.SET_LOCALE_TERMS,
      fail: types.FAIL_FETCHING
    },
    params: {
      section,
      locale
    },
    requestingAPI: () => {
      return LocaleTerm.getList(section, locale).then((result) => {
        return result.map(item => item.toPlain());
      });
    },
  };
};

export function insertLocaleTerm (section, locale, path) {
  return {
    types: {
      pre: types.INSERTING_LOCALE_TERM,
      success: types.ADD_LOCALE_TERM,
      fail: types.FAIL_INSERTING
    },
    params: {
      section,
      locale,
      path
    },
    requestingAPI: () => {
      return (new LocaleTerm({
        _section: section,
        path: [locale,...path]
      })).save().then((result) => {
        return result.toPlain();
      });
    }
  };
};

export function updateLocaleTerm (id, phrase) {
  return {
    types: {
      pre: types.UPDATING_LOCALE_TERM,
      success: types.CHANGE_LOCALE_TERM,
      fail: types.FAIL_UPDATING
    },
    params: {
      id,
      phrase
    },
    requestingAPI: () => {
      return LocaleTerm.findOneAndUpdate({ _id: id }, { phrase }).exec().then(term => {
        return term && term.toPlain();
      });
    }
  };
}

export function deleteLocaleTerm (id) {
  return {
    types: {
      pre: types.DELETING_LOCALE_TERM,
      success: types.REMOVE_LOCALE_TERM,
      fail: types.FAIL_DELETING
    },
    params: {
      id
    },
    requestingAPI: () => {
      return LocaleTerm.removeById(id).then(() => {
        return id;
      });
    }
  };
}

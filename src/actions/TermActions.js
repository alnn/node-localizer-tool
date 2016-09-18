'use strict';
import mongoose from 'mongoose';
import actionCreator from '../libs/actionCreator';
import types from '../constants/ActionTypes';

const Term = mongoose.model('Term');

export const fetchingLocaleTerms = actionCreator(types.FETCHING_TERMS, 'section', 'locale');
export const setLocaleTerms = actionCreator(types.SET_TERMS, 'result', 'section', 'locale');

export const insertingLocaleTerm = actionCreator(types.INSERTING_TERM, 'section', 'locale', 'path');
export const addLocaleTerm = actionCreator(types.ADD_TERM, 'result');

export const updatingLocaleTerm = actionCreator(types.UPDATING_TERM, 'id', 'phrase');
export const changeLocaleTerm = actionCreator(types.CHANGE_TERM, 'result');

export const deletingLocaleTerm = actionCreator(types.DELETING_TERM, 'id');
export const removeLocaleTerm = actionCreator(types.REMOVE_TERM, 'id');

// Async action creators:

export function fetchLocaleTerms (section, locale) {
  return {
    types: {
      pre: types.FETCHING_TERMS,
      success: types.SET_TERMS,
      fail: types.FAIL_FETCHING
    },
    params: {
      section,
      locale
    },
    requestingAPI: () => {
      return Term.getList(section.id, locale.id).then((result) => {
        return result.map(item => item.toPlain());
      });
    },
  };
}

export function insertLocaleTerm (section, locale, path) {
  return {
    types: {
      pre: types.INSERTING_TERM,
      success: types.ADD_TERM,
      fail: types.FAIL_INSERTING
    },
    params: {
      section,
      locale,
      path
    },
    requestingAPI: () => {
      return (new Term({
        _section: section,
        path: [locale,...path]
      })).save().then((result) => {
        return result.toPlain();
      });
    }
  };
}

export function updateLocaleTerm (id, phrase) {
  return {
    types: {
      pre: types.UPDATING_TERM,
      success: types.CHANGE_TERM,
      fail: types.FAIL_UPDATING
    },
    params: {
      id,
      phrase
    },
    requestingAPI: () => {
      return Term.findOneAndUpdate({ _id: id }, { phrase }).exec().then(term => {
        return term && term.toPlain();
      });
    }
  };
}

export function deleteLocaleTerm (id) {
  return {
    types: {
      pre: types.DELETING_TERM,
      success: types.REMOVE_TERM,
      fail: types.FAIL_DELETING
    },
    params: {
      id
    },
    requestingAPI: () => {
      return Term.removeById(id).then(() => {
        return id;
      });
    }
  };
}

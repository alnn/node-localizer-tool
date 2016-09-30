'use strict';
import mongoose from 'mongoose';
import actionCreator from '../libs/actionCreator';
import types from '../constants/ActionTypes';

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
      on: types.FETCHING_TERMS,
      success: types.SET_TERMS,
      fail: types.FAIL_FETCHING
    },
    params: {
      section,
      locale
    }
  };
}

export function insertLocaleTerm (section, locale, path) {
  return {
    types: {
      on: types.INSERTING_TERM,
      success: types.ADD_TERM,
      fail: types.FAIL_INSERTING
    },
    params: {
      section,
      locale,
      path
    }
  };
}

export function updateLocaleTerm (id, phrase) {
  return {
    types: {
      on: types.UPDATING_TERM,
      success: types.CHANGE_TERM,
      fail: types.FAIL_UPDATING
    },
    params: {
      id,
      phrase
    }
  };
}

export function deleteLocaleTerm (id) {
  return {
    types: {
      on: types.DELETING_TERM,
      success: types.REMOVE_TERM,
      fail: types.FAIL_DELETING
    },
    params: {
      id
    }
  };
}

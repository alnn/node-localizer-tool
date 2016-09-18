'use strict';
import actionCreator from '../libs/actionCreator';
import types from '../constants/ActionTypes';
import locales from '../constants/Locales';

export const fetchingLocales = actionCreator(types.FETCHING_TERMS);
export const setLocales = actionCreator(types.SET_TERMS, 'result');

export function fetchLocales () {
  return {
    types: {
      pre: types.FETCHING_LOCALES,
      success: types.SET_LOCALES,
      fail: types.FAIL_FETCHING
    },
    params: {},
    requestingAPI: () => {
      return new Promise(resolve => {
        resolve(locales);
      });
    },
  };
}

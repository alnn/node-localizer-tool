'use strict';
import actionCreator from '../libs/actionCreator';
import types from '../constants/ActionTypes';

export const failFetching = actionCreator(types.FAIL_FETCHING, 'error');
export const failInserting = actionCreator(types.FAIL_INSERTING, 'error');
export const failUpdating = actionCreator(types.FAIL_UPDATING, 'error');
export const failDeleting = actionCreator(types.FAIL_DELETING, 'error');

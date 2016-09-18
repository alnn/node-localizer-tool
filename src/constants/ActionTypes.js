'use strict';

import keyMirror from 'key-mirror';

export default keyMirror({

  FETCHING_SECTIONS: null,
  FETCHING_LOCALES: null,
  FETCHING_TERMS: null,

  SET_SECTIONS: null,
  SET_LOCALES: null,
  SET_TERMS: null,

  INSERTING_SECTION: null,
  INSERTING_LOCALE: null,
  INSERTING_TERM: null,

  UPDATING_SECTION: null,
  UPDATING_TERM: null,

  ADD_SECTION: null,
  ADD_LOCALE: null,
  ADD_TERM: null,

  CHANGE_SECTION: null,
  CHANGE_TERM: null,

  DELETING_SECTION: null,
  DELETING_LOCALE: null,
  DELETING_TERM: null,

  REMOVE_SECTION: null,
  REMOVE_LOCALE: null,
  REMOVE_TERM: null,

  FAIL_FETCHING: null,
  FAIL_INSERTING: null,
  FAIL_UPDATING: null,
  FAIL_DELETING: null

});

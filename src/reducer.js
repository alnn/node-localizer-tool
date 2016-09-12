import {
  SAVE_SECTION,
  SET_SECTIONS
} from './constants';

import {Map} from 'immutable';
import {setSections} from './actions';

module.exports = (state = Map(), action) => {

  switch (action.type) {
    case SET_SECTIONS:
      return setSections(state, action.sections);
    default:
      return state;
  }

};

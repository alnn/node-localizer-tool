'use strict';
import { fromJS } from 'immutable';
import locales from './Locales';

export const INITIAL_STATE = fromJS({ sections: [], locales, terms: {}, error: null });

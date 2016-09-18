'use strict';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import mongoose from './libs/mongoose';

import sockAPI from './api/socket';
import dbMiddleWare from './middlewares/DbMiddleware';
import sections from './reducers/sections';
import terms from './reducers/terms';
import fail from './reducers/fail';
import { INITIAL_STATE } from './constants/Initial';


export default options => {

  mongoose(options.mongoose).once('open', () => {

    const sectionActions = require('./actions/SectionActions');

    const store = createStore(
      combineReducers({
        //sections: sections,
        //localeterms: localeterms,
        //fails: fails

        sections,
        locales: {},
        terms: {},
        fail

      }),
      INITIAL_STATE,
      applyMiddleware(dbMiddleWare)
    );

    sockAPI(store, options.server);

    store.dispatch(sectionActions.fetchingSections());

  });

};

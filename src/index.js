'use strict';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import mongoose from 'mongoose';

import sockAPI from './api/socket';
import { dbMiddleWare } from './middlewares';
import sections from './reducers/sections';
import localeterms from './reducers/localeterms';
import fails from './reducers/fails';
import INITIAL_STATE  from './constants/Initial';

import { fetchingSections } from './actions/SectionActions';

module.exports = {
  init: (options) => {

    const mongodb = options.mongodb;
    const server  = options.server;

    mongoose.connect('mongodb://localhost/localizertool_test');

    const store = createStore(
      combineReducers([sections, localeterms, fails]),
      INITIAL_STATE,
      applyMiddleware(dbMiddleWare)
    );

    sockAPI(store, server);

    store.dispatch(fetchingSections());

  }
};

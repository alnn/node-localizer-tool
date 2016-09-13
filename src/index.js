'use strict';

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import mongoose from 'mongoose';
import sockAPI from './api/socket';
import { dbMiddleWare } from './middlewares';

import { fetchingSections } from './actions/SectionActions';

const SET_SECTIONS = require('./constants').SET_SECTIONS;
const INITIAL_STATE = require('./constants').INITIAL_STATE;

module.exports = {
  init: (options) => {

    const mongodb = options.mongodb;
    const server  = options.server;

    mongoose.connect('mongodb://localhost/localizertool_test');

    const store = createStore(
      reducer,
      INITIAL_STATE,
      applyMiddleware(dbMiddleWare)
    );

    sockAPI(store, server);

    store.dispatch(fetchingSections());

  }
};

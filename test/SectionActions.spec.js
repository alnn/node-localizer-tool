'use strict';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {expect} from 'chai';
import { fromJS } from 'immutable';
import mongoose from 'mongoose';

import '../src/models/section';
import types from '../src/constants/ActionTypes';
import INITIAL_STATE from '../src/constants/Initial';
import * as actions from '../src/actions/SectionActions';
import DbMiddleware from '../src/middlewares/DbMiddleware';

import dbAPI from '../src/api/db';

const middlewares = [ thunk, DbMiddleware ];
const mockStore = configureMockStore(middlewares);

mongoose.Promise = global.Promise;

const Section = mongoose.model('Section');

mongoose.connect('mongodb://localhost/localizertool_test');

Section.create({
  name: 'zumaaazzzz'
});

Section.getList().then((doc) => {
  console.log(doc);
});


//mongodb://localhost/localizertool_test

//var db = mongoose.createConnection('localhost', 'localizertool_test');
//db.on('error', console.error.bind(console, 'connection error:'));
//var a1= db.once('open',function(){
/*
  var sec = new Section();

  sec.name = 'bababa';
  sec.save();



  Section.create({
    name: 'Front'
  });

  Section.find({}, function (err, result) {

    console.log(result);
  })
  */
//});


describe('Async actions', () => {

  dbAPI.init({
    sections: [
      {
        id: 1,
        name: 'Front',
        locales: ['en', 'ru']
      },
      {
        id: 2,
        name: 'End',
        locales: ['en', 'jp']
      }
    ]
  });

  it('Create SET_SECTIONS when fetchSections has been done', () => {

    const expectedActions = [
      { type: types.FETCHING_SECTIONS },
      { type: types.SET_SECTIONS,
        result: [
          {
            id: 1,
            name: 'Front',
            locales: ['en', 'ru']
          },
          {
            id: 2,
            name: 'End',
            locales: ['en', 'jp']
          }
        ]
      }
    ];

    const store = mockStore(INITIAL_STATE);



    return store.dispatch(actions.fetchSections()).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions);
    });

  });

});


/*
  FETCHING_SECTIONS: null,
  INSERTING_SECTION: null,
  UPDATING_SECTION: null,
  DELETING_SECTION: null,

  SET_SECTIONS: null,
  ADD_SECTION: null,
  CHANGE_SECTION: null,

  ADD_LOCALE: null,
  INSERTING_LOCALE: null,
  DELETING_LOCALE: null,

  FAIL_SECTIONS: null,
*/
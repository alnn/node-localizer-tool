'use strict';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {expect} from 'chai';
import { fromJS } from 'immutable';
import mongoose from 'mongoose';
import co from 'co';

import '../src/models/Section';

import types from '../src/constants/ActionTypes';
import INITIAL_STATE from '../src/constants/Initial';
import * as actions from '../src/actions/SectionActions';
import DbMiddleware from '../src/middlewares/DbMiddleware';

const middlewares = [ thunk, DbMiddleware ];
const mockStore = configureMockStore(middlewares);

mongoose.Promise = global.Promise;

const Section = mongoose.model('Section');
const Locale = mongoose.model('Locale');

mongoose.connect('mongodb://localhost/localizertool_test');



/*
const section = new Section({
  name: 'Zumazuz!'
});

section.save().then((sec) => {

  let locale = new Locale({
    _section: sec._id,
    id: 'en'
  });

  locale.save().then(() => {

    section.locales.push(locale);

    locale = new Locale({
      _section: sec._id,
      id: 'jp'
    });

    locale.save().then(() => {

      section.locales.push(locale);

      section.save().then(() => {

        Section.getList().then((doc) => {
          console.log(doc.locales);
        });

      });

    });




  })


});

*/






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

  //before(() => {
  //  co(function* () {
  //    yield Section.remove();
  //    yield Locale.remove();
  //  });
  //});

  it('Create ADD_SECTION when insertSection has been done', () => {

    const expectedActions = [
      { type: types.INSERTING_SECTION, name: 'Foo' },
      { type: types.ADD_SECTION,
        result: {
          name: 'Foo',
          locales: []
        },
        name: 'Foo'
      }
    ];

    const store = mockStore(INITIAL_STATE);

    return store.dispatch(actions.insertSection('Bazz')).then(() => {
      let result = store.getActions();

      //console.log(result);

      //expect(result[1].result).to.have.property('id').an('string')
      //  .with.length.above(5);
      //delete result[1].result.id;

      expect(result).to.deep.equal(expectedActions);
    });

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

  it('Create CHANGE_SECTION when updateSection has been done', () => {

    const expectedActions = [
      { type: types.UPDATING_SECTION },
      { type: types.CHANGE_SECTION,
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

    return store.dispatch(actions.updateSection('57d74b82bdb33c20d718a040', 'zumazaza')).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions);
    });

  });

  xit('Create REMOVE_SECTION when deleteSection has been done', () => {

    const expectedActions = [
      { type: types.DELETING_SECTION },
      { type: types.REMOVE_SECTION,
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

    return store.dispatch(actions.deleteSection('57d74bee3b44cf217644d77b')).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions);
    });

  });

  it('Create ADD_LOCALE when insertLocale has been done', () => {

    const expectedActions = [
      { type: types.INSERTING_LOCALE },
      { type: types.ADD_LOCALE,
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

    return store.dispatch(actions.insertLocale('57d751e1ee1a0a6656115a3e', 'kz')).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions);
    });

  });

  it('Create REMOVE_LOCALE when deleteLocale has been done', () => {

    const expectedActions = [
      { type: types.DELETING_LOCALE },
      { type: types.REMOVE_LOCALE,
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

    return store.dispatch(actions.deleteLocale('57d751e1ee1a0a6656115a3e', 'kz')).then(() => {
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
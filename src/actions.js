'use strict';

const immutable = require('immutable');
const List = immutable.List;
const Map = immutable.Map;
const fromJS = immutable.fromJS;

const dbAPI = require('./api/db');



function _addLocale (state, id) {

}

function _removeLocale (state, id) {

}

module.exports = {

  setSections (state) {
    return state.set('sections', fromJS(dbAPI.getSections()));
  },

  addSection (state, section) {
    return state;
  },

  removeSection (state, section) {
    return state;
  },

  changeSection (state, section) {
    return state;
  },

  setCurrent (state, id) {

    const section = dbAPI.getSections(id)[0];

    return state.set('current', Map(section));
  }

};

const state_initial = {
  sections: [],
  current: {}
};

const state_full = {
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
    },
  ],
  current: {
    id: 2,
    name: 'End',
    locale: {
      id: 'en',
      name: 'English',
      nodes: [
        {
          path: 'en/hello',
          term: 'hello',
          translation: 'Hello!'
        },
        {
          path: 'en/world',
          term: 'world',
          translation: 'World!'
        }
      ]
    }
  }
};






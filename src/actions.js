'use strict';

const immutable = require('immutable');
const List = immutable.List;
const Map = immutable.Map;
const fromJS = immutable.fromJS;


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
          path: [ 'hello' ],
          phrase: 'Hello!'
        },
        {
          path: [ 'world' ],
          phrase: 'World!'
        }
      ]
    }
  }
};

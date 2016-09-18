'use strict';

const state_initial = {
  sections: [],
  locales: {},
  terms: {},
  fail: {}
};

const state_example = {
  sections: [
    {
      id: 'sd89hj9sd8hj9hj9sd',
      name: 'Front',
      locales: ['en', 'fi']
    },
    {
      id: '34jk3k2j43lkjl3k4j',
      name: 'End',
      locales: ['en', 'jp']
    },
  ],
  locales: {
    en: 'English',
    jp: 'Japanese',
    fi: 'Finnish'
  },
  terms: {
    section: {
      id: '34jk3k2j43lkjl3k4j',
      name: 'End',
      locales: ['en', 'jp']
    },
    locale: {
      id: 'en',
      name: 'English',
    },
    list: [
      {
        id: '98dafghkj32fk32jflkj23kj',
        path: [ 'hello' ],
        phrase: 'Hello!'
      },
      {
        id: '89uad0fsd98f0dufiv0asdjk',
        path: [ 'world' ],
        phrase: 'World!'
      }
    ]
  },
  fail: null
};

/*
import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {setSections, addSection} from '../src/actions';
import {INITIAL_STATE} from '../src/constants';

const sections = [
  {
    id: 1,
    name: 'Front',
    locales: [
      { id: 'en', name: 'English' },
      { id: 'ru', name: 'Russian' }
    ]
  },
  {
    id: 2,
    name: 'End',
    locales: [
      { id: 'en', name: 'English' },
      { id: 'ua', name: 'Japanese' }
    ]
  }
];

describe('Application actions', () => {

  it('setSections', () => {

    const nextState = setSections(INITIAL_STATE, sections);

    expect(nextState).to.equal(fromJS({
      sections: [
        {
          id: 1,
          name: 'Front',
          locales: [
            { id: 'en', name: 'English' },
            { id: 'ru', name: 'Russian' }
          ]
        },
        {
          id: 2,
          name: 'End',
          locales: [
            { id: 'en', name: 'English' },
            { id: 'ua', name: 'Japanese' }
          ]
        }
      ],
      current: {}
    }));

  });

  it('addSection', () => {

    const state = INITIAL_STATE;
    state.set('sections', sections);

    const nextState = addSection(state, {
      id: 1,
      name: 'Beta',
      locales: []
    });

  });

});
*/
'use strict';
//const fromJS = require('immutable').fromJS;
//const mongoose = require('mongoose');
//const Section = mongoose.model('Section');

let data = {
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
  ],
  locales: {},
  nodes: {},
};

const _save = (item, scheme) => {
  let result = {};

  if (!item.id) {
    item.id = Object.keys(data[scheme]).length + 1;
  }

  data[scheme].forEach((el, index) => {
    result[el.id] = el;
  });

  result[item.id] = item;

  data[scheme] = Object.keys(result).map(id => result[id]);

  return result[item.id];
};

export default {

  saveSection (item) {
    return _save(item, 'sections');
  },

  saveLocale (item) {
    return _save(item, 'locales');
  },

  saveNode (item) {
    return _save(item, 'nodes');
  },

  fetchSections () {
    return new Promise((resolve, reject) => {
      //reject(new Error('Sections fetch fails'));
      resolve(data.sections);
    });
  },

  insertSection (name) {
    const result = _save({
      name,
      locales: []
    }, 'sections');
    return new Promise((resolve, reject) => {
      resolve(result);
    });
  },

  updateSection (id, name) {
    let sectns = {};
    data.sections.forEach(item => sectns[item.id] = item);

    sectns[id].name = name;
    _save(sectns[id], 'sections');

    return new Promise((resolve, reject) => {
      resolve(sectns[id]);
    });
  },

  deleteSection (id) {
    data.sections = data.sections
      .map(item => item.id === id ? undefined : item)
      .filter(item => undefined !== item);
    return new Promise((resolve, reject) => {
      resolve(id);
    });
  },

  insertLocale (sectionID, localeID) {
    let sec;
    data.sections.forEach((item, index, arr) => {
      if (sectionID === item.id) {
        arr[index].locales.push(localeID);
        sec = arr[index];
      }
    });

    return new Promise((resolve, reject) => {
      resolve(sec);
    });
  },

  deleteLocale (sectionID, localeID) {
    let sec;

    data.sections = data.sections
      .map(item => {
        if (item.id === sectionID) {
          item.locales = item.locales
            .map(loc => ~loc.indexOf(localeID) ? item : undefined)
            .filter(item => item !== undefined);
          sec = item;
        }
        return item;
      });
    return new Promise((resolve, reject) => {
      resolve(sec);
    });
  },

  getLocales () {
    return data.locales;
  },

  getNodes () {

    return data.nodes;

  },
  init (d) {
      data = d;
  }
};

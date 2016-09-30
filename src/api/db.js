'use strict';
import mongoose from 'mongoose';
import types from './../constants/ActionTypes';

const Section = mongoose.model('Section');
const Term = mongoose.model('Term');

export default {
  // Sections
  [types.FETCHING_SECTIONS] () {
    return Section.getList().then((result) => {
      return result.map(item => item.toPlain());
    });
  },
  [types.INSERTING_SECTION] ({ name }) {
    return (new Section({ name })).save().then((result) => {
      return result.toPlain();
    });
  },
  [types.UPDATING_SECTION] ({ id, name }) {
    return Section.findOneAndUpdate({ _id: id }, { name }).exec().then((section) => {
      return section && section.toPlain();
    });
  },
  [types.DELETING_SECTION] ({ id }) {
    return Section.removeById(id).then(() => {
      return id;
    });
  },
  [types.INSERTING_LOCALE] ({ sectionID, localeID }) {
    return Section.find({ _id: sectionID }).exec().then((section) => {
      return section[0].addLocale(localeID).save();
    }).then((section) => {
      return section && section.toPlain();
    });
  },
  [types.DELETING_LOCALE] ({ sectionID, localeID }) {
    return Section.find({ _id: sectionID }).exec().then(section => {
      return section[0].removeLocale(localeID).save();
    }).then(section => {
      return section && section.toPlain();
    });
  },
  // Terms
  [types.FETCHING_TERMS] ({ section, locale }) {
    return Term.getList(section.id, locale.id).then((result) => {
      return result.map(item => item.toPlain());
    });
  },
  [types.INSERTING_TERM] ({locale, path, section}) {
    return (new Term({
      _section: section,
      path: [locale, ...path]
    })).save().then((result) => {
      return result.toPlain();
    });
  },
  [types.UPDATING_TERM] ({ id, phrase }) {
    return Term.findOneAndUpdate({ _id: id }, { phrase }).exec().then(term => {
      return term && term.toPlain();
    });
  },
  [types.DELETING_TERM] ({ id }) {
    return Term.removeById(id).then(() => {
      return id;
    });
  }
};

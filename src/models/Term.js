'use strict';
import mongoose from 'mongoose';
import locales from '../constants/Locales';

const Schema = mongoose.Schema;

const TermSchema = new Schema({
  _section: {
    type: Schema.ObjectId,
    required: 'Section id is required'
  },
  path: {
    type: Array,
    required: 'Path is required',
    validate: [
      {
        validator: (value) => {
          return !!locales[value[0]];
        },
        msg: 'Path not valid: provided locale does not exist'
      }
    ]
  },
  phrase: String
});

TermSchema.methods = {

  getPhrase () {
    return this.phrase;
  },

  toPlain () {
    return {
      id: this._id.toString(),
      path: this.path.slice(1),
      phrase: this.getPhrase()
    };
  }

};

TermSchema.statics = {

  getList (sectionID, localeID) {
    return this.find({
      _section: sectionID,
      'path.0': localeID
    }).exec();
  },

  removeTerm (sectionID, path) {
    return this.find({ _section: sectionID, path }).remove().exec();
  },

  removeById (id) {
    return this.find({ _id: id }).remove().exec();
  }

};

module.exports = mongoose.model('Term', TermSchema);

'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Locales = require('../constants/Locales');

var _Locales2 = _interopRequireDefault(_Locales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var LocaleTermSchema = new Schema({
  _section: {
    type: Schema.ObjectId,
    required: 'Section id is required'
  },
  path: {
    type: Array,
    required: 'Path is required',
    validate: [{
      validator: function validator(value) {
        return !!_Locales2.default[value[0]];
      },
      msg: 'Path not valid: provided locale does not exist'
    }]
  },
  phrase: String
});

LocaleTermSchema.methods = {
  getPhrase: function getPhrase() {
    return this.phrase;
  },
  toPlain: function toPlain() {
    return {
      id: this._id.toString(),
      path: this.path.slice(1),
      phrase: this.getPhrase()
    };
  }
};

LocaleTermSchema.statics = {
  getList: function getList(sectionID, localeID) {
    return this.find({
      _section: sectionID,
      'path.0': localeID
    }).exec();
  },
  removeTerm: function removeTerm(sectionID, path) {
    return this.find({ _section: sectionID, path: path }).remove().exec();
  },
  removeById: function removeById(id) {
    return this.find({ _id: id }).remove().exec();
  }
};

_mongoose2.default.model('LocaleTerm', LocaleTermSchema);
'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Schema = _mongoose2.default.Schema;

var SectionSchema = new Schema({
  name: {
    type: String,
    unique: true,
    trim: true
  },
  locales: Array,
  createdAt: { type: Date, default: Date.now }
});

SectionSchema.path('name').required(true, 'Section name cannot be blank');

SectionSchema.methods = {
  addLocale: function addLocale(id) {
    this.locales = [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(this.locales), [id]))));
    return this;
  },
  removeLocale: function removeLocale(id) {
    this.locales = this.locales.filter(function (item) {
      return item !== id;
    });
    return this;
  },
  getLocales: function getLocales() {
    return this.locales;
  },
  getTermsByLocale: function getTermsByLocale(locale) {
    var Term = _mongoose2.default.model('Term');
    return Term.getList(this._id, locale);
  },
  toPlain: function toPlain() {
    return {
      id: this._id.toString(),
      name: this.name,
      locales: this.getLocales()
    };
  }
};

SectionSchema.statics = {
  getList: function getList() {
    var criteria = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return this.find(criteria).exec();
  },
  removeById: function removeById(id) {
    return this.find({ _id: id }).remove().exec();
  }
};

_mongoose2.default.model('Section', SectionSchema);
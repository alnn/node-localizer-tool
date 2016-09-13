'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SectionSchema = new Schema({
  name: {
    type: String,
    unique : true,
    trim: true
  },
  locales: Array,
  createdAt: { type: Date, default: Date.now }
});

SectionSchema.path('name').required(true, 'Section name cannot be blank');

SectionSchema.methods = {

  addLocale(id) {
    this.locales = [...new Set([...this.locales, id])];
    return this;
  },

  removeLocale(id) {
    this.locales = this.locales.filter(item => item !== id);
    return this;
  },

  getLocales () {
    return this.locales;
  },

  getTermsByLocale (locale) {
    const LocaleTerm = mongoose.model('LocaleTerm');
    return LocaleTerm.getList(this._id, locale);
  },

  toPlain () {
    return {
      id: this._id.toString(),
      name: this.name,
      locales: this.getLocales()
    }
  }

};

SectionSchema.statics = {

  getList (criteria = {}) {
    return this.find(criteria).exec();
  },

  removeById (id) {
    return this.find({ _id: id }).remove().exec();
  }

};

mongoose.model('Section', SectionSchema);

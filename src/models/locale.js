'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LocaleSchema = new Schema({
  _section: { type: Schema.Types.ObjectId, ref: 'Section' },
  id: String,

});

LocaleSchema.methods = {

  getId() {
    return this.id;
  }

};

LocaleSchema.statics = {

  getList () {

  }

};

mongoose.model('Locale', LocaleSchema);

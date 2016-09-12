'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SectionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique : true,
    trim: true
  },
  locales: [{ type: Schema.Types.ObjectId, ref: 'Locale' }],
  createdAt: { type: Date, default: Date.now }
});

SectionSchema.path('name').required(true, 'Section name cannot be blank');

SectionSchema.methods = {

  getLocales () {
    //return this.locales;
  }

};

SectionSchema.statics = {

  getList (options = {}) {
    let criteria, page, limit;

    criteria = options.criteria || {};
    page = options.page || 0;
    limit = options.limit || 100;

    return this.find(criteria)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(limit * page)
      .exec();
  }

};

mongoose.model('Section', SectionSchema);

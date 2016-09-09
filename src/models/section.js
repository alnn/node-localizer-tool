'use strict';

const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  name: {
    type: String,
    index: { unique :true },
    trim: true
  },
  createdAt: { type: Date, default: Date.now }
});

SectionSchema.path('name').required(true, 'Section name cannot be blank');

SectionSchema.methods = {

  getLocales () {

  }

};

SectionSchema.statics = {

  getList ({ criteria = {}, page = 0, limit = 100 }) {
    return this.find(criteria)
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(limit * page)
      .exec();

  }

};

mongoose.model('Section', SectionSchema);

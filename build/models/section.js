'use strict';

var mongoose = require('mongoose');

var SectionSchema = new mongoose.Schema({
  name: {
    type: String,
    index: { unique: true },
    trim: true
  },
  createdAt: { type: Date, default: Date.now }
});

SectionSchema.path('name').required(true, 'Section name cannot be blank');

SectionSchema.methods = {
  getLocales: function getLocales() {}
};

SectionSchema.statics = {
  getList: function getList(_ref) {
    var _ref$criteria = _ref.criteria;
    var criteria = _ref$criteria === undefined ? {} : _ref$criteria;
    var _ref$page = _ref.page;
    var page = _ref$page === undefined ? 0 : _ref$page;
    var _ref$limit = _ref.limit;
    var limit = _ref$limit === undefined ? 100 : _ref$limit;

    return this.find(criteria).sort({ createdAt: -1 }).limit(limit).skip(limit * page).exec();
  }
};

mongoose.model('Section', SectionSchema);
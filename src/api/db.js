'use strict';

const mongoose = require('mongoose');
const Section = mongoose.model('Section');

module.exports = {

  getSections () {
    return Section.getList();
  }

};

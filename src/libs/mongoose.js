'use strict';
import mongoose from 'mongoose';

export default function (params) {

  mongoose.Promise = Promise;
  mongoose.connect(params.uri, params.options);

  // Load models
  require('../models/Section');
  require('../models/LocaleTerm');

  return mongoose;
}

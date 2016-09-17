'use strict';
import mongoose from 'mongoose';
// Load models
import '../models/Section';
import '../models/LocaleTerm';

export default params => {
  mongoose.Promise = Promise;;
  return mongoose.connect(params.uri, params.options).connection;
}

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const objectId = mongoose.Schema.Types.ObjectId;

linkSchema = new mongoose.Schema({
  url:{
    type:String,
    trim:true,
    required:true,
  },
  slug:{
    type:String,
    trim:true,
  },
  author: objectId,
}); 


module.exports = mongoose.model('link',linkSchema)
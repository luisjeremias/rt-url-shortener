const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DATABASE,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});
mongoose.Promise = global.Promise;
mongoose.connection.on('error',(error)=>{
  console.log('Error:' + error)
})

const app = require('./app');

app.listen(process.env.PORT || 5555, ()=>{
console.log(`Listening on port ${process.env.PORT}`)
})
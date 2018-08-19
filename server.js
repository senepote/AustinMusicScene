const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';
const db = mongoose.connection;

//sessions

//middleware
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.json());

//controllers

app.listen(PORT, ()=>{
  console.log('listening...');
})

mongoose.connect(mongoUri);
mongoose.connection.on('open', ()=>{
  console.log('mongoose connected!!!!!!!');
})

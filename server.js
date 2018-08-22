const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
const mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/music-app';
const db = mongoose.connection;

app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json());


app.listen(PORT, ()=>{
  console.log('listening...');
})

mongoose.connect(mongoUri);
mongoose.connection.on('open', ()=>{
  console.log('mongoose connected!!!!!!!');
})

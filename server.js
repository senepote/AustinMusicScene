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
const musicController = require('./controllers/rockstars.js');
app.use('/music', musicController);
const userController = require('./controllers/users.js');
app.use('/users', userController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

app.get('/',(req,res)=>{
  res.redirect('/music')
})

app.get('/app', (req,res)=>{
  if(req.session.currentUser){
    res.send('the main');
  } else {
    res.redirect('/sessions/new')
  }
})

app.listen(PORT, ()=>{
  console.log('listening...');
})

mongoose.connect(mongoUri);
mongoose.connection.on('open', ()=>{
  console.log('mongoose connected!!!!!!!');
})

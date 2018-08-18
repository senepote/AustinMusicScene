const express = require('express');
const router = express.Router();
const Music = require('../models/rockstars.js');
const session = require('express-session');

//JSON
router.get('/json', (req,res) =>{
  Music.find({}, (err, allMusic)=>{
    res.send(allMusic)
  })
})

//INDEX

//SHOW

//CREATE

//EDIT

//UPDATE

//DELETE

//IMPORTANT
module.exports = router;

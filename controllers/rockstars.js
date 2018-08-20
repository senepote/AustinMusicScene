const express = require('express');
const router = express.Router();
const Music = require('../models/rockstars.js');

//GET route
router.get("/" , (req,res) =>{
  Music.find({}, (err, allMusic)=>{
    res.json(allMusic);
  });
});

//POST route
router.post("/", (req,res)=>{
  Music.create( req.body (err, createMusic)=>{
    res.json(createMusic);
  });
});

//PUT route
router.put("/:id", (req,res)=>{
  Music.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMusic)=>{
    res.json(updatedMusic);
  });
});
//DELETE
router.delete("/:id", (req,res)=>{
  Music.findByIdAndRemove(req.params.id, (err, deletedMovie)=>{
    res.json(deletedMovie);
  });
});
//exports to the controller
module.exports = router;

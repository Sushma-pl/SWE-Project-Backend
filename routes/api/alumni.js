// routes/api/alumni.js

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Load Alumni model
const Alumni  = require('../../models/Alumni');

// @route GET api/alumni/test
// @description tests alumni route
// @access Public
router.get('/test', (req, res) => {
  Alumni.find()
  .then(alumni => res.json(alumni))
  .catch(err => res.status(404).json({ noalumnifound: 'No Books found' }));
  // console.log(req.body);
  // res.send('alumni route testing!')
 });

// create a new alumni
router.post('/add-alumni',[
    body('name').isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
      res.status(404).json({ errors: errors.array() })
    }
    
    Alumni.create({
      name: req.body.name,
      type_of_alumni: req.body.type_of_alumni,
      mentor: req.body.mentor,
      thesis: req.body.thesis,
      graduation_year: req.body.graduation_year,
      present_position: req.body.present_position,
  }).then(alumni => res.json(alumni));
  
  // can write a delete-alumni part also 
});



  module.exports = router;
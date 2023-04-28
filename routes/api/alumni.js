// routes/api/alumni.js

const express = require('express');
const router = express.Router();

// Load Alumni model
const Book = require('../../models/Alumni');

// @route GET api/alumni/test
// @description tests alumni route
// @access Public
router.get('/test', (req, res) => res.send('alumni route testing!'));

// @route GET api/alumni
// @description Get all alumni
// @access Public
router.get('/', (req, res) => {
    Alumni.find()
      .then(alumni => res.json(alumni))
      .catch(err => res.status(404).json({ nobooksfound: 'No alumni found' }));
  });

  module.exports = router;
const express = require('express');
const StreetArt = require('../models/StreetArt');
const Visit = require('../models/Visit');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

// Route protected for logged in user
router.get('/my-visits', isLoggedIn, (req, res, next) => {
  Visit.find({_user: req.user._id}).populate('_user')
  .then(response => {
    res.json(response);
  })
  // You should use `.populate`
});

module.exports = router;

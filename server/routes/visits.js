const express = require('express');
const StreetArt = require('../models/StreetArt');
const Visit = require('../models/Visit');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

// Route protected for logged in user
router.get('/my-visits', isLoggedIn, (req, res, next) => {
  Visit.find({_user: req.user._id}).populate('_streetArt')
  .then(response => {
    res.json(response);
  })
  // You should use `.populate`
});

router.post('/visits', isLoggedIn, (req, res, next) => {
  Visit.create({
    _user: req.user._id,
    _streetArt: req.body._streetArt

  })
  .then(response => {
    res.json(response);
  })
})

router.delete('/visits/:visitId', (req, res, next)=>{

  Visit.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `The visit was sucessfully deleted` });
    })
})


module.exports = router;

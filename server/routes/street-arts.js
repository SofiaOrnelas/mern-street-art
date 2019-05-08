const express = require('express');
const router = express.Router();
const StreetArt = require ('../models/StreetArt')
const uploader = require('../configs/cloudinary.js');

router.get('/', (req, res, next) => {
  StreetArt.find()
    .then (streetarts => {
      res.json(streetarts);
    })
  });
  

router.get('/:streetArtId', (req, res, next) => {
  StreetArt.findById(req.params.streetArtId)
    .then(streetarts => {
      res.json({
        streetarts
    })
  });
})

/* router.post('/', (req, res, next) => {
  let { lat, lng, picture } = req.body
  StreetArt.create({ lat, lng, picture })
    .then(streetArt => {
      res.json({
        streetArt
      });
    })
}); */
    
router.post('/', uploader.single('picture'), (req, res, next) => {
  let { lat, lng } = req.body
  let pictureUrl = req.file.url
  StreetArt.create({
    pictureUrl, 
    location: {
      coordinates: [lat, lng]
    } 
  })
    .then(streetArt => {
      res.json({
        streetArt
      });
    })
});

  

  


module.exports = router;
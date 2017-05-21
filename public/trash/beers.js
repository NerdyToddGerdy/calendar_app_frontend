var express = require('express');
var router = express.Router();
var Beers = require('../models/beers.js');

// router.get('/', function(req, res){
//   Beers.find({}, function(err, foundBeers){
//     res.json(foundBeers);
//   });
// });
//
//
//
// router.get('/search/:min/:max', function(req, res){
//   console.log(req.params.min);
//   console.log(req.params.max);
//
//   Beers.find({
//     ibuMin:{$gte: req.params.min},
//     ibuMax:{$lte: req.params.max}
//   }, function(err, foundBeers){
//     res.json(foundBeers);
//   });
// });
//
// router.post('/', function(req, res){
//   Beers.create(req.body, function(err, createdBeers){
//     res.json(createdBeers);
//   });
// });
//
// router.put('/:id', function(req, res){
//   Beers.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updatedBeers){
//     res.json(updatedBeers);
//   });
// });
//
// router.delete('/:id', function(req, res){
//   Beers.findByIdAndRemove(req.params.id, function(err, deletedBeers){
//     res.json(deletedBeers);
//   });
// });

module.exports = router;

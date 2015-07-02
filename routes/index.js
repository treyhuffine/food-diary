var express = require('express');
var Firebase = require('firebase');
var router = express.Router();
var fbRef = new Firebase('https://treyhuffine-sample-apps.firebaseio.com/food-diary/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/users', function(req, res) {
  fbRef.push(req.body, function(err) {
    if (err) {
      res.status(400);
    }
    else {
      res.json(res.body);
    }
  });
});
router.get("/food", function(req, res) {
  res.status(200).json({message: "API successfully hit"});
});
router.post("/food/", function(req, res) {
  res.status(200).json({message: "API successfully hit"});
});
router.delete("/food/:id", function(req, res) {
  res.status(200).json({message: "API successfully hit"});
});
router.put("/food/:id", function(req, res) {
  res.status(200).json({message: "API successfully hit"});
});

module.exports = router;

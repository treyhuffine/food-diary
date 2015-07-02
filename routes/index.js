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
  });
  fbRef.limitToLast(1).on("child_added", function(snapshot) {
    var newUser = snapshot.val();
    newUser.uid = snapshot.key();
    res.json(newUser);
  });
});
router.get('/users', function(req, res) {
  fbRef.once("value", function(snapshot) {
    res.json(snapshot.val());
  }, function(err) {
    res.json(err);
  });
});
router.get("/food", function(req, res) {
  fbRef.child(req.body.uid).child("food").once("value", function(snapshot) {
    res.json(snapshot.val());
  });
});
router.post("/food", function(req, res) {
  fbRef.child(req.body.uid).child("food").push(req.body, function(err) {
    if (err) {
      res.status(400);
    }
    fbRef.child(req.body.uid).child("food").limitToLast(1).on("child_added", function(snapshot) {
      var newFood = snapshot.val();
      newFood.foodId = snapshot.key();
      res.json(snapshot.val());
    });
  });
});
router.delete("/food/:id", function(req, res) {
  res.status(200).json({message: "API successfully hit"});
});
router.put("/food/:id", function(req, res) {
  res.status(200).json({message: "API successfully hit"});
});

module.exports = router;

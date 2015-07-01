var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
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

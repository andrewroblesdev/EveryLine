
// NOTE: This is an example page

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send("We're in filename.js now!");
});

router.post('/', function(req, res) {
    res.send("We're in filename.js now!");
});

module.exports = router;
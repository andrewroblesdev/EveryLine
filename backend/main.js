const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config"); // <- Getting the config file.
const filename = require("./endpoints/filename");

const bodyParserConfig = { extended: false };

// Basic express.js config stuff.
app.use(bodyParser.urlencoded(bodyParserConfig));
app.use(bodyParser.json());

const app = express(); // <- Creating the web server.

// Basic "welcome" page for now. 
app.get('/', function(req, res) {
    res.send("It's working!");
})

// Basic "welcome" page, but in POST method.
app.post('/', function(req, res) {
    res.send("It's working, but in POST.")
})

app.use('/filename', filename);

app.listen(config.main.main_port);
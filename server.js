var express = require('express');

var app = express();

var PORT = process.env.PORT || 5000;



app.listen(PORT, function() {
    console.log("app is working in " + PORT);
  });
var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
var history = require("connect-history-api-fallback");

app = express();

app.use(history());
app.use(serveStatic(__dirname + "/public"));

var port = process.env.PORT || 3000;

app.listen(port);

console.log("Client running on port " + port);

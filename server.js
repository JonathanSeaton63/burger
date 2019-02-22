var express = require("express"); 

var PORT = porcess.env.PORT || 8080

var app = express();

app.use(express.static("static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


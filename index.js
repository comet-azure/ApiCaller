const path = require('path');
const express = require('express');
const app = express();

// css 등 담는 폴더 경로
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/Map", function(req, res) {
    res.sendFile(__dirname + "/html/map.html");
});

app.listen(9090, function() {
    console.log("The server is running at port 9090.");
});
var express = require('express');
var app     = express();

app.use(require('connect-livereload')({
    port: 35729
}));

app.use(express.static(__dirname + '/.build'));

app.get('*',function(req,res){
  res.sendFile(__dirname + '/.build/index.html');
});

app.listen(9001, function() {
    console.log("Listening on 9001");
});
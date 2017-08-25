const express = require('express');//require import another file 
const app = express(); //setting function created in 1 to variable app
const http = require('http').Server(app); //create public folder after this

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){//req = request, res = response: req must be first
	res.sendFile(__dirname + '/index.html'); //forward slash is important because we're building a path
})

http.listen(3000,function(){
	console.log("Listening on port 3000."); //as you're typing this out talk through it
											//walking through modules make sure you understand stuff or search it up and ask kenn
})

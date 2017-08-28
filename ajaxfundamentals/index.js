// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res) => {
// 	res.statusCode = 200;
// 	res.setHeader('content-Type', 'text/plain');
// 	res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
// 	console.log('Server running at http://${hostname}:${port}/');
// });

//beginning of the day, open all ports, end of the day, close all ports

const express = require('express'); //Const = constant variable which prevents it from being written-over (if you try, then you’ll get an error)
const app = express();
const http = require('http').Server(app);

app.use(express.static(__dirname + '/public')); //this is telling express to use the static files at this location
												//changing things in the /public folder (or any other), then you don't have to restart server

app.get('/', function(req,res){ //req=request; res=response; get=http request to server; /=root of application 
	res.sendFile(__dirname + '/0.01_ajaxpractice.html'); //any changes to this and you need to restart your server
})

http.listen(3000, function(){
	console.log("Listening on port 3000"); //commonly used Ports: 3000, 5000, 8080, 8888
})

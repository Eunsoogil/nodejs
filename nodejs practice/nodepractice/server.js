//const http = require('http');
//http 모듈

// const server = http.createServer(() => {
// 	console.log('I hear you');
// })

// const server = http.createServer((request, response) => {
// 	console.log('header: ', request.headers);
// 	console.log('method: ', request.method);
// 	console.log('url: ', request.url);
// 	response.setHeader('Content-Type', 'text/html');
// 	response.end('<h1>Helloooooo</h1>');
// })

// const server = http.createServer((request, response) => {
// //	console.log('header: ', request.headers);
// 	console.log('method: ', request.method);
// 	console.log('url: ', request.url);
// 	const user = {
// 		name: 'John',
// 		hobby: 'Skating'
// 	}
// 	response.setHeader('Content-Type', 'application/json');
// 	response.end(JSON.stringify(user));
// })


// server.listen(3000); //localhost:3000으로 가면 콜솔에 찍힘


//npm install express
const express = require('express');

const app = express();

// app.get('/', (req, res) => {
// 	res.send("hello");
// }) // '/'는 root

// app.get('/', (req, res) => {
// 	res.send("<h1>hello</h1>");
// })

// app.get('/', (req, res) => {
// 	const user = {
// 		name: 'Sally',
// 		hobby: 'soccer'
// 	}
// 	res.send(user);
// })

app.get('/', (req, res) => {
	res.send("getting root");
})

app.get('/profile', (req, res) => {
	res.send("getting profile");
})

app.post('/profile', (req, res) => {
	const user = {
		name: 'Sally',
		hobby: 'soccer'
	}
	res.send(user);
})

app.listen(3000); 
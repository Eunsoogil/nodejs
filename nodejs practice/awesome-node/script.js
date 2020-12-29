const fs = require('fs');

console.time('start');
console.timeEnd('start');

fs.readFile('./hello.txt', (err, data) => {
	if(err) {
		console.log('errrrr')
	}
	console.log('readFile : ' + data.toString('utf8'));
}) //비동기 방식

const file = fs.readFileSync('./hello.txt'); //동기 방식, 따라서 먼저 찍힘, 비추천 방식
console.log('readFileSync : ' + file.toString('utf8')); 

// APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
// 	if(err){
// 		console.log('errrr')
// 	}
// })


// WRITE (파일 생성)
// fs.writeFile('./bye.txt', 'Sad to see you go', err => {
// 	if(err){
// 		console.log('errrr')
// 	}
// })


// DELETE
fs.unlink('./bye.txt', err => {
	if(err){
		console.log('errrr')
	}
	console.log('delete')
})
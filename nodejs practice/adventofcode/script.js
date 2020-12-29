const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
	console.time('timer');
	let inputString = data.toString();
	let start = 0;
	for(let i = 0; i < inputString.length; i++){
		if(inputString.substr(i,1) == '('){
			start++;
		} else {
			start--;
		}
	}
	console.log(start);
	console.timeEnd('timer');
})

// fs.readFile('./input.txt', (err, data) => {
// 	console.time('andreiSolutionTimer');
// 	let directions = data.toString();
// 	let directionsArray = directions.split('');
// 	let answer = directionsArray.reduce((acc, currentValue) => {
// 		if(currentValue === '(') {
// 			return acc += 1;
// 		} else if (currentValue === ')') {
// 			return acc -= 1;
// 		}
// 	}, 0)
// 	console.log(answer);
// 	console.timeEnd('andreiSolutionTimer');
// })


fs.readFile('./input.txt', (err, data) => {
	console.time('timer2');
	let inputString = data.toString();
	let start = 0;
	let answer = 0;
	for(let i = 0; i < inputString.length; i++){
		if(inputString.substr(i,1) == '('){
			start++;
		} else {
			start--;
		}
		if(start === -1){
			answer = i;
			break;
		}
	}
	console.log(answer + 1);
	console.timeEnd('timer2');
})


// fs.readFile('./input.txt', (err, data) => {
// 	console.time('andreiSolutionTimer2');
// 	let directions = data.toString();
// 	let directionsArray = directions.split('');
// 	let accumulator = 0;
// 	let counter = 0;
// 	let answer = directionsArray.some((currentValue) => {
// 		if(currentValue === '(') {
// 			accumulator += 1;
// 		} else if (currentValue === ')') {
// 			accumulator -= 1;
// 		}
// 		counter++;
// 		return accumulator < 0;
// 	})
// 	console.log(counter);
// 	console.timeEnd('andreiSolutionTimer2');
// })
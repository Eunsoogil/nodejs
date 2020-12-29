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
}) //비동기 방식
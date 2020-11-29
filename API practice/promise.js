const promise = new Promise((resolve, reject) => {
	if(true) {
		resolve('Stuff Worked');
	} else {
		reject('Error, it brokes')
	}
})

promise.then(result => console.log(result));
const basket = ['apples', 'oranges', 'grapes'];
const detailedBacket = {
	apples : 5,
	oranges : 10,
	grapes : 1000
}

//1
for (var i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

//2
basket.forEach(item => {
	console.log(item);
})

//for of
//iterating - arrays, strings
for (item of basket){
	console.log(item);
}
for (item of 'basket'){
	console.log(item);
}

//for in - properties (value값은 안나옴)
//enumerating - objects
for (item in detailedBacket){
	console.log(item);
}

// 안됨
// for (item of detailedBacket){
// 	console.log(item);
// }

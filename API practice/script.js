//Object spread operator
//react는 defualt로 사용
//es2018에서도 사용
const array = [1,2,3,4,5];
function sum (a,b,c,d,e) {
	return a + b + c + d + e;
}
console.log(sum(1,2,3,4,5))
console.log(sum(...array))

const animals = {
	tiger : 23,
	lion : 5,
	monkey : 2,
	bird : 40
}

function objectSpread(p1,p2,p3){
	console.log(p1)
	console.log(p2)
	console.log(p3)
}

const {tiger, lion, ... rest} = animals;
console.log(tiger);
console.log(rest); // monkey, bird return
console.log(objectSpread(tiger, lion, rest)); // 23, 5, monkey, bird return


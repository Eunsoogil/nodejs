const greet = "123";
const greetcheck = "234";

const first = () => {
	//local scope
	const greet = "hi";
	const second = () => {
		const name = "bobby";
		//123이 아니라 "hi"
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

function check(){
	//local scope
	const greetcheck = "h122";
	//234아님
	alert(greetcheck);
}
check();
console.log(greet, greetcheck);

//Clousures => 

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(4));
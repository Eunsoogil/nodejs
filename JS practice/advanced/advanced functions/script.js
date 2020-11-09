const greet = "123";
const greetcheck = "234";

const first = () => {
	//local scope
	const greet = "hi";
	const second = () => {
		const name = "bobby";
		//123이 아니라 "hi"
		//alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

function check(){
	//local scope
	const greetcheck = "h122";
	//234아님
	//alert(greetcheck);
}
check();
console.log(greet, greetcheck);

//library에서 매우 자주 쓰이는 3가지

//Clousures => const firse 처럼 함수가 내장되어 있는 경우 first 내부의 
//second를 부르면 second위의 변수 greet를 탐색하는 현상


//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(4));
//쓰는 이유
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(6));


//compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
console.log(compose(sum, sum)(5));

//웹개발자로서 중요한 것 : Avoiding side effects, functional purity
var a = 1;
function b(){
	a = 2;
}
// function이 작용되므로서 function외부의 world에 영향을 주는 것을 피하는것
// => functional purity : always returning same value (determinisim)
// => 이렇게해야 몇천, 몇만번을 시행해도 항상 같은 값이 나오므로 버그를 막을 수 있다
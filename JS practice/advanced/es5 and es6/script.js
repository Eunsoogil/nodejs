//babel : 작성한 자바스크립트 코드를 es5, es6와 혼용될 수 있도록 코드 변환해줌

const player = "bobby";
let experience = 100;
//let wizardlevel = false;
var wizardlevel = false;

if (experience > 90){
	//let wizardlevel = true;
	//var wizardlevel = true;
	//var의 경우 console.log 찍어보면 둘다 true, var를 안쓰는 이유, 내부 선언의 개념이 없음
	console.log('inside', wizardlevel);
}
console.log('outside', wizardlevel);

//destructuring

const obj = {
	player : "bobby",
	experience : 100,
	wizardlevel : false,
}

obj.player = "sally";
console.log(obj)

// const player1 = obj.player;
// const experience1 = obj.experience;
// let wizardlevel1 = obj.wizardlevel;
// console.log(player1, experience1, wizardlevel1);

// 위 방법보다 편한 방법
const {player1, experience1} = obj;
let wizardlevel1 = obj;

console.log(player1, experience1, wizardlevel1); // 찍어보니 위에 undefined가 찍힘?

const name = "john snow";

let no = "nonono";

const obj2 = {
	[name] : 'hello',
	[1 + 2]: 'h1h1',
	[no] : 'yesyes'
}

console.log(obj2);


const a = 1;
const b = 2;
const c = 3;

const obj3 = {
	a,
	b,
	c
}

console.log(obj3);

const naming = "sally";
const age = 34;

const greeting = "hello! " + naming + " I'm " + age;
console.log(greeting);

const greetingBetterVersion = `hello! ${naming} you looks like ${age-10}`;
// ``표시 주의! '', ""랑 다르다
console.log(greetingBetterVersion);

function greet(name2='john', age2=30){
	const greetingBetterVersion2 = `hello! ${name2} you looks like ${age2-10}`;
	console.log(greetingBetterVersion2);
}

greet();
greet('sally', 20);


//symbol , 다른 누구와도 같지않은 유니크한 변수 생성

let sym1 = Symbol();
let sym2 = Symbol('boo');
let sym3 = Symbol('boo');

console.log(sym1, sym2, sym3);

if(sym2 == sym3){
	alert("안됨");
}

//arrow function

function add(d, e){
	return d + e;
}
console.log(add(3,4));

const add2 = (d, e) => d + e;
console.log(add2(4,5));











// reference type

var object1 = {value : 10};
var object2 = object1;
var object3 = {value : 10};

console.log(object1 === object2);
console.log(object1 === object3);
object1.value = 15;
console.log(object1.value);
console.log(object2.value);
console.log(object3.value);
// pass by value vs pass by reference
// reference type은 값이 아닌 주소 기억
let obj = {a : 'a', b : {deep : '?'}, c : 'c'};
let clone1 = obj;
let clone2 = Object.assign({}, obj); //주소로 기억 안함
let clone3 = {...obj};
let superclone = JSON.parse(JSON.stringify(obj)); //완전한 복제
//하지만 만약 객체가 커지면오래걸린다

obj.c = 5;
obj.b.deep = 'haha'; // 객체 안에 객체라 변함
console.log(obj);
console.log(clone1);
console.log(clone2);
console.log(clone3);



//context vs scope
function a(){
	let b = 1;
}
//console.log(b); ==> scope
//context는 this
function b(){
	console.log(this);
}
b();
const object4 = {
	a : function(){
		console.log(this);
	}
}
object4.a();
//this는 상위 object!!!! 매우 놀라운 사실



//instantiation
class Player {
	constructor(name, type){
		console.log('1');
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I'm ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
		//parameter가 필요한 이유 모르겠음 안넣으면 undefined
		//상속받았기 때문에 생성자의 console.log가 실행된다
	}
	play(){
		console.log(`WEEEEEE I'm a ${this.type}`)
	}
}

const wizard1 = new Wizard('shayla', 'harry porter');
const wizard2 = new Wizard('eunsoo', 'voldmot');
wizard1.introduce();
wizard2.play();
wizard2.introduce();
wizard1.play();



console.log('-------------------------------------');
//type coercion
//1 == '1', 자바스크립트만의 이상한 짓
//andrei는 === 무조건 세개 추천
if(1){
	console.log('1을 ture로 변환...');
}
//https://dorey.github.io/JavaScript-Equality-Table/
// 자바스크립트에는 +0, -0도 있음...
console.log(-0 === +0);
console.log(Object.is(-0,+0));
//object.is는 NaN 판별 가능
console.log(NaN === NaN);
console.log(Object.is(NaN,NaN));


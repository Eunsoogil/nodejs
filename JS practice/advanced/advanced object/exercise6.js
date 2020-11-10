//Evaluate these:
//#1
// [2] === [2] //false
// {} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { a: 5}; //5
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor(name, type, color){
		this.name = name;
		this.type = type;
		this.color = color;
	}
	sound(){ // function 앞에 붙이면 안됨
		alert(`moo ${this.name} ${this.type1} ${this.color}`);
		//반드시 변수 앞에 this붙일것
	}
}

class Mamal {

}

let cow1 = new Animal('mimi', 'cow', 'black');
cow1.sound();
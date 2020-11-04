var user = {
	name : "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells: ["abrakadabra", "shazam", "boo"],
	shout: function(){
		console.log("AHHHHHHH");
	}
};

var list = ["apple", "banana", "orange"];
console.log(user.name);
user.favoriteFood = "burger";
console.log(user);

var userlist = [
	{
		username: "andy",
		password: "secret"
	},
	{
		username: "jess",
		password: "123"
	}
];
console.log(user.spells[1]);
console.log(userlist[0].username);
//console.log(user.shout());
user.shout();
//console.log 역시 object내의 메소드!
// function vs method
function thisisAFunction(){

};
var obj = {
	thisisMethod: function(){

	}
};
thisisAFunction();
obj.thisisMethod();

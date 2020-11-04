var database = [
	{
		username : "andrei",
		password : "supersecret"
	},
	{
		username : "11",
		password : "11"	
	}
];

var newsFeed = [
	{
		username:"bobby",
		timeline:"so tired from all that learning"
	},
	{
		username:"sally",
		timeline:"javascript is sooo cool!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass){
	for (var i = 0; i < database.length; i++) {
		if(user == database[i].username && pass == database[i].password){
			return true;
		}
	}
	return false	
}

function signIn(user, pass){
	if(isUserValid(user, pass)){
		console.log(newsFeed);
	}else{
		alert("wrong username and password");
	}
	// if(user === database[0].username && pass === database[0].password){
	// 	console.log(newsFeed);
	// } else {
	// 	alert("wrong username and password");
	// }
}

signIn(userNamePrompt,passwordPrompt);
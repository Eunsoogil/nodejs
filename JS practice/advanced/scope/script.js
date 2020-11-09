//scope = 스코프란 어떤 변수들에 접근할수 있는지를 정의


var b = "can i access this?";

function aa(){
	alert("123");
	var a = "hello";
	b = "hello";
	// a의 경우 함수 aa의 scope, 따라서 window에서 불가능
}

window.aa();
//aa는 window의 scope

//root scope (window)

var fun = 5;

function funFunction(){
	//child scope
	var fun = "hello";
	console.log(1, fun);
}

function funerFunction(){
	//child scope
	var fun = "helloer";
	console.log(2, fun);
}

function funestFunction(){
	//child scope
	fun = "helloest";
	console.log(3, fun);
}
console.log(fun);
funFunction();
funerFunction();
funestFunction();

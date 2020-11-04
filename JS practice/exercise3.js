var num1 = prompt("type first num");
var action = prompt("+ or - or / or *");
var num2 = prompt("type second num");
var result;
switch(action){
	case "+" : result = Number(num1) + Number(num2); break;
	case "-" : result = Number(num1) - Number(num2);  break;
	case "/" : result = Number(num1) / Number(num2);  break;
	case "*" : result = Number(num1) * Number(num2);  break;
	default : break;
}
alert(result);
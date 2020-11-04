var list = ["tiger", "cat", "bear", "bird"];
console.log(list[0]);

var functionlist = [function(){
	alert("0");
}, function(){
	alert("1");
}];
console.log(functionlist[0]);
list.shift();
//앞에 날라감
console.log(list);
list.pop();
//앞에 날라감
console.log(list);
list.push("elephant");
//배열에 넣음 
console.log(list);
var list2 = list.concat(["bee","deer"]);
//선언후 변수에 넣어주지 않으면 안됨
console.log(list2);
list2.sort();
console.log(list2);



//exercise6
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
array.push("Kiwi");
array.shift();
array.reverse();
console.log(array);

var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1]);
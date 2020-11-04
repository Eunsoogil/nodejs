var todos = [
	"clean room",
	"brush teeth",
	"exercise"
];

var todos2 = [
	"clean room2",
	"brush teeth2",
	"exercise2"
];

for (var i = 0; i < todos.length; i++) {
	console.log(todos[i]);
}

i=0;
while(i < todos.length){
	console.log(todos[i]);
	i++;
}

// todos.forEach(function(i){
// 	console.log(i);
// })
// 위 아래 결과 같음
// todos.forEach(function(todo){
// 	console.log(todo);
// })

// 매개변수 2번째는 index로 되어 있음
// todos.forEach(function(todo, i){
// 	console.log(todo, i);
// })

function logTodos(todo, i){
	console.log(todo, i);
}

todos.forEach(logTodos);
todos2.forEach(logTodos);
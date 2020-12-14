//https://www.npmjs.com/package/touch-for-windows 설치
//npm install -g touch-for-windows
//cmd에서 touch script.js
//node script.js 치면 실행

//node로 node들어간 후 global.setTimeout 친 후 사용 가능

const a = 4;
const b = 5;

setTimeout(() => {
	console.log(a+b);
}, 3000)

console.log(__dirname);
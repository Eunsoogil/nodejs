//https://www.npmjs.com/package/touch-for-windows 설치
//npm install -g touch-for-windows
//cmd에서 touch script.js
//node script.js 치면 실행

//node로 node들어간 후 global.setTimeout 친 후 사용 가능

// const a = 4;
// const b = 5;

// setTimeout(() => {
// 	console.log(a+b);
// }, 3000)

// console.log(__dirname);


//globalThis === window
//globalThis는 node와 브라우저가 return하는 값은 다르지만 둘 다 사용가능
//cross-platform가능


//import largeNumber from 'script2.js' //node는 안됨
//const script2 = require('./script2.js')

//이제됨
//방법1 : package.json 변경
//console에 npm init -y > package.json 생성
//폴더 이름에 띄어쓰기 있으면 안됨
//package.json에   "type": "module",
//import { largeNumber } from './script2.js'

//방법2 : js확장자 mjs로
//import { largeNumber } from './script2.mjs'

//추천방식 > 이전방식, 왜냐하면 모든 사람이 최신 node를 가지고 있다고 확신할 수 없으므로

// const a = largeNumber;
// const b = 5;

// console.log(a+b);

const c = require('fs');
//package.json 가지고 있으면 안됨, package.js에 정의해줘야하는듯
console.log(c);

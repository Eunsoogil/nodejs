//advanced arrays

const array = [1,2,10,16];

const double = [];
// const newArray = array.forEach((num) => {
// 	double.push(num * 2);
// })
// short version
const newArray = array.forEach(num => double.push(num * 2))

console.log('foreach', double);

// map, filter, reduce

// const mapArray = array.map((num) => {
// 	return num * 2;
// 	// 반드시 return이 있어야 한다(제한조건)
// })
// short version, 한줄이므로 가능
const mapArray = array.map(num => num * 2);


// 위의 foreach문과 똑같은 일을 하지만 선언이 필요 없다
console.log('map', mapArray);
// 함수의 purity를 생각하면 아래 방식이 좋다
// (return이 존재하므로 side effect가 없다)
// 유지보수성에도 좋다 모르는 사람이 함수로 인해 side effect가 생겨 고생한다면?


//filter
const filterArray = array.filter(num =>  num > 5);
console.log('filter', filterArray);
//true만 반환


//reduce (filter, map 기능 모두 reduce로 할 수 있다)
const reduceArray = array.reduce((acc, num) => {
	return acc + num
}, 0)
console.log('reduce', reduceArray);
//뒤의 숫자는 시작점을 의미
//두 변수를 가지고 뭔가 한다음 return값을 뒤의 변수(앞의 두 변수가 아닌)에 저장한다
//위 함수의 경우 1+2를 한 후 0에 저장하고(3) 3+10을 해 저장(13) 13+16을해서 결과가 29가 된다
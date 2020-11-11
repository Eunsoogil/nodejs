const array = [1, [2,3], [4,5]];
console.log(array.flat()); // 배열안의 배열 없앰

const array1 = [1, [2,3], [4, [5,6]]];
console.log(array1.flat());
console.log(array1.flat(2)); // default가 1이다 2로 하면 2단 배열도 없앰
console.log(array1.flat(100)); // 큰수로 넣어도 동작;;

const array2 = ['bob', 'sally',,,,,,,,,,,,,,,,,,'cindy']
console.log(array2.flat()); // 비어 있는 깂도 제거

console.log(array2.flatMap(value => value + '1')); // 값제거후 .map과 기본적으로 같은 일함

userEmail1 = '                      asd@ddd.com';
userEmail2 = 'ddddd@djiow.com                     ';
console.log(userEmail1.trimStart());
console.log(userEmail2.trimEnd());
console.log(userEmail1.trim()); // trim으로 하지 왜... start end가 추가됨

userProfiles = [['commanderTom', 23], ['dereckZlander', 40], ['hansel', 12]]

console.log(Object.fromEntries(userProfiles)); // 배열을 object로!

const obj = Object.fromEntries(userProfiles);

console.log(Object.entries(obj)); // fromEntries와 반대, 배열을 object로

try{
	console.log(5/0); // Infinity 라고 나옴
	console.log(true + 'hi'); // 이것도 됨...
	console.log(bob + bibibi);
}catch(error){
	console.log("no" + error);
}


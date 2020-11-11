
//공백 넣기
console.log('asdasdasdasd'.padStart(20))
console.log('asdasdasdasd'.padEnd(20))


//끝에 ,
//끝에 , 넣으면 안되는데 syntax error가 많이 나는 부분이라 패치됨
const fun = (a,b,c,d,) => {
	console.log(a)
}

fun(1,2,3,4,)

// Object.values;
// Object.entries;
// Object.keys; array return

let obj = {
	username0 : 'santa',
	username1 : 'rudolf',
	username2 : 'mr.grinch'
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
	console.log(index);
})

Object.values(obj).forEach((value, index) => {
	console.log(value);
	console.log(index);
})

Object.entries(obj).forEach((value, index) => {
	console.log(value);
	console.log(index);
})

Object.values(obj).map(value => {
	return value[1] + value[0].replace('username', '');
})

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
	console.log(index);
})
//BigInt
//Nullish coalescing operation ??
//optional chaining operation ?.

// 새로운 자료형 bigint
console.log(typeof 1);
console.log(typeof 1n);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER+10); // 안됨
console.log(Number.MAX_SAFE_INTEGER-10);
let max = Number.MAX_SAFE_INTEGER; //???
console.log(Number.MAX_SAFE_INTEGER + 'n' +10n); // 숫자로 뒤에 n을 둘다 붙이면 가능


let will_pokemon = {
	pikachu : {
		species : 'mouse pokemon',
		height : 0.4,
		weight : 6,
		power: ''
	}
}

let andrei_pokemon = {
	raichu : {
		species : 'mouse pokemon',
		height : 0.8,
		weight : 30,
		gender : 0
	}
}

let weight = will_pokemon.pikachu.weight;
console.log(weight);

if(andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight){
	let weight2 = andrei_pokemon.pikachu.weight;
	console.log(weight2);
}else{
	let weight2 = undefined;
	console.log(weight2)
}

//optional chaining operation
//위의 if절을 대신 해준다!
let weight3 = andrei_pokemon?.pikachu?.weight;
console.log(weight3);
let power = andrei_pokemon?.raichu?.power || 'no power';
console.log(power);
let power2 = will_pokemon?.raichu?.power || 'no power';
console.log(power2);


//Nullish coalescing operation
//0이라는 값이 있는데 'no gender' return, 0은 false
//??은 ||와 다르게 null만 확인, false는 false로 return
//??은 앞이 null이면 뒤의 구문 실행, ||은 false, null모두 뒤의 구문 실행
let power3 = andrei_pokemon?.raichu?.gender || 'no gender';
console.log(power3);
let power4 = andrei_pokemon?.raichu?.gender ?? 'no gender';
console.log(power4);
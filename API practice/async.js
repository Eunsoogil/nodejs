fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json()).then(console.log);

async function fetchuser(){
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await resp.json();
	console.log(data);
}

// 둘 사이의 기능상 차이는 없음, 하지만 아래가 더 이해하기 쉬움

const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => 
	fetch(url).then(resp => resp.json())
)).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}).catch(() => console.log('error'))


const urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
	try {
		const [ users, posts, albums ] = await Promise.all(urls.map(url => 
			fetch(url).then(resp => resp.json())
		))
		console.log(users)
		console.log(posts)
		console.log(albums)		
	} catch (err){
		console.log('oops', err)
	}
}
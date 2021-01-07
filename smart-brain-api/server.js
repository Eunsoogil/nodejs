const express = require('express');

const app = express();

const database = {
	users: [
		{
			id: '123',
			name: 'John',
			email: 'john@gmail.com',
			password: '123',
			entries: 0,
			joined: new Date()
		},
		{
			id: '124',
			name: 'Sally',
			email: 'sally@gmail.com',
			password: '124',
			entries: 0,
			joined: new Date()
		}
	]
}


// bodyparser 모듈 express에 업데이트
// app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('this is working');
})

app.post('/signin', (req, res) => {
	if(req.body.email === database.users[0].email &&
		req.body.password === database.user[0].password){
		res.json('success');
	} else {
		res.status(400).json('error')
	}
})

app.listen(3000, () => {
	console.log('app is running');
})
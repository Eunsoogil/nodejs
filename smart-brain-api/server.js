//bcrypt-nodejs 사용
//cors 사용!!
const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex')

const db = knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '1234',
    database : 'smart-brain'
  }
});

/*
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});
*/

//console.log(db.select('*').from('users'));

db.select('*').from('users').then(data => {
	console.log(data);
});

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
			password: '123',
			entries: 0,
			joined: new Date()
		}
	],
	login: [
		{
			id: '987',
			hash: '',
			email: 'john@gmail.com'
		}
	]
}


// bodyparser 모듈 express에 업데이트
// app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	// res.send(database.users);
	res.send('work')
})

app.post('/signin', (req, res) => {
	// bcrypt.compare("bacon", hash, function(err, res) {

	// });
	// bcrypt.compare("veggies", hash, function(err, res) {

	// });
	if(req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password){
		res.json(database.users[0]);
	} else {
		res.status(400).json('error')
	}
})

app.post('/register', (req, res) => {
	const { email, name, password } = req.body;
	// bcrypt.hash("bacon", null, null, function(err, hash) {
    	
	// });
	// database.users.push({
	// 	id: '',
	// 	name: name,
	// 	email: email,
	// 	password: password,
	// 	entries: 0,
	// 	joined: new Date()
	// })

	db('users')
	.returning('*')
	.insert({
		email: email,
		name: name,
		joined: new Date()
	}).then(user => {
		res.json(user[0]);
	}).catch(err => {
		res.status(400).json('unable to register') //존재할경우 400날림
	})
	// .returning('*') return all columns
})

app.put('/profile/:id', (req, res) => { //:id 파라미터 가져옴
	const { id } = req.params;
	// database.users.forEach(user => {
	// 	if(user.id === id){
	// 		found = true;
	// 		user.entries++
	// 		return res.json(user);
	// 	}
	// })
	db.select('*').from('users').where({
		id: id
	}).then(user => {
		if(user.length){
			res.json(user[0])
		} else {
			res.status(400).json('not found')
		}
		
	}).catch(err => res.status(400).json('error getting user'))
	// if(!found){
	// 	res.status(400).json('not found');
	// }
})

app.put('/image', (req, res) => {
	const { id } = req.body;
	// let found = false;
	// database.users.forEach(user => {
	// 	if(user.id === id){
	// 		found = true;
	// 		user.entries++;
	// 		return res.json(user.entries);
	// 	}
	// })
	// if(!found){
	// 	res.status(400).json('not found');
	// }
	db('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => res.status(400).json('not found'))
})

app.listen(3001, () => {
	console.log('app is running');
})
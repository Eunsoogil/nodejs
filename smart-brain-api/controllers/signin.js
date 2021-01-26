const handleSignin = (req, res, db, bcrypt) => {
	// bcrypt.compare("bacon", hash, function(err, res) {

	// });
	// bcrypt.compare("veggies", hash, function(err, res) {

	// });
	// if(req.body.email === database.users[0].email &&
	// 	req.body.password === database.users[0].password){
	// 	res.json(database.users[0]);
	// } else {
	// 	res.status(400).json('error')
	// }
	db.select('email', 'hash').from('login')
	.where('email', '=', req.body.email)
	.then(data => {
		const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
		if(isValid){
			return db.select('*').from('users')
			.where('email', '=', req.body.email)
			.then(user => {
				res.json(user[0])
			}).catch(err => res.status(400).json('unable to get user'));
		} else {
			res.status(400).json('wrong credential');
		}
	}).catch(err => res.status(400).json('wrong credential'));
}

module.exports = {
	handleSignin: handleSignin
}
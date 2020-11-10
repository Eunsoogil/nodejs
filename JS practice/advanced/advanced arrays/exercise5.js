// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const firstresult = [];
const first = array.forEach(a => {
  a.username += '!';
  firstresult.push(a);
})
console.log(firstresult);


//Create an array using map that has all the usernames with a "? to each of the usernames
const second = array.map(a => {
  a.username += '?';
  return a;
})
console.log(second);

//Filter the array to only include users who are on team: red
const third = array.filter(a => a.team == 'red');
console.log(third);

//Find out the total score of all users using reduce
const fourth = array.reduce((start, sum) => {
  return start + sum.score
}, 0);
console.log(fourth);

// (1), what is the value of i? Index!!!!
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!"
  });
  return user;
})
console.log(answer);
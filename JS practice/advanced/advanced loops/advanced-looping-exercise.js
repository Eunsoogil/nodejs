// 솔루션 방식 참고할것 return을 쓰면 더 깔끔

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  if(typeof(arr[0]) !== 'number'){
    tmp = 0;
  }else{
    tmp = arr[0];
  }
  for(item of arr){
    if(tmp < item){
      tmp = item
    }
  }
  console.log(tmp);
}

function biggestNumberInArray2(arr) {
  if(typeof(arr[0]) !== 'number'){
    tmp = 0;
  }else{
    tmp = arr[0];
  }
  for (var i = 0; i < arr.length; i++) {
    if(tmp < arr[i]){
      tmp = arr[i]
    } 
  }
  console.log(tmp);
}

function biggestNumberInArray3(arr) {
  if(typeof(arr[0]) !== 'number'){
    tmp = 0;
  }else{
    tmp = arr[0];
  }
  arr.forEach(item => {
    if(tmp < item){
      tmp = item
    }
  })
  console.log(tmp);
}

biggestNumberInArray(array);
biggestNumberInArray(array2);
biggestNumberInArray(array3);
biggestNumberInArray2(array);
biggestNumberInArray2(array2);
biggestNumberInArray2(array3);
biggestNumberInArray3(array);
biggestNumberInArray3(array2);
biggestNumberInArray3(array3);

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  let cnt = 0;
  for(item in basket){
    if(item == lookingFor){
      console.log(`${lookingFor} exists!`);
      cnt++;
    }
  }
  if(cnt == 0){
    console.log(`No.. there is not ${lookingFor}`);
  }
}

checkBasket(amazonBasket, 'glasses');
checkBasket(amazonBasket, 'abc');
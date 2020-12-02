const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));

// Promise.all([promiseOne, promiseTwo]).then(data => console.log(data))
// .catch(e=>console.log('something failed', e));
// promise들 중 하나만이라도 reject되면 에러가 발생하면서 나머지 promise들도 실행이 안됨

//새로 추가된 allSettled
Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data))
.catch(e=>console.log('something failed', e));

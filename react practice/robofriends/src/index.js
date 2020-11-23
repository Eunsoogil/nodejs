import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Hello from './Hello';
import Card from './Card';
import CardList from './CardList'
import reportWebVitals from './reportWebVitals';
import 'tachyons' // 부트스트랩같은 css 라이브러리
import {robots} from './robots';

ReactDOM.render(
// <React.StrictMode>
// <App />
// </React.StrictMode>,
// <h1>Hello World</h1>,
// npx create-react-app my-app, 새로운 명령어
//<Hello greeting={'Hello' + 'React Ninja'}/>,
// greeting은 property, hello.js에서 선언한 property를 사용
//<div>
	// <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
	// <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
	// <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
//</div>
// <CardList robots = {robots}/>
<App />
,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

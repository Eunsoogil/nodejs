import React, { Component } from 'react';
import './Hello.css'

//function으로 사용하는 방법
const Hello = (props) => {
	return (
		<div className = 'f1 tc'>
			<h1>Hello World</h1>
			<p>{props.greeting}</p>
		</div>		
	)
}


// class로 사용하는 방법 
// class Hello extends Component {
// 	render(){
// 		return (
// 			// JSX react가 virutal DOM을 만들고 하위의 html태그를 건내줌, JSX는 html과 비슷해 보이지만 사실 JS확장 문법
// 			// <div class = 'f1 tc'> //동작은 하는데 에러메시지, JS가 class 명령어를 쓴다
// 			<div className = 'f1 tc'>
// 				<h1>Hello World</h1>
// 				{/*<p>Welcome to React</p>*/}
// 				<p>{this.props.greeting}</p>
// 				{/*property 선언*/}
// 			</div>
// 		);
// 	}
// }

export default Hello;
import React from 'react';

const Scroll = (props) => {

	//하위 element가 있는 경우 props 하위에는 항상 children이 있음
	//return props.children;

	return (
		// 이중 중괄호...
		<div style={{overflowY : 'scroll', border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;
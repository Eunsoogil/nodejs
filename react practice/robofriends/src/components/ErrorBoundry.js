import React, { Component } from 'react'; //{Component}는 안됨 띄어쓰기 해야됨...

class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError : false
		}
	}

	componentDidCatch(error, info){
		this.setState({hasError: true})
	}

	render() {
		if (this.state.hasError) {
			return <h1>That is not good</h1> //유저의 경우 이 메시지를 봄
		}

		return this.props.children
	}
}

export default ErrorBoundry;
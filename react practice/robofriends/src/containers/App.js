import React, {Component} from 'react'; //추가
//import logo from './logo.svg';
//import './App.css';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
//import {robots} from './robots';
import './App.css'
import Scroll from '../components/Scroll'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// } //함수로 하는 방법

// class App extends React.Component{ // 상속 추가
//   render() {
//     return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>      
//     )
//   } //클래스로 하는 방법
// }


//state, props를 변하게 하기 위해 사용, state는 object, 변하지 않는 일종의 상태를 설정
class App extends Component {
  constructor(){
    super();
    this.state = {
      //robots : robots,
      robots : [], // 실제로는 배열 형식으로 받음
      searchfield : ''
    }
    console.log(1);
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users").then(response => {
      return response.json();
    }).then(users => {
      this.setState({ robots : users})
    })
    console.log(2);
  }


  //onSearchChange(event) { //this가 동작하지 않음, SearchBox.js에서 찾으려고 하기 때문
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value}) // state 바꾸는 법, react 문법
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    if(this.state.robots.length === 0) {
      return <h1 className = 'tc f1'>Loading</h1>
    }

    //console.log(filteredRobots);
    console.log(3); //순서 1323, render가 또 시작되는 이유는 state가 변하기 때문

    return (
      <div className = 'tc'>
        <h1 className = 'f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }
}

export default App;

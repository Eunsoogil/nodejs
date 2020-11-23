import React, {Component} from 'react'; //추가
//import logo from './logo.svg';
//import './App.css';
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots';

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
      robots : robots,
      searchfield : ''
    }
  }

  //onSearchChange(event) { //this가 동작하지 않음, SearchBox.js에서 찾으려고 하기 때문
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value}) // state 바꾸는 법, react 문법
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    //console.log(filteredRobots);

    return (
      <div className = 'tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;

import React, { Component, useState, useEffect } from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'


function App() {

  //hook에서 state 선언하는 방법, 자바스크립트 문법과는 상관이 없음
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount]  = useState(0)

  //componentdidmount대체, rendering때마다 실행됨
  //두번째 파라미터가 매우 중요, 아예 없으면 계속 돈다, empty array 한번만
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users").then(response => {
      return response.json();
    }).then(users => {
      setRobots(users)
      console.log(count)
    })
  }, [count])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value) 
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })

  if(!robots.length) {
    return <h1 className = 'tc f1'>Loading</h1>
  }

  return (
    <div className = 'tc'>
      <h1 className = 'f1'>RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots}/>
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;

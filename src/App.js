import React, { Component } from 'react';
import './App.css';

import List from './components/List'

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      users: [],
      user: null,
      tasks: []
    }
  }
  render(){
    return (
      <div className="App">
        {/* <Header /> */}
        <main>
          {/* <NewTaskForm /> */}
          <List category={"To-Do"} />
          <List category={"In Progress"} />
          <List category={"Completed"} />
          
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

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
        <Header />
        <main>
          <NewTaskForm />
          <List category={"toDo"} />
          <List category={"inProgress"} />
          <List category={"completed"} />
          
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

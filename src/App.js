import React, { Component } from 'react';
import './App.css';

import List from './components/List';
import NewTaskForm from './components/NewTaskForm';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      users: [],
      user: null,
      tasks: []
    }
    
  }
  handleCreateTask = (newTask) => {
    this.state.tasks.push(newTask);
  }
  render(){
    const toDoList = [];
    const inProgressList = [];
    const completedList = [];
    this.state.tasks.map((task, id) => {
      switch(task.category) {
        case "To-Do":
          toDoList.push(task);
          break;
        case "In Progress":
          inProgressList.push(task);
          break;
        case "Completed":
          completedList.push(task);
          break;
        default:
          console.error("Task category not recognized.")
          console.error(task);
      }
      return 0;
    })

    return (
      <div className="App">
        <Header />
        <main>
          <NewTaskForm handleCreateTask={this.handleCreateTask}/>
          <List category={"To-Do"} tasks={toDoList}/>
          <List category={"In Progress"} tasks={inProgressList}/>
          <List category={"Completed"} tasks={completedList}/>
          
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

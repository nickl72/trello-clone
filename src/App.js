import React, { Component } from 'react';
import './App.css';

import List from './components/List'

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      users: [],
      user: null,
      tasks: [
        {
            title: "Take out trash",
            description: "Just make it disappear",
            dueDate: null,
            category: "To-Do"
        }, 
        {
            title: "Read a book",
            description: "LIterally any book",
            dueDate: null,
            category: "In Progress"
        }
    ]
    }
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
        {/* <Header /> */}
        <main>
          {/* <NewTaskForm /> */}
          <List category={"To-Do"} tasks={toDoList}/>
          <List category={"In Progress"} tasks={inProgressList}/>
          <List category={"Completed"} tasks={completedList}/>
          
        </main>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

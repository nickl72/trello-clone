import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

import List from './components/List';
import NewTaskForm from './components/NewTaskForm';
import Header from './components/Header';
import Footer from './components/Footer';

import data from './data';

const Main = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
`

class App extends Component{
  constructor(props){
    super(props);

    this.state ={
      users: data.users,
      user: null,
      tasks: data.tasks
    }
    
  }

  handleCreateTask = (e,newTask) => {
    e.preventDefault();
    const tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({tasks})
  }

  render(){
    console.log(this.state.tasks)
    const toDoList = [];
    const inProgressList = [];
    const completedList = [];

    this.state.tasks.map((task, id) => {
      console.log(task)
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

    console.log('todolist:')
    console.log(toDoList)
    return (
      <div className="App">
        <Header />
        <Main>
          <NewTaskForm handleCreateTask={this.handleCreateTask}/>
          <List category={"To-Do"} tasks={toDoList}/>
          <List category={"In Progress"} tasks={inProgressList}/>
          <List category={"Completed"} tasks={completedList}/>
          
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;

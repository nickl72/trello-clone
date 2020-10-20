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

    this.activeElement = null;
    
  }

  login = (user) => {
    this.setState({user})
  }

  handleCreateTask = (e,newTask) => {
    e.preventDefault();
    const tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({tasks})
  }

  onMouseEnter = (category) => {
    console.log(category);
    // this.activeElement = e.target.id;
  }

  onMouseLeave = () => {
    console.log(null);
  }

  handleDeleteTask = (e, deleteTask) => {
    e.preventDefault();
    const tasks = this.state.tasks;
    const index = tasks.findIndex(t => t.title === deleteTask.title); 
    tasks.splice(index,1)
    this.setState({
      tasks
    })
  }

  handleMoveTask = (e, task, cat) => {
    e.preventDefault();
    const tasks = this.state.tasks;
    const index = tasks.findIndex(t => t.title === task.title);
    tasks[index].category = cat;
    this.setState({
      tasks
    })
    
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
        <Header users={this.state.users} login={this.login}/>
        <Main>
          <NewTaskForm handleCreateTask={this.handleCreateTask}/>
          <List category={"To-Do"} tasks={toDoList} /*onMouseEnter={this.onMouseEnter}*/ handleDeleteTask={this.handleDeleteTask} handleMoveTask={this.handleMoveTask} handleSelectList={this.handleSelectList}/>
          <List category={"In Progress"} tasks={inProgressList} /*onMouseEnter={this.onMouseEnter}*/ handleDeleteTask={this.handleDeleteTask} handleMoveTask={this.handleMoveTask} handleSelectList={this.handleSelectList}/>
          <List category={"Completed"} tasks={completedList} /*onMouseEnter={this.onMouseEnter}*/ handleDeleteTask={this.handleDeleteTask} handleMoveTask={this.handleMoveTask} handleSelectList={this.handleSelectList}/>
          
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;

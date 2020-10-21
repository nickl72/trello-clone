import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'

import List from './components/List';
import NewTaskForm from './components/NewTaskForm';
import Header from './components/Header';
import Footer from './components/Footer';

import data from './data';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
      tasks: data.tasks,
      user: null,
      loginClick: false,
      notTrello: false,
    }

    this.activeElement = null;
    
  }

  login = (user, newUser) => {
    if (newUser) {
      const users = this.state.users;
      users.push(user)
      this.setState({
        users,
        user        
      })

    } else {
      this.setState({user})
    }
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

  handleEditTask = (e, taskId, edits) => {
    e.preventDefault();
    console.log(edits);
  }

  handleDragTask = (taskTitle,categoryName) => {
    console.log('Task: '+taskTitle);
    console.log('Category: '+categoryName);
    let allTasks = this.state.tasks;
    const foundTask = allTasks.filter(task => task.title === taskTitle)[0];
    const index = allTasks.indexOf(foundTask);

    allTasks[index].category = categoryName;

    this.setState({
      tasks: allTasks
    })
  }

  openLogin = () => {
    this.setState({
      loginClick: true
    })
  }
  updateLoginClick = (bool) => {
    this.setState({
      loginClick: bool
    })
  }

  

  render(){
    const toDoList = [];
    const inProgressList = [];
    const completedList = [];



    if(this.state.user) {
      this.state.tasks.map((task, id) => {
        if(task.user === this.state.user.username){
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
        }
        return 0;
      })
    } else {
      this.state.tasks.map((task, id) => {
        if(task.private === false){
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
        }
        return 0;
      })
    }


    return (
      <DndProvider backend={HTML5Backend}>
        <div className={this.state.notTrello ? "App invert" : "App"}>
          <Header users={this.state.users} login={this.login} loginClick={this.state.loginClick} updateLoginClick={this.updateLoginClick} notTrello={() => this.setState({notTrello: !this.state.notTrello})}/>
          <Main>
            <NewTaskForm handleCreateTask={this.handleCreateTask} user={this.state.user} openLogin={this.openLogin} />
            <List 
              user={this.state.user}
              category={"To-Do"} 
              tasks={toDoList}
              handleDeleteTask={this.handleDeleteTask} 
              handleMoveTask={this.handleMoveTask} 
              handleSelectList={this.handleSelectList}
              handleDragTask={this.handleDragTask}
              handleEditTask={this.handleEditTask}
            />
            <List 
              user={this.state.user}
              category={"In Progress"} 
              tasks={inProgressList}
              handleDeleteTask={this.handleDeleteTask} 
              handleMoveTask={this.handleMoveTask} 
              handleSelectList={this.handleSelectList}
              handleDragTask={this.handleDragTask}
              handleEditTask={this.handleEditTask}
            />
            <List 
              user={this.state.user}
              category={"Completed"} 
              tasks={completedList}  
              handleDeleteTask={this.handleDeleteTask} 
              handleMoveTask={this.handleMoveTask} 
              handleSelectList={this.handleSelectList}
              handleDragTask={this.handleDragTask}
              handleEditTask={this.handleEditTask}
            />
            
          </Main>
          <Footer notTrello={() => this.setState({notTrello: !this.state.notTrello})}/>
        </div>
      </DndProvider>
    );
  }
}

export default App;

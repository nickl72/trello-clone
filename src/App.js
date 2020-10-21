import React, { Component, useState, useCallback, useEffect } from 'react';
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

function App(props) {

  const [users,setUsers] = useState(data.users)
  const [tasks,setTasks] = useState(data.tasks)
  const [user,setUser] = useState(null)
  const [appData,setAppData] = useState({
    loginClick: false,
    notTrello: false,
    activeElement: null
  })

  useEffect(() => {
    console.log('I have rendered')
  })

  const login = (user, newUser) => {
    if (newUser) {
      users.push(user)
      setUsers(users)
      setUser(user)
    } else {
      setUser()
    }
  }

  const handleCreateTask = (e,newTask) => {
    console.log('im making a new task')
    e.preventDefault();
    tasks.push(newTask);
    setTasks([...tasks])
  }

  const handleDeleteTask = (e, deleteTask) => {
    e.preventDefault();
    const index = tasks.findIndex(t => t.title === deleteTask.title); 
    tasks.splice(index,1)
    setTasks([...tasks])
  }

  const handleMoveTask = (e, task, cat) => {
    e.preventDefault();
    const index = tasks.findIndex(t => t.title === task.title);
    tasks[index].category = cat;
    setTasks([...tasks]);
  }

  const handleDragTask = useCallback((taskTitle,categoryName) => {
    const foundTask = tasks.filter(task => task.title === taskTitle)[0];
    const index = tasks.indexOf(foundTask);

    tasks[index].category = categoryName;

    setTasks([...tasks]);
  },[tasks])

  const forceRender = () => {
    setTasks([...tasks]);
  }

  const openLogin = () => {
    setAppData({...appData,loginClick: true})
  }

  const updateLoginClick = (bool) => {
    setAppData({...appData,loginClick: bool})
  }
  
  const toDoList = [];
  const inProgressList = [];
  const completedList = [];

  const filterTasks = (category) => {
    console.log('User: '+user);
    if (user) {
      const filtered = tasks.filter(task => task.category === category && task.user === user.username)
      console.log(filtered);
      return filtered;
    } else {
      return tasks.filter(task => task.category === category && task.private === false)
    }
  }

  // if(user) {
  //   tasks.map((task, id) => {
  //     if(task.user === user.username){
  //       switch(task.category) {
  //         case "To-Do":
  //           toDoList.push(task);
  //           break;
  //         case "In Progress":
  //           inProgressList.push(task);
  //           break;
  //         case "Completed":
  //           completedList.push(task);
  //           break;
  //         default:
  //           console.error("Task category not recognized.")
  //           console.error(task);
  //       }
  //     }
  //     return 0;
  //   })
  // } else {
  //   tasks.map((task, id) => {
  //     if(task.private === false){
  //       switch(task.category) {
  //         case "To-Do":
  //           toDoList.push(task);
  //           break;
  //         case "In Progress":
  //           inProgressList.push(task);
  //           break;
  //         case "Completed":
  //           completedList.push(task);
  //           break;
  //         default:
  //           console.error("Task category not recognized.")
  //           console.error(task);
  //       }
  //     }
  //     return 0;
  //   })
  // }


  return (
    <DndProvider backend={HTML5Backend}>
      <div className={appData.notTrello ? "App invert" : "App"}>
        <Header 
          users={users} 
          login={login} 
          loginClick={appData.loginClick} 
          updateLoginClick={updateLoginClick} 
          notTrello={() => setAppData({...appData, notTrello: !appData.notTrello})}
        />

        <Main>
          <NewTaskForm 
            handleCreateTask={handleCreateTask} 
            user={user} 
            openLogin={openLogin} 
          />
          <List 
            user={user}
            category={"To-Do"} 
            tasks={()=>filterTasks('To-Do')}
            handleDeleteTask={handleDeleteTask} 
            handleMoveTask={handleMoveTask} 
            handleDragTask={handleDragTask}
            forceRender={forceRender}
          />
          <List 
            user={user}
            category={"In Progress"} 
            tasks={()=>filterTasks('In Progress')}
            handleDeleteTask={handleDeleteTask} 
            handleMoveTask={handleMoveTask} 
            handleDragTask={handleDragTask}
            forceRender={forceRender}
          />
          <List 
            user={user}
            category={"Completed"} 
            tasks={()=>filterTasks('Completed')} 
            handleDeleteTask={handleDeleteTask} 
            handleMoveTask={handleMoveTask} 
            handleDragTask={handleDragTask}
            forceRender={forceRender}
          />
          
        </Main>
        <Footer 
          notTrello={() => setAppData({...appData, notTrello: !appData.notTrello})}/>
      </div>
    </DndProvider>
  );
}

export default App;

import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import Task from './Task'

import { useDrop } from 'react-dnd';


function List(props) {
    const [listData, setListData] = useState({
        category: props.category,
        droppedTask: null
    })

    const [tasks,setTasks] = useState(props.tasks);

    const FormHeader = styled.h2`
        text-align: center;
        margin: 10px;
    `

    let categoryStyles = '';
    switch(listData.category) {
        case "To-Do":
            categoryStyles = `
                background: #EFB3AB;
                border: solid #EB5A46;

            `
            
            break;
        case "In Progress":
            categoryStyles = `
                background: #F5EA92;
                border: solid #F2D600;
            `

            break;
        case "Completed":
            categoryStyles = `
                background: #90ECC1;
                border: solid #4CAF54;
            `

            break;
        default:
            console.error("Task category not recognized.")
      }
    
    
    
    const StyledList = styled.div`
        border-radius: 10px;
        margin: 15px;
        width: 20vw;
        padding-bottom: 15px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        ${categoryStyles}
    `

    function trackDraggedTask(taskTitle) {
        console.log(taskTitle)
        setListData({
            category: listData.category,
            tasks: listData.tasks,
            droppedTask: taskTitle
        })
        return null;
    }

    const moveTask = useCallback((draggedTaskIndex,hoveredTaskIndex) => {
        console.log('have we made it here?')
        console.log(tasks)
        tasks.splice(hoveredTaskIndex,0,tasks.splice(draggedTaskIndex,1)[0])
        setTasks(tasks);

        console.log(tasks)
    },[tasks])

    const [{isOver},drop] = useDrop({
        accept: 'task',
        hover: (item,monitor) => props.handleDragTask(item.title,listData.category),
        drop: () => props.forceRender(),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

    const listItems = [];

    if(tasks) {
        tasks.map((task, index) => (
            listItems.push(
                <Task 
                    user={props.user}
                    task={task} 
                    index={index} 
                    key={index}
                    handleDeleteTask={props.handleDeleteTask} 
                    handleMoveTask={props.handleMoveTask} 
                    handleSelectList={props.handleSelectList} 
                    catSelected={props.catSelected}
                    trackDraggedTask={()=>trackDraggedTask(task.title)}
                    moveTask={moveTask}
                />
            )
        ))
    }

    return(
        <div 
            ref={drop} 
            id={props.category}
        >
            <StyledList>
                <FormHeader>{props.category}</FormHeader>
                {listItems}
            </StyledList>
        </div>
    )
}


export default List
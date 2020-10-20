import React, { useState } from 'react';
import styled from 'styled-components';

import Task from './Task'

import { useDrop } from 'react-dnd';


function List(props) {
    const [listData, setListData] = useState({
        category: props.category,
        tasks: props,
        droppedTask: null
    })

    const FormHeader = styled.h2`
        text-align: center;
        margin: 10px;
    `

    let categoryStyles = '';
    switch(listData.category) {
        case "To-Do":
            categoryStyles = `
                background: coral;
            
            `
            
            break;
        case "In Progress":
            categoryStyles = `
                background: #51E898;
                border: solid #4CAF54;

            `

            break;
        case "Completed":
            categoryStyles = 'background: gold;'

            break;
        default:
            console.error("Task category not recognized.")
      }
    
    
    
    const StyledList = styled.div`
        border-radius: 10px;
        margin: 15px;
        height: 100%;
        min-height: 50vh;
        width: 20vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        ${categoryStyles}
    `
    
    const listItems = [];

    if(props.tasks) {
        props.tasks.map((task, id) => (
            listItems.push(
                <Task 
                    user={props.user}
                    task={task} 
                    key={id} 
                    handleDeleteTask={props.handleDeleteTask} 
                    handleMoveTask={props.handleMoveTask} 
                    handleSelectList={props.handleSelectList} 
                    catSelected={props.catSelected}
                    trackDraggedTask={()=>trackDraggedTask(task.title)}
                />
            )
        ))
    }

    function trackDraggedTask(taskTitle) {
        console.log(taskTitle)
        setListData({
            category: listData.category,
            tasks: listData.tasks,
            droppedTask: taskTitle
        })
        return null;
    }

    const [{isOver},drop] = useDrop({
        accept: 'task',
        drop: (innerProps) => props.handleDragTask(innerProps.title,listData.category),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })

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
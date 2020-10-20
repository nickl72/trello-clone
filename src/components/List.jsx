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

    const ListTitle = styled.h2`
        text-align: center;
    `

    let categoryStyles = '';
    switch(listData.category) {
        case "To-Do":
            categoryStyles = 'background: coral;'
            
            break;
        case "In Progress":
            categoryStyles = 'background: lightgreen;'

            break;
        case "Completed":
            categoryStyles = 'background: gold;'

            break;
        default:
            console.error("Task category not recognized.")
      }
    
    
    
    const StyledList = styled.div`
        border: 5px solid rgba(0,0,0,0.3);
        border-radius: 15px;
        margin: 5px;
        height: auto;
        width: 20vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        padding: 20px;
        ${categoryStyles}
    `
    
    const listItems = [];

    if(props.tasks) {
        props.tasks.map((task, id) => (
            listItems.push(
                <Task 
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
            <ListTitle>{props.category}</ListTitle>
            <StyledList>
                {listItems}
            </StyledList>
        </div>
    )
}


export default List
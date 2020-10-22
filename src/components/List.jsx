import React, { useState } from 'react';
import styled from 'styled-components';

import Task from './Task'

import { useDrop } from 'react-dnd';

const FormHeader = styled.h2`
        text-align: center;
        margin: 10px;
    `

const StyledList = styled.div`
    border-radius: 10px;
    margin: 0;
    padding-bottom: 15px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
`

const ConditionalStlye = styled.div`
    margin: 15px;
    padding: 0;
    width: 20%;
    .To-Do {
        background: #EFB3AB;
        border: solid #EB5A46;  
    }

    .In-Progress {
        background: #F5EA92;
        border: solid #F2D600;
    }

    .Complete {
        background: #90ECC1;
        border: solid #4CAF54;
    }
`
function List(props) {
    const [listData, setListData] = useState({
        category: props.category,
        tasks: props,
        droppedTask: null
    })

    let className = '';
    switch(listData.category) {
        case "To-Do":
            className = "To-Do"
            break;
        case "In Progress":
            className = "In-Progress"
            break;
        case "Completed":
            className = "Complete"
            break;
        default:
            console.error("Task category not recognized.")
        }

    
    
    
    
    
    
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
                    handleEditTask={props.handleEditTask}
                />
            )
        ))
    }

    function trackDraggedTask(taskTitle) {
        setListData({
            category: listData.category,
            tasks: listData.tasks,
            droppedTask: taskTitle
        })
        return null;
    }

    const drop = useDrop({
        accept: 'task',
        drop: (innerProps) => props.handleDragTask(innerProps.title,listData.category),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })[1]

    return(
        <ConditionalStlye 
            ref={drop} 
            id={props.category}
        >
            <StyledList className={className}>
                <FormHeader>{props.category}</FormHeader>
                {listItems}
            </StyledList>
        </ConditionalStlye>
    )
}


export default List
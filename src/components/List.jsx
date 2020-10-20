import React, { useState } from 'react';
import styled from 'styled-components';

import Task from './Task'


function List(props) {
    const [listData, setlistData] = useState({
        category: props.category,
        tasks: props
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
        min-height: 86vh;
        width: 20vw;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        ${categoryStyles}
    `
    
    const listItems = [];

    if(props.tasks) {
        props.tasks.map((task, id) => (
            listItems.push(<Task task={task} key={id} handleDeleteTask={props.handleDeleteTask} handleMoveTask={props.handleMoveTask} handleSelectList={props.handleSelectList} catSelected={props.catSelected}/>)
        ))
    }

    return(
        <StyledList>
            <FormHeader>{props.category}</FormHeader>
            {listItems}
        </StyledList>
    )
}


export default List
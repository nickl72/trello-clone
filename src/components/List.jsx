import React, { useState } from 'react';
import styled from 'styled-components';

import Task from './Task'


function List(props) {
    const [listData, setlistData] = useState({
        category: props.category,
        tasks: props
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
        width: 250px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        padding: 20px;
        ${categoryStyles}
    `
    
    const listItems = [];

    if(props.tasks) {
        props.tasks.map((task, id) => (
            listItems.push(<Task task={task} key={id} handleDeleteTask={props.handleDeleteTask} handleMoveTask={props.handleMoveTask} handleSelectList={props.handleSelectList} catSelected={props.catSelected}/>)
        ))
    }

    return(
        <div id={props.category} /*onMouseEnter={() => {props.onMouseEnter(props.category)}}*/>
            <ListTitle>{props.category}</ListTitle>
            <StyledList>
                {listItems}
            </StyledList>
        </div>
    )
}


export default List
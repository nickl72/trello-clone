import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Task from './Task'


function List(props) {
    const [listData, setlistData] = useState({
        category: props.category,
        tasks: props
    })

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
        border: solid black 3px;
        margin: 10px;
        height: 70vh;
        width: 100%;
        overflow: scroll;
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
        <StyledList>
            <div id={props.category} /*onMouseEnter={() => {props.onMouseEnter(props.category)}}*/>
                <h2>{props.category}</h2>
                {listItems}
            </div>
        </StyledList>
    )
}


export default List
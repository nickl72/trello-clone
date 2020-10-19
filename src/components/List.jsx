import React from 'react';
import styled from 'styled-components';

import Task from './Task'

const StyledList = styled.div`
    border: solid black 3px;
    margin: 10px;
    height: 70vh;
    width: 100%;
    overflow: auto;
`


function List(props) {
    const listItems = [];

    if(this.state.tasks) {
        console.log(this.state.task);
        this.state.tasks.map((task, id) => (
            listItems.push(<Task task={task} key={id} />)
        ))
    }

    return(
        <StyledList>
            <h2>{props.category}</h2>
            {listItems}
        </StyledList>
    )
}


export default List
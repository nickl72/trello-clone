import React from 'react';

import Task from './Task'
import styled from 'styled-components';

const StyledList = styled.div`
    border: solid black 3px;
    margin: 10px;
    height: 70vh;
    width: 100%;
    overflow: hidden;
    padding: 20px;
`

function List(props) {

    const listItems = [];

    if(props.tasks) {
        props.tasks.map((task, id) => (
            listItems.push(<Task task={task} key={id} />)
        ))
    }

    return(
        <StyledList>
            <div ref={el => {
                if (!el) return;
                console.log(el.getBoundingClientRect().width); // prints 200px
            }}>

            <h2>{props.category}</h2>
            {listItems}
            </div>
        </StyledList>
    )
}


export default List
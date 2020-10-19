import React from 'react';
import Draggable from 'react-draggable';

import Task from './Task'

function List(props) {

    const listItems = [];

    if(props.tasks) {
        props.tasks.map((task, id) => (
            listItems.push(<Task task={task} key={id} />)
        ))
    }

    return(
        <div id={props.category} onMouseEnter={() => {props.onMouseEnter(props.category)}}>
            <h2>{props.category}</h2>
            {listItems}
        </div>
    )
}


export default List
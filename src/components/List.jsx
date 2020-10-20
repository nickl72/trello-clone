import React from 'react';
import Draggable from 'react-draggable';

import Task from './Task'

function List(props) {

    const listItems = [];

    if(props.tasks) {
        props.tasks.map((task, id) => (
            listItems.push(<Task task={task} key={id} handleDeleteTask={props.handleDeleteTask} handleMoveTask={props.handleMoveTask} handleSelectList={props.handleSelectList} catSelected={props.catSelected}/>)
        ))
    }

    return(
        <div id={props.category} /*onMouseEnter={() => {props.onMouseEnter(props.category)}}*/>
            <h2>{props.category}</h2>
            {listItems}
        </div>
    )
}


export default List
import React from 'react';

import Task from './Task'

function List(props) {

    const listItems = [];

    if(props.tasks) {
        props.tasks.map((task, id) => (
            listItems.push(<Task task={task} key={id} />)
        ))
    }

    return(
        <div>
            <h2>{props.category}</h2>
            {listItems}
        </div>
    )
}


export default List
import React, { Component } from 'react';

import Task from './Task'

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: props.category,
            tasks: props.tasks
        }
    }



    render() {
        const listItems = [];

        if(this.state.tasks) {
            this.state.tasks.map((task, id) => (
                listItems.push(<Task task={task} key={id} />)
            ))
        }

        return(
            <div>
                <h2>{this.state.category}</h2>
            </div>
        )
    }

}


export default List
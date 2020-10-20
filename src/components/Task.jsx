import React, { Component } from "react";
import styled from "styled-components";
import Draggable from 'react-draggable';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    width: 85%;
    border: solid black 1px;
    min-height: 50px;

    img{
        height: 15px;
    }

    .dueDate {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95%;
    }
`


class Task extends Component{
    constructor(props) {
        super(props)

        this.state = {
          category: this.props.task.category
        }
    }
    whenDue = (dueDate) => {
        let today = new Date();
        let [month, day, year] = [today.getMonth() + 1, today.getDate(), today.getFullYear()];
        
        if(day.length < 2) {
            day = `0${day}`
        }
        today = `${year}-${month}-${day}`
        dueDate = Date.parse(dueDate);
        today = Date.parse(today)

        if (dueDate > today) {
            return <p>On Track</p>
        } else if(dueDate === today) {
            return <p>Due Today</p>
        } else if(dueDate < today) {
            return <p>Past Due</p>
        }
    }
  
    handleSelectList = (e) => {
        this.setState({
          [e.target.name] : e.target.value
      })
    }

    render() {
        
        return(
            <Draggable onDrag = {((e,data) => {
                // console.log(e);
                // console.log(data);
            })}>
                <Card>
                    <h1>{this.props.task.title}</h1>
                    <p>{this.props.task.description}</p>
                    <div className="dueDate">
                        <img src='https://www.flaticon.com/svg/static/icons/svg/37/37663.svg' alt="clock"/>
                        <p>{this.props.task.dueDate}</p>
                        
                        {this.whenDue(this.props.task.dueDate)}
                    </div>
                    <div>
                        <button onClick = {(e, task) => this.props.handleDeleteTask(e, this.props.task)}>Delete Task</button>
                        <form onChange={this.handleSelectList} onSubmit={(e, task) => this.props.handleMoveTask(e, this.props.task, this.state.category)} >
                            <select name="category" defaultValue = {this.state.category}>
                                <option value="To-Do">To-Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                            <input type = "submit" value="Move Task"/>
                        </form>
                    </div>
                </Card>
            </Draggable>
        )
    }
}

export default Task;
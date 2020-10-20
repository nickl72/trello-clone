import React, { useState } from "react";
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


function Task(props) {
    const [taskData, setTaskData] = useState({
        category: props.task.category
    })
    
    const whenDue = (dueDate) => {
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
  
        
    return(
        <Draggable onDrag = {((e,data) => {
            // console.log(e);
            // console.log(data);
        })}>
            <Card>
                <h1>{props.task.title}</h1>
                <p>{props.task.description}</p>
                <div className="dueDate">
                    <img src='https://www.flaticon.com/svg/static/icons/svg/37/37663.svg' alt="clock"/>
                    <p>{props.task.dueDate}</p>
                    
                    {whenDue(props.task.dueDate)}
                </div>
                <div>
                    <button onClick = {(e, task) => props.handleDeleteTask(e, props.task)}>Delete Task</button>
                    <form onChange={(e)=> {setTaskData({category:e.target.value})}} onSubmit={(e, task) => props.handleMoveTask(e, props.task, taskData.category)} >
                        <select name="category" defaultValue = {taskData.category}>
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

export default Task;
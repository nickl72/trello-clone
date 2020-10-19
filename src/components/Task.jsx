import React from "react";
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
`

function Task(props) {
    // whenDue = (dueDate) => {
    //     let today = new Date();
    //     let [month, day, year] = [today.getMonth() + 1, today.getDate(), today.getFullYear()];
        
    //     if(day.length < 2) {
    //         day = `0${day}`
    //     }
    //     today = `${year}-${month}-${day}`
    //     dueDate = Date.parse(dueDate);
    //     today = Date.parse(today)

    //     if (dueDate > today) {
    //         return <p>On Track</p>
    //     } else if(dueDate === today) {
    //         return <p>Due Today</p>
    //     } else if(dueDate < today) {
    //         return <p>Past Due</p>
    //     }
    // }
    
    return(
        <Draggable onDrag = {((e,data) => {
            console.log(e);
            console.log(data);
        })}>
            <Card>
                <h1>{props.task.title}</h1>
                <p>{props.task.description}</p>
                <div>
                    <img src='https://www.flaticon.com/svg/static/icons/svg/37/37663.svg' alt="clock"/>
                    <p>{props.task.dueDate}</p>
                    
                    {/* {this.whenDue(props.dueDate)} */}

                </div>
            </Card>
        </Draggable>
    )
}

export default Task;
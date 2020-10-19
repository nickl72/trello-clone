import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 85%;
    border: solid black 1px;
    min-height: 50px;

    img{
        height: 15px;
    }
`

class Task extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: props.title,
            description: props.description,
            dueDate: "2020-10-19"
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
    

    render() {
        console.log(this.state)
        return(
            <Card>
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
                <div>
                    <img src='https://www.flaticon.com/svg/static/icons/svg/37/37663.svg' alt="clock"/>
                    <p>{this.state.dueDate}</p>{this.whenDue(this.state.dueDate)}

                </div>
            </Card>
        )}
}

export default Task;
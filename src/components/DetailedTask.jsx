import React, {useState, useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const slideAnimation = keyframes`${zoomIn}`;

const Div = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: rgba(0,0,0,0.4);
    z-index: 1;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px black;
    color: black;
    text-align: center;
    animation: ${slideAnimation} .5s;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    width: 85%;
    border: solid black 1px;
    min-height: 50px;
    margin: 5px auto;
    box-shadow: 0px 0px 8px gray;
    border-radius: 5px;
    background: white;
    


    h3 {
        width: 100%;
        margin: 0;
        padding: 7px 0 12px 0;
        text-align: center;
        font-size: 18px;
        border-bottom: solid gray 1px;
        border-top: solid 12px lightgray;
        background-color: lightgray;
        border-radius: 5px 5px 0 0;
        
        
    }

    img{
        height: 15px;
    }
    .description {
        padding: 5px;
        margin: 5px 5px 15px 5px;
        border: solid gray 1px;
        border-radius: 2px;
        box-shadow: inset 0px 0px 2px gray;
    }
    .dueDate {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        font-size: 12px;
        background: rgba(211, 211, 211, .6);
        margin: 0;
        padding: 0;
        height: 30px;
        border-top: solid 1px lightgray;
        border-bottom: solid 1px lightgray;
        
    }

    .onTrack {
        color: green;
    }
    .today {
        color: gold;
        font-weight: bold;
    }
    .late {
        color: maroon;
        font-weight: bold;
    }

    .editActions {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin: 8px 0;
    }
        
`

const Button = styled.button`
    display:flex;
    align-items: center;
    border: none;
    border-radius: 4px;
    padding: 5px;
    color: white;
    font-weight: bold;
    background-color: #e74c3c;
    box-shadow: 0px 5px 0px 0px #ce3323;
    &:hover {
        background-color: #ff6656
    }
    
`

const MoveButton = styled(Button)`
    background-color: #e99e40;
    box-shadow: 0px 5px 0px 0px #bb8129;
    &:hover {
        background-color: #fdc788;
    }
`

function DetailedTask(props) {
    const [taskData, setTaskData] = useState({
        category: props.task.category,
        newCategory: ""
    })

    const [detailedTask, setDetailedTask] = useState({
        show: false
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
            return <p className="onTrack">On Track</p>
        } else if(dueDate === today) {
            return <p className="today">Due Today</p>
        } else if(dueDate < today) {
            return <p className="late">Past Due</p>
        }
    }
    
    const defaultCategory = (category) => {
        let displayCategory;
        switch(category) {
            case "To-Do":
                return displayCategory="In Progress";
            case "In Progress":
                return displayCategory="Completed";
            case "Completed":
                return displayCategory="In Progress";
        }
        return displayCategory;
    }

    useEffect(() => {
        setTaskData({
            newCategory: defaultCategory(taskData.category),
            category: props.task.category
        })
    },[])
        
    const openCard = () => {
        setDetailedTask({
            show: true
        })
    }

    const closeCard = () => {
        setDetailedTask({
            show: false
        })
    }

    return(
        <Div>
            <Form>
        <Card>
            <h3 onClick={() => {openCard(props.task)}}>{props.task.title}</h3>
            <button onClick={props.closeCard}>x</button>
            <p className="description">{props.task.description}</p>
            <div className="dueDate">
                <img src='https://www.flaticon.com/svg/static/icons/svg/37/37663.svg' alt="clock"/>
                <p>{props.task.dueDate}</p>

                {whenDue(props.task.dueDate)}
            </div>
            {props.user ?
            <div className="editActions">
                <Button onClick = {(e, task) => props.handleDeleteTask(e, props.task)} className="deleteButton"/*data-toggle = "modal" data-target="#confirmDelete"*/>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    Delete Task
                </Button>
                <form onChange={(e)=> {setTaskData({newCategory:e.target.value})}} onSubmit={(e, task) => props.handleMoveTask(e, props.task, taskData.newCategory)} >
                    <select name="category" defaultValue = {defaultCategory(taskData.category)}>
                        <option value="To-Do">To-Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select> 
                    <MoveButton type = "submit" className="moveButton">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrows-move" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                        </svg>
                        Move Task
                    </MoveButton>
                </form>
              </div>
              :  null }
                {detailedTask.show ? <DetailedTask task={props.task} closeCard={closeCard}/> : null}
            </Card>
            </Form>
            </Div>
    )


}

export default DetailedTask;
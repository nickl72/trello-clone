import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';
import Updated from './Updated';
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

const DetailedCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    width: 400px;
    height: 350px;
    border: solid black 1px;
    min-height: 50px;
    margin: 5px auto;
    box-shadow: 0px 0px 8px gray;
    border-radius: 5px;
    background: white;
    position: relative;
    animation: ${slideAnimation} .5s;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px black;
    

    .close{
        position: absolute;
        top: 0;
        right: 0;
    }
    .user{
        position: absolute;
        top: 0;
        left: 0;
        margin: 0 10px;
        font-size: small;
    }
    .detailedTitle{
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
    .editTaskForm{
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
    .detailedDescription {
        padding: 10px;
        margin: 15px;
        border: solid gray 1px;
        border-radius: 2px;
        box-shadow: inset 0px 0px 2px gray;
        width: 80%;
    }
    .detailedDueDate {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        font-size: 12px;
        background: rgba(211, 211, 211, .4);
        margin: 15px 0;
        padding: 0;
        height: 30px;
        border-top: solid 1px lightgray;
        border-bottom: solid 1px lightgray;
        
    }

    .onTrack {
        color: green;
    }
    .today {
        color: #BD903C;
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
        background-color: #ff6656;
    }
    
`

const MoveButton = styled(Button)`
    background-color: #e99e40;
    box-shadow: 0px 5px 0px 0px #bb8129;
    &:hover {
        background-color: #fdc788;
    }
    margin-top: 5px;
`

const EditButton = styled(Button)`
    background-color: #e6c60d;
    box-shadow: 0px 5px 0px 0px #cca42b;
    &:hover {
        background-color: #f3e260
    }
`

function DetailedTask(props) {

    const [updated, setUpdated] = useState({
        show: false
    })

    const [detailedTask, setDetailedTask] = useState({
        description: props.task.description,
        dueDate: props.task.dueDate,
        private: props.task.private
    })

    const onChange = (e) => {
        if(props.user){
            if(e.target.name === "description"){
                setDetailedTask({
                    description: e.target.value,
                    dueDate: detailedTask.dueDate,
                    private: detailedTask.private
                })
            }
            else if(e.target.name === "dueDate"){
                setDetailedTask({
                    description: detailedTask.description,
                    dueDate: e.target.value,
                    private: detailedTask.private
                })
            }
        }
    }


    const handleUpdate = (e) => {
        e.preventDefault();
        setUpdated({
            show: true
        })
        setTimeout(function(){
            setUpdated({show: false})}, 2000);
    }

    const localCloseCard = (e) => {
        if (e.currentTarget === e.target) {
            props.closeCard();
        }
    }

    return(
        <Div onClick={(e) => localCloseCard(e)}>
            <DetailedCard>
                <h3 className="detailedTitle">{props.task.title}</h3>
                <button className="close" onClick={props.closeCard}>x</button>
                <p className="user">Created by: {props.task.user}</p>
                <form className ="editTaskForm" onSubmit={(e) => {props.handleEditTask(e,props.task.taskId, detailedTask); handleUpdate(e)}} >
                    <textarea className="detailedDescription" rows= "5" cols="50" name="description" 
                        value={detailedTask.description} onChange={onChange}></textarea>
                    <div className="privateCheckbox" >
                        <label htmlFor="private">Private Task:</label>
                        <input type='checkbox' name='private' onChange={() => {props.user && setDetailedTask({description: detailedTask.description, dueDate: detailedTask.dueDate, private: !detailedTask.private})}}
                            checked={detailedTask.private}
                        ></input>
                    </div>
                    <div className="detailedDueDate">
                        <img src='https://www.flaticon.com/svg/static/icons/svg/37/37663.svg' alt="clock"/>
                        <input type="date" name="dueDate" value={detailedTask.dueDate} onChange={onChange}></input>
                        {props.whenDue(props.task.dueDate)}
                    </div>
                    {props.user ?
                        <EditButton><img src='https://www.flaticon.com/svg/static/icons/svg/860/860814.svg' alt="pencil/paper" />
                        Edit Task</EditButton>
                    : null }
                </form>
                {props.user ?
                    <div className="editActions">
                <Button onClick={props.deleteTaskClick}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    Delete Task
                </Button>
                    <form onChange={(e)=> {props.setTaskData({newCategory:e.target.value})}} 
                        onSubmit={(e, task) => {props.handleMoveTask(e, props.task, props.taskData.newCategory); props.closeCard();}} >
                        <select name="category" defaultValue = {props.defaultCategory(props.taskData.category)}>
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
            </DetailedCard>
            {updated.show ? 
                    <Updated/> : null}
        </Div>
    )


}

export default DetailedTask;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailedTask from './DetailedTask'
import ConfirmDelete from "./ConfirmDelete";
import { useDrag } from 'react-dnd';

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


    .title-box {
        width: 100%;
        margin: 0;
        text-align: center;
        font-size: 14px;
        border-bottom: solid gray 1px;
        background-color: lightgray;
        border-radius: 5px 5px 0 0; 
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-end;

    }

    h3, h4 {
        margin: 0;
        padding: 10px;
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
        background: rgba(211, 211, 211, .4);
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
        color: #D9B51C;
        font-weight: bold;
    }
    .late {
        color: maroon;
        font-weight: bold;
    }

    .editActions {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        margin: 0;
    }

    .taskCategory {
        width: 100%;
        margin-top: 5px;
    }       
`

const Button = styled.button`
    display:flex;
    align-items: center;
    margin: 15px 0;
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
    margin-top: 5px;
    width: 100%;
`


function Task(props) {
    const [taskData, setTaskData] = useState({
        category: props.task.category,
        newCategory: "",
        deleteClick: false
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
    
    const [{isDragging},drag] = useDrag({
        item: {type: 'task',title: props.task.title},
        canDrag: props.user ? true : false,
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })
    
    const defaultCategory = (category) => {
        let displayCategory;
        switch(category) {
            case "To-Do":
                return displayCategory="In Progress";
            case "In Progress":
                return displayCategory="Completed";
            case "Completed":
                return displayCategory="In Progress";
            default:
                console.error("Invalid Category")
        }
        return displayCategory;
    }

    useEffect(() => {
        setTaskData({
            newCategory: defaultCategory(taskData.category),
            category: props.task.category
        })
    },[])// eslint-disable-line react-hooks/exhaustive-deps
    // Above eslint... disables the warning from the empty array, stopping the infinite loop.

    const deleteTaskClick = (e) => {
        e.preventDefault();
        setTaskData({
            deleteClick: true,
            category: props.task.category,
            newCategory: ""
        })
    }

    const cancelClick = () => {
        setTaskData({
            deleteClick: false,
            category: props.task.category,
            newCategory: "",
        })
    }

    const localHandleDelete = (e, task) => {
        cancelClick()
        setDetailedTask({
            show: false
        })
        props.handleDeleteTask(e, props.task)
    }
        
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
        <Card ref={drag} isDragging={isDragging} onDoubleClick={() => {openCard(props.task)}}>

            <div className='title-box'>
                <h3 onClick={() => {openCard(props.task)}}>{props.task.title}</h3>
                <h4>{props.task.user}</h4>
            </div>
            <p className="description">{props.task.description}</p>
            <div className="dueDate">
                <img src='https://www.flaticon.com/svg/static/icons/svg/37/37663.svg' alt="clock"/>
                <p>{props.task.dueDate}</p>

                {whenDue(props.task.dueDate)}
            </div>
            {props.user ?
            <div className="editActions">
                <Button onClick={deleteTaskClick}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    Delete Task
                </Button>
                {taskData.deleteClick ? <ConfirmDelete {... props} cancelClick={cancelClick} localHandleDelete={localHandleDelete}/> : null}
                <form onChange={(e)=> {setTaskData({newCategory:e.target.value})}} onSubmit={(e, task) => props.handleMoveTask(e, props.task, taskData.newCategory)} >
                    <select className='taskCategory' name="category" defaultValue = {defaultCategory(taskData.category)}>
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
                {detailedTask.show ? 
                    <DetailedTask user={props.user} task={props.task} closeCard={closeCard}
                     deleteTaskClick={deleteTaskClick} cancelClick={cancelClick}
                     whenDue={whenDue} defaultCategory={defaultCategory}
                     taskData={taskData} setTaskData={setTaskData}
                     handleMoveTask={props.handleMoveTask}
                     handleEditTask={props.handleEditTask}/> : null}
            </Card>
    )
    
}

export default Task;
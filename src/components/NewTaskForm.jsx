import React, { Component } from 'react';
import styled, {css, keyframes} from 'styled-components';
import {headShake} from 'react-animations';

const headShakeAnimation = keyframes`${headShake}`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    border: solid #298FCA;
    border-radius: 10px;
    background-color: #E4F0F6;

`

const Input = styled.input`
    animation: ${headShakeAnimation} 2s 1;
`


const Submit = styled.input`
    border-radius: 5px;
    border-color: #0C3953;
    padding: 15px 25px;
    font-size: 18px;
    text-decoration: none;
    margin: 20px;
    color: #fff;
    position: relative:
    display: inline-block;
    background-color: #0079BF;
    box-shadow: 0px 5px 0px 0px #026AA7;
    &:hover{
        background-color: #5BA4CF;
    }
`

class NewTaskForm extends Component{
    constructor(props){
        super(props);

        this.state = {
                title: null,
                description: null,
                dueDate: null,
                category: "To-Do"
        }


    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleCreateAttempt = (e) => {
        e.preventDefault();
        if(this.state.title === "" || this.state.title === null){
            this.badTitle = true;
        }
        else if(this.state.dueDate === null){
            this.badDate = true;
        }
        else{
            this.props.handleCreateTask(e,this.state);
            this.setState({
                title: null,
                description: null,
                dueDate: null,
                category: "To-Do"
            })
        }
        this.forceUpdate();
    }

    badTitle = false;
    badDate = false;

    render(){
        return(
            <Form onSubmit={(e) => {this.props.handleCreateTask(e,this.state)}}>
                <h2>New Task</h2>
                <label for="title">Task Title:</label>
                {this.badTitle ? 
                    <Input
                        required type="text" name="title" placeholder="Title"
                        onChange={this.handleInputChange}
                        onAnimationEnd={() => {this.badTitle = false; this.forceUpdate();}}
                    /> 
                :
                    <input   
                        required type="text" name="title" placeholder="Title"
                        onChange={this.handleInputChange}
                    />
                }
                <br />
                <label for="description">Task Description:</label>
                <textarea rows= "5" cols="20" name="description" placeholder="Type description here..."
                    onChange={this.handleInputChange}></textarea><br />
                <label for="dueDate">Due Date:</label>
                {this.badDate ?
                    <Input
                        required type="date" name="dueDate"
                        onChange={this.handleInputChange}
                        onAnimationEnd={() => {this.badDate=false; this.forceUpdate();}}
                    />
                :
                    <input 
                        required type="date" name="dueDate"
                        onChange={this.handleInputChange}
                    />
                }
                <br />
                <select name="category" onChange={this.handleInputChange}>
                    <option value="To-Do">To-Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select><br/>   
                <Submit type="submit" value="Create Task" onClick={(e) =>{this.handleCreateAttempt(e)}}></Submit>
            </Form>
        )
    }
}

export default NewTaskForm;
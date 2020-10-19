import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
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

    render(){
        return(
            <Form onSubmit={(e) => {this.props.handleCreateTask(e,this.state)}}>
                <h2>New Task</h2>
                <label for="title">Task Title:</label>
                <input type="text" name="title" placeholder="Title"
                    onChange={this.handleInputChange}></input>
                <label for="description">Task Description</label>
                <input type="text" name="description" placeholder="Type description here..."
                    onChange={this.handleInputChange}></input>
                <label for="dueDate">Due Date:</label>
                <input type="date" name="dueDate"
                    onChange={this.handleInputChange}></input>
                <select name="category" onChange={this.handleInputChange}>
                    <option value="To-Do">To-Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <input type="submit" value="Create Task"></input>
            </Form>
        )
    }
}

export default NewTaskForm;
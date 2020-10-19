import React, { Component } from 'react';

class NewTaskForm extends Component{
    constructor(props){
        super(props);

        this.state ={
            title: null,
            description: null,
            dueDate: null,
            category: "toDo"
        }


        handleCreateTask = () => {

        }

        handleInputChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            })
        }


    }

    render(){
        return(
            <form>
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
                    <option value="toDo">To Do</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <input type="submit">Create Task</input>
            </form>
        )
    }
}

export default NewTaskForm;
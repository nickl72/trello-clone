import React, { Component } from 'react';
import styled, {css, keyframes} from 'styled-components';
import {headShake} from 'react-animations';

const headShakeAnimation = keyframes`${headShake}`;

const Form = styled.form`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 15px;
    border: solid #298FCA;
    border-radius: 10px;
    background-color: #E4F0F6;
    height: 100%;
    width: 20%;
`

const Submit = styled.input`
    border-radius: 5px;
    border: none;
    padding: 15px 25px; 
    font-size: 18px;
    text-decoration: none;
    margin: 20px;
    color: #fff;
    position: relative;
    display: inline-block;
    background-color: #0079BF;
    box-shadow: 0px 5px 0px 0px #055A8C;
    &:hover{
        background-color: #5BA4CF;
    }
`
const FormHolder = styled.div`
    width:100%;
    padding: 5px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`
const FormHeader = styled.h2`
    text-align: center;
    margin: 10px;
`

const Title = styled.input`
    animation: ${(props) => props.badTitle ? css`${headShakeAnimation} 2s 1` : "none"};
    width: 90%;
`
const TextArea = styled.textarea`
    width: 90%;
`
const Date = styled.input`
    animation: ${(props) => props.badDate ? css`${headShakeAnimation} 2s 1` : "none"};
    width: 90%;
`

class NewTaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
                taskId: 11,
                title: null,
                user: null,
                description: null,
                dueDate: null,
                category: "To-Do",
                private: true
        }
    }
    handleInputChange = (e) => {
        console.log(e.target)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleCreateAttempt = (e) => {
        e.preventDefault();
        
        if(this.props.user) {
            if ((this.state.title === "" || this.state.title === null) && (this.state.dueDate === "" ||this.state.dueDate === null)){
                this.badTitle=true;
                this.badDate=true;
                this.forceUpdate();
                return false;
            }
            else if(this.state.title === "" || this.state.title === null){
                this.badTitle = true;
                this.forceUpdate();
                return false;
            }
            else if(this.state.dueDate === "" ||this.state.dueDate === null){
                this.badDate = true;
                this.forceUpdate();
                return false;
            }
            else{
                const newTask = this.state;
                newTask.user = this.props.user.username;
                this.props.handleCreateTask(e,newTask);
                let form = document.getElementById("form");
                form.reset();
                this.setState({
                    taskId: this.state.taskId + 1,
                    title: null,
                    user: this.props.user.username,
                    description: null,
                    dueDate: null,
                    category: "To-Do",
                    private: true
                })
            }
        }
        else{
            this.props.openLogin();
        }

    }
    badTitle = null;
    badDate = null;
    render(){
        return(
            <Form id="form" onSubmit={(e) => {this.handleCreateAttempt(e)}}>
                <FormHolder>
                <FormHeader>New Task</FormHeader>
                <label htmlFor="title">Task Title:</label> 
                <Title
                    type="text" name="title" placeholder="Title"
                    badTitle={this.badTitle}
                    onChange={this.handleInputChange}
                    onAnimationEnd={() => {this.badTitle=false; this.forceUpdate();}}
                /> 
                <br />
                <label htmlFor="description">Task Description:</label>
                <TextArea rows= "5" cols="20" name="description" placeholder="Type description here..."
                    onChange={this.handleInputChange}>
                </TextArea>
                <br />
                <label htmlFor="dueDate">Due Date:</label>
                <Date
                    type="date" name="dueDate"
                    badDate={this.badDate}
                    onChange={this.handleInputChange}
                    onAnimationEnd={() => {this.badDate=false; this.forceUpdate();}}
                />
                <br />
                <select name="category" onChange={this.handleInputChange}>
                    <option value="To-Do">To-Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <label htmlFor="private">Make Task Private:</label>
                <input type='checkbox' name='private'
                    onChange={(e) => {
                        this.setState({private: !this.state.private})
                    }}
                    checked={this.state.private}
                ></input>
                <Submit type="submit" value="Create Task"></Submit>
                </FormHolder>
            </Form>
        )
    }
}

export default NewTaskForm;
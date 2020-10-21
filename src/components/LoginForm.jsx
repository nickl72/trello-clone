import React, { Component } from 'react';
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

const Input = styled.input`
    margin: 10px;
    line-height: 30px;
    width: 200px;
`

const Button = styled.input`
    background: linear-gradient(to bottom, #61bd4f 0, #5aac44 100%);
    background-color: rgba(0,0,0,0.15);
    box-shadow: 0 2px 0 rgba(0,0,0,0.3);
    color: #fff;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.5em;
    margin: 0 .25em;
    padding: .7em 1.3em;
    vertical-align: top;
    border-radius: .4em;
    border: none;
    cursor: pointer;
    font-family: jaf-facitweb,Helvetica Neue,Arial,sans-serif;
`

const RedP = styled.p`
    color: red;
`

const TitleP = styled.p`
    font-weight: 800;
    font-size: 1.2em;
`

const Logo = styled.img`
    height: 22px;
    vertical-align: bottom;
`

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            password: null,
            admin: false,
            error: null
        }

    }

    login = (e) => {
        e.preventDefault();
        console.log(this.props.users);

        const userLoggingIn = this.props.users.find((user,i) => {
            if (user.username === this.state.username && 
                user.password === this.state.password) {
                    return true
                }
            })

        if (userLoggingIn) {
            this.props.login(userLoggingIn)
        } else {
            this.setState({
                error: 'Incorrect Credentials'
            })
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Div onClick={(e) => this.props.handleClick(e)}>
                <Form>
                    <TitleP>Log In to <Logo className='not-trello' src='./NotTrello_Whitebg.png' alt='Not Trello Logo' onClick={this.props.notTrello}/>&trade;</TitleP>
                    <Input type='text' placeholder='Username' name='username' onChange={this.handleChange} value={this.state.username} autoComplete='off' autoFocus/>
                    <Input type='password' placeholder='Password' name='password' onChange={this.handleChange} value={this.state.password}/>
                    <Button type='submit' value='Log In' onClick={(e) => this.login(e)}/>
                    {this.state.error && <RedP>{this.state.error}</RedP>}
                </Form>
            </Div>
        )
    }
}
export default LoginForm;
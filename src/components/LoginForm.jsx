import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn, zoomOut } from 'react-animations';

const slideAnimation = keyframes`${zoomIn}`;
const slideAnimation2 = keyframes`${zoomOut}`;

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
    .fadeIn {
        animation: ${slideAnimation} .5s;
    }
    .fadeOut {
        animation: ${slideAnimation2} .5s;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px black;
    color: black;
    text-align: center;

    
    
`

const Input = styled.input`
    margin: 15px;
    line-height: 30px;
    width: 275px;
`

const Button = styled.input`
    width: 275px;
    background: linear-gradient(to bottom, #61bd4f 0, #5aac44 100%);
    background-color: rgba(0,0,0,0.15);
    box-shadow: 0 2px 0 rgba(0,0,0,0.3);
    color: #fff;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.5em;
    margin: 15px;
    padding: .7em 1.3em;
    vertical-align: top;
    border-radius: .4em;
    border: none;
    cursor: pointer;
    font-family: jaf-facitweb,Helvetica Neue,Arial,sans-serif;
    &:hover {        
        background: linear-gradient(to bottom, #5aac44 0, #519839 100%);
    }
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

const SignUp = styled.a` 
    margin: 15px;
`
    

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            admin: false,
            signUp: false,
            error: null,
            show: true
        }

    }

    login = (e, signUp = false) => {
        e.preventDefault();
        let error;

        const foundUser = this.props.users.find((user,i) => {
            if (user.username === this.state.username && 
                (user.password === this.state.password || this.state.signUp)) {
                    return true
                } 
                return false
            })

        if (foundUser && !this.state.signUp) {
            this.setState({show: false})
            this.props.login(foundUser) // Logs in created user

        } else if (foundUser) {
            error = 'Username is unavailable'
            this.setState({error})
        } else {
            if (this.state.signUp) {
                if (this.state.username && this.state.password) {
                    this.setState({show: false})
                    this.props.login({
                        password: this.state.password, 
                        username: this.state.username, 
                        admin: false}, true) // Logs in new user
                } else {
                    error = 'Username and Password cannot be blank';
                }
            } else {
                error = 'Incorrect credentials'
            }
            this.setState({error})
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    localHandleClick = (e) => {
        if (e.currentTarget===e.target) {
        this.setState({show: false}) }
        this.props.handleClick(e)
    }

    render() {
        return (

            <Div onClick={(e) => this.localHandleClick(e)}>
                <Form className={this.state.show ? "fadeIn" : "fadeOut"}>
                    <TitleP>Log In to <Logo className='not-trello' src='./NotTrello_Whitebg.png' alt='Not Trello Logo' onClick={this.props.notTrello}/>&trade;</TitleP>

                    <Input type='text' placeholder='Username' name='username' onChange={this.handleChange} value={this.state.username} autoComplete='off' autoFocus/>
                    <Input type='password' placeholder='Password' name='password' onChange={this.handleChange} value={this.state.password}/>
                    <Button type='submit' value={this.state.signUp ? 'Sign Up':'Log In'} onClick={(e) => this.login(e)}/>
                    {!this.state.signUp && <SignUp href='#' onClick={()=>this.setState({signUp: true, error: null})}>Don't have an account? Sign Up here!</SignUp>}
                    {this.state.error && <RedP>{this.state.error}</RedP>}
                </Form>
            </Div>
        )
    }
}
export default LoginForm;
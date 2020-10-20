import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.2);
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
`

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            password: null
        }

    }

    login = (e) => {
        e.preventDefault();
        console.log(this.props.users)
        if (this.props.users.find(this.state)) {
            console.log(this.state)
        } else {
            console.log(this.state, 'not found')
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
                    <input type='text' placeholder='Username' name='username' onChange={this.handleChange} value={this.state.username}/>
                    <input type='password' placeholder='Password' name='password' onChange={this.handleChange} value={this.state.password}/>
                    <input type='submit' value='Log In' onClick={(e) => this.login(e)}/>
                </Form>
            </Div>
        )
    }
}
export default LoginForm;
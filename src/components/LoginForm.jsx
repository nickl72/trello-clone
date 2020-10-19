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

        this.user = {}
    }
    render() {
        return (
            <Div>
                <Form>
                    <input type='text' placeholder='Username'/>
                    <input type='password' placeholder='Password'/>
                    <input type='submit' value='Log In' />
                </Form>
            </Div>
        )
    }
}
export default LoginForm;
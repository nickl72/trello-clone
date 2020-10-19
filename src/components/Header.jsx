import React, { Component } from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const AppHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 20px;
`


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            loginClick: false
        }
    }

    handleClick = () => {
        this.setState({
            loginClick:!this.state.loginClick
            
        })
    }

    render() {
        return (
            <AppHeader>
                <h1>Not Trello</h1>
                <button onClick={this.handleClick}>Log In</button>
                {this.state.loginClick ? <LoginForm /> : null }
            </AppHeader>
        )
    }
}

export default Header;
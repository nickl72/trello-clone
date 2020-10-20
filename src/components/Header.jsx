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

    handleClick = (e) => {
        if (e.currentTarget === e.target ) {
            if (this.state.loggedIn) {
                this.props.login(null)
                this.setState({
                    loggedIn: false,
                    loginClick: false
                })
            } else {
                this.setState({
                    loginClick:!this.state.loginClick
                })
            }
        }
    }

    login = (user) => {
        this.props.login(user)
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render() {
        return (
            <AppHeader>
                <h1>Not Trello</h1>
                <button onClick={this.handleClick}>{this.state.loggedIn ? 'Log Out' : 'Log In' }</button>
                {this.state.loginClick && !this.state.loggedIn? <LoginForm users={this.props.users} handleClick={this.handleClick} login={this.login}/> : null }
            </AppHeader>
        )
    }
}

export default Header;
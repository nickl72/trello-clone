import React, { Component } from 'react';
import LoginForm from './LoginForm';


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
            <header>
                <h1>Not Trello</h1>
                <button onClick={this.handleClick}>Log In</button>
                {this.state.loginClick ? <LoginForm /> : null }
            </header>
        )
    }
}

export default Header;
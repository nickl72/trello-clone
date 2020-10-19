import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <form>
                <input type='text' />
                <input type='password' />
                <input type='submit' value='Log In' />
            </form>
        )
    }
}
export default LoginForm;
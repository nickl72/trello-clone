import React, { useState } from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const AppHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 1em .75em;
    background-color: #0079bf;
    color: #fff;
`

const Button = styled.button` 
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

const Logo = styled.img`
    height: 25px;
`

const Header = (props) => {
    const [loginData, setLoginData] = useState({
        loggedIn: false,
        loginClick: false       
    })

    const login = (user, newUser = false) => {
        props.login(user, newUser)
        
        setTimeout(() => {
            setLoginData({
                loggedIn: !loginData.loggedIn,
            });
            props.updateLoginClick(false);
        }, 450)
        
    }

    const handleClick = (e) => {
        if (e.currentTarget === e.target ) {
            if (loginData.loggedIn) {
                props.login(null)
                setLoginData({
                    loggedIn: false,
                })
                setTimeout(() => {
                    props.updateLoginClick(false);
                }, 450)
                
            } else {
                setLoginData({
                    loggedIn: loginData.loggedIn,
                })
                setTimeout(() => {
                    props.updateLoginClick(!props.loginClick);
                }, 450)
                
            }
        }
    }

    return (
        <AppHeader>
            <Logo className='not-trello' src='./NotTrello.png' onClick={props.notTrello}/>
            <Button onClick={handleClick}>
                {loginData.loggedIn ? 'Log Out' : 'Log In' }
            </Button>
            {props.loginClick && !loginData.loggedIn? <LoginForm users={props.users} handleClick={handleClick} login={login} notTrello={props.notTrello} loginClick = {props.loginClick}/> : null }
        </AppHeader>
    )
}

export default Header;
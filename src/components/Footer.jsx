import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.footer`
    text-align: center;
    padding-bottom: 10px;
`

function Footer(props) {
    return (
        <AppFooter className='not-trello' onClick={props.notTrello}>&copy; Not Trello 2020</AppFooter>
    )
}

export default Footer;
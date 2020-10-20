import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.footer`
    text-align: center;
    padding-bottom: 10px;
`

function Footer() {
    return (
        <AppFooter>&copy; Not Trello 2020</AppFooter>
    )
}

export default Footer;
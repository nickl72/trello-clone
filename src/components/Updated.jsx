import React from 'react';
import styled from 'styled-components';
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
`

const Message = styled.div`
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

function Updated(){
    return(
        <Div>
            <Message>
                <h1>Task Updated!</h1>
            </Message>
        </Div>
    )
}

export default Updated;
import React from "react";
import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Modal = styled.div`
    height: 80%;
    width: 95%;
    background: white;
    border: solid 3px black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const Button = styled.button`
    display:flex;
    align-items: center;
    border: none;
    border-radius: 4px;
    padding: 5px;
    color: white;
    font-weight: bold;
    background-color: #e74c3c;
    box-shadow: 0px 5px 0px 0px #ce3323;
    &:hover {
        background-color: #ff6656
    }
    
`
const CancelButton = styled(Button)`
    color: black;
    background-color: #d6dadc;
    box-shadow: 0px 5px 0px 0px #838c91;
    &:hover {
        background-color: #edeff0
    }
`
const ModalHead = styled.div`
    text-align: center;
    padding: 5px;
    margin: 0px 5px ;
    border: solid gray 1px;
    border-radius: 2px;
    box-shadow: inset 0px 0px 2px gray;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ModalTop = styled.div`
    width: 100%;
    display: flex;
`
const Response = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0px 0px 3px 0px;
`
const Close = styled.div`
    height: 12px;
    width: 12px;
    font-size: 10px;
    text-align: right;
    margin: 2px;
    display: flex;
    justify-self: right;

    svg {
        cursor: pointer;

        &:hover {
            background: black;
            color: white;
        }
    }
`
const Icon = styled.div`
    text-align: center;
    font-size: 30px;
    height: 40px;
    color: #ce3323;
    width: calc(100% - 12px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;

`

function ConfirmDelete(props) {

    return(
        <Div>
            <Modal>
                <ModalTop>
                    <Icon>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
                    </Icon>
                    <Close>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg" onClick={() => props.cancelClick()}><path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
                    </Close>
                </ModalTop>
                <ModalHead>
                    <p>Delete {props.task.title}?</p>
                </ModalHead>
                <Response>
                    <Button onClick = {(e, task) => props.handleDeleteTask(e, props.task)}>
                        Delete
                    </Button>
                    <CancelButton onClick={() => props.cancelClick()}>
                        Cancel
                    </CancelButton>
                </Response>
            </Modal>
        </Div>
        
    )
}

export default ConfirmDelete;
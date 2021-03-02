import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const ModalShadow = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: rgba(0,0,0, .7);
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalStyled = styled.div`
    max-width: 516px;
    background: ${props => props.primary ? "#e74c3c" : "#e2562b"};
    border-radius: 5px;
    color: #fff;
    z-index: 3;
`

const ModalHeader = styled.div`
    background: ${props => props.primary ? "#d44637" : "#d65129"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    font-size: 22px;
    height: 66px;
    border-radius: 5px;
`
const ModalBody = styled.div`
    padding: 38px 42px;
    text-align:center;
`

const ModalText = styled.p`
    font-size: 15px;
    line-height: 2;
`
const ButtonsContainer = styled.div`
    width: 214px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

export default class Modal extends React.Component {
    onClose = e => {
        if(e.target === e.currentTarget) {
            this.props.onClose && this.props.onClose(e);
        }
        
    };
   
    render() {
        const{header, closeButton, text, actions, primary}=this.props;
        return (
            <ModalShadow onClick={this.onClose}>
                <ModalStyled primary={primary}>
                    <ModalHeader primary={primary}>
                        <h3>{header}</h3>
                        {closeButton && <Button onClick={this.onClose} closeBtn text={'✕'}></Button>}
                    </ModalHeader>
                    <ModalBody>
                        <ModalText>{text}</ModalText>
                        <ButtonsContainer primary={primary}>
                        {actions.okButton(this.onClose)}
                        {actions.cancelButton(this.onClose)}
                        </ButtonsContainer>
                    </ModalBody>
                </ModalStyled>
            </ModalShadow>
        )
        
    }
}
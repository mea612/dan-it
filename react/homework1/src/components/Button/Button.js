import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    outline: none;
    border-radius: ${props => props.modalBtn ? '3px' : '5px'};
    border: none;
    width: ${props => props.modalBtn ? '102px' : ''};
    display: ${props => props.modalBtn ? 'flex' : ''};
    justify-content: ${props => props.modalBtn ? 'center' : ''};
    align-items: ${props => props.modalBtn ? 'center' : ''};
    padding: ${props => props.closeBtn ? 'none' : '15px 30px'};
    color: #fff;
    font-size: ${props => props.closeBtn ? '20px' : '15px'};
    transition: background-color .3s, transform .3s;
    background: ${props => props.closeBtn ? 'none' : ''};
    background-color: ${props => props.modalBtn ? 
    props => props.primary ? "#b3382c" : "#bf3d15" 
    : props.backgroundColor};
    &:hover {
        background-color: ${props => props.modalBtn ?
            props => props.primary ? "#9f3227" : "#a93613"
            : props.primary ? "#8c291f" : "#c4351a"};
        transform: ${props => props.closeBtn ? 'scale(1.3)' : ''};
        background: ${props => props.closeBtn ? 'none': ''}
    }
`;

class Button extends React.Component {
    render() {
        const{text, onClick, backgroundColor, primary, modalBtn, closeBtn}=this.props;
        return (
            <StyledButton
                className="button"
                onClick={onClick}
                backgroundColor={backgroundColor}
                primary={primary}
                modalBtn={modalBtn}
                closeBtn={closeBtn}
            >
            {text}
            </StyledButton>
        );
    }
}

export default Button;

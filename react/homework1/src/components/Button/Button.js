import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    outline: none;
    border-radius: 5px;
    border: none;
    padding: 15px 30px;
    color: #fff;
    font-size: 15px;
    transition: background-color .3s;
    background-color: ${props => props.backgroundColor};
    &:hover {
        background-color: ${props => props.primary ? "#8c291f" : "#c4351a"};
    }
`;

class Button extends React.Component {
    render() {
        const{text, onClick, backgroundColor, primary}=this.props;
        return (
            <StyledButton
                className="button"
                onClick={onClick}
                backgroundColor={backgroundColor}
                primary={primary}
            >
            {text}
            </StyledButton>
        );
    }
}

export default Button;

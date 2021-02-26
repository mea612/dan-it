import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
  }
`
const Buttons = styled.button`
  background-color:  ${props => props.primary ? "#b3382c" : "#bf3d15"};
  width: 102px;
  display:flex;
  justify-content: center;
  align-items:center;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 15px 0;
  color: #fff;
  transition: background-color .3s;
  &:hover {
    background-color: ${props => props.primary ? "#9f3227" : "#a93613"};
  }
`

const StyledApp = styled.div`
    width: 800px;
    margin: 0 auto;
    height: 100vh;
    display:flex;
    justify-content: space-around;
    align-items: center;
`


class App  extends React.Component {
  state = {
    modal: {
      isOpen: false,
      header: '',
      text: '',
      primary: true,
    }

  };

  render() {
    const { modal } = this.state;
  
    return (
      <StyledApp>
        <GlobalStyles />
          <Button 
            text="Open first modal"
            backgroundColor="#b3382c"
            onClick={() => this.setState({
              modal: {
                header: "Do you want to delete this file?",
                text: "Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete?",
                isOpen: true,
                primary: true,
              }
            })}
            primary={true}
          />
          <Button 
            text="Open second modal"
            backgroundColor="#e2562b"
            onClick={() => this.setState({
              modal: {
                header: "Do you want to add this file?",
                text: "If you add a file to a shared folder, it's automatically shared with all participants, too",
                isOpen: true,
                primary: false,
              }
            })}
            primary={false}
          />
          <Modal 
            header={modal.header}
            closeButton={true}
            text={modal.text}
            onClose={() => this.setState({
              modal: {
                isOpen: false
              }
            })}
            show={modal.isOpen}  
            primary={modal.primary}
            actions = {{
              cancelButton: (onClose) => <Buttons primary={modal.primary} onClick={onClose}>Cancel</Buttons>,
              okButton: (onClose) => <Buttons primary={modal.primary} onClick={onClose}>Ok</Buttons>
            }}
          />
      </StyledApp>
      
    );
  }
  
}

export default App;

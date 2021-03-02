import React from 'react';
import styled, { createGlobalStyle, css } from "styled-components";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
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

const modalText = [
  {
    header: 'Do you want to delete this file?',
    text: 'Once you delete this file, it won’t be possible to undo this action. Are you sure you want to delete?',
  },
  {
    header: 'Do you want to add this file?',
    text: "If you add a file to a shared folder, it's automatically shared with all participants, too",
  },
];

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
            onClick={
              () => this.handleOpenModal(modalText[0], true, true)
            }
            primary={true}
          />
          <Button 
            text="Open second modal"
            backgroundColor="#e2562b"
            onClick={
              () => this.handleOpenModal(modalText[1], true, false)
            }
            primary={false}
          />
         {modal.isOpen && <Modal 
            header={modal.header}
            closeButton={true}
            text={modal.text}
            onClose={() => this.setState({
              modal: {
                isOpen: false
              }
            })}
            primary={modal.primary}
            actions = {{
              cancelButton: (onClose) => <Button primary={modal.primary} onClick={onClose}  text={'Cancel'} modalBtn/>,
              okButton: (onClose) => <Button primary={modal.primary} onClick={onClose} text={'Ok'} modalBtn/>
            }}
          />}
      </StyledApp>
      
    );
  }

  handleOpenModal = (modalNum, isOpen, primary) => {
    this.setState({
      modal: {
        header: modalNum.header,
        text: modalNum.text,
        isOpen: isOpen,
        primary: primary
      }
    })
  }
  
}

export default App;

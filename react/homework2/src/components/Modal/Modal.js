import React, { Component } from 'react';
import Button from '../Button/Button';
import CloseButton from '../CloseButton/CloseButton';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';



const styles = {
    modalShadow: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: '0',
        backgroundColor: 'rgba(0,0,0, .7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        maxWidth: '550px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        position: 'relative',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
    },
    modalTitle: {
        marginTop: '15px',
    },
    btnContainer: {
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'space-evenly',
    }
}

class Modal extends Component {
    onClose = e => {
        if(e.target === e.currentTarget) {
            this.props.onClose && this.props.onClose(e);
        }
    }
    
    render() {
        const { classes, show, addToCart, id} = this.props;
        if(!show) {
            return null;
        }
        return (
            <div className={classes.modalShadow} onClick={this.onClose}>
                <div className={classes.modal}>
                    <CloseButton
                        title='&#10005;'
                        onClick={this.onClose} 
                    />
                    <h3 className={classes.modalTitle}>Add this product to the cart?</h3>
                    <div className={classes.btnContainer}>
                        <Button 
                            title="Ok"
                            onClick={() => {
                                alert('This item was added to cart')
                                addToCart(id)
                                this.props.onClose()
                            }}
                        />
                        <Button 
                            title="Cancel"
                            onClick={this.onClose}   
                        />
                    </div>
                    
                </div>
            </div>
        );
    }
}

const StyledModal = withStyles(styles)(Modal)

StyledModal.propTypes = {
    show: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
}

StyledModal.defaultProps = {
    id: PropTypes.number
}

export default StyledModal;
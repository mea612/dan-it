import Button from '../Button/Button';
import CloseButton from '../CloseButton/CloseButton';
import {createUseStyles} from 'react-jss';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { addToCartAction, removeFromCartAction } from "../../store/actions";


const useStyles = createUseStyles({
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
})

const Modal = (props) => {
    const { id, text} = props;

    const classes = useStyles();
    const dispatch = useDispatch();
    const addToCart = () => dispatch(addToCartAction(id));
    const removeFromCart = () => dispatch(removeFromCartAction(id));
    const onClose = e => {
        if(e.target === e.currentTarget) {
            props.onClose && props.onClose(e);
        }
    }

    return (
        <div className={classes.modalShadow} onClick={onClose}>
            <div className={classes.modal}>
                <CloseButton
                    text='&#10005;'
                    onClick={onClose} 
                />
                <h3 className={classes.modalTitle}>{text}</h3>
                <div className={classes.btnContainer}>
                {text === 'Remove item from cart?'
                    ? <Button 
                        title="Ok"
                        width='40%'
                        onClick={(e) => {
                            // alert('This item will be removed from cart')
                            removeFromCart(id)
                            onClose(e)
                        }}
                    />
                    : 
                    <Button 
                        title="Ok"
                        width='40%'
                        onClick={(e) => {
                            // alert('This item was added to cart')
                            addToCart(id)
                            onClose(e)
                        }}
                    />
                }
                    
                    
                    <Button 
                        title="Cancel"
                        width='40%'
                        onClick={onClose}   
                    />
                </div>
                
            </div>
        </div>
    );
}


Modal.propTypes = {
    addToCart: PropTypes.func
}

Modal.defaultProps = {
    id: PropTypes.number
}

export default Modal;
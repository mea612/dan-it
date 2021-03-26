import Button from "../Button/Button";
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import {createUseStyles} from 'react-jss';
import CloseButton from '../CloseButton/CloseButton';
import { useDispatch } from "react-redux";
import { toggleFavouriteAction, setModal } from '../../store/actions';

const useStyles = createUseStyles({
    card: {
        // width: 'calc((100% / 5) - 45px)',
        width: '11.5em',
        border: '2px solid #eaeaea',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '20px',
        boxShadow: '1px 3px 5px -2px rgb(215 221 225 / 60%)',
        position: 'relative',
        fontSize: '14px',
        '&:not(:last-child)': {
            marginRight: props => props.marginRight,
        }
    },
        
        
    cardImage: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
    },
    cardTitle: {
        fontSize: '14px',
    },
    priceContainer: {
        fontSize: '14px',
        fontWeight: '700',
    },
    addInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    favStar: {
        paddingLeft: '5px',
        // '&:hover path': {
        //     stroke: '#182e49'
        // }
    },
    btnContainer: {
        display: 'flex'
    },
    cardCart: {
        width: '100%',
        // margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: '2px solid #eaeaea',
        // borderBottom: '2px solid #eaeaea',
        fontSize: '13px'
    },
    cartImage: {
        width: '10%'
    },
    inputAmount: {
        width:'36px',
        textAlign: 'center',
        border: '1px solid #eaeaea',
        outline: 'none',
    },
    addCartInfo: {
        width: '50%'
    }
})

const Card = (props) => {
    const classes = useStyles(props);
    const  openModal = (id, text) => {
        dispatch(setModal({isOpen: true, toCartId: id, text: text}))
      }

    const {
        card: {
            name,
            price,
            image,
            id,
            color,
            isFavourite,
            amount
        },
        inCart,

    } = props;
    const dispatch = useDispatch();

    const toggleFavourite = () => dispatch(toggleFavouriteAction(id));

    return (
        <>
        {inCart
        ? <div className={classes.cardCart}>
                
                <img className={classes.cartImage} src={image} alt=""/>
                
                <div className={classes.addCartInfo}>
                    <h4 className={classes.cartTitle}>{name}</h4>
                </div>
                {/* <p><b>color:</b> {color}</p> */}
                
                {/* <p><b>SN:</b> {id}</p> */}
                <div>{amount}</div>
                <p className={classes.priceContainer}> ${price}.<sup>00</sup></p>
                <div className={classes.btnContainer}>
                    <CloseButton 
                        text='&#10005;' 
                        title='Remove from cart' 
                        onClick={() => {
                        openModal(id, 'Remove item from cart?') 
                    }}
                /></div>
            </div>
        : <div className={classes.card}>
            
            <img className={classes.cardImage} src={image} alt=""/>
            <div className={classes.addInfo}>
                <h4 className={classes.cardTitle}>{name}</h4>
                <Icon className={classes.favStar}
                    onClick={toggleFavourite}
                    type='star'
                    color='gold'
                    isFavourite={isFavourite}
                    title={'Add to favourites'}
                    width='30'
                    height='30'
                    />
               
            </div>
            
            <p><b>color:</b> {color}</p>
            <p className={classes.priceContainer}>price: ${price}.<sup>00</sup></p>
            <p><b>SN:</b> {id}</p>
            {!inCart && <Button 
                title="Add to Cart"
                onClick={() => {
                    openModal(id, 'Add this product to cart?') 
                }
                }
            />
            }
        </div>
        }
        
        </>
    );
}

Card.propTypes = {
    card: PropTypes.object,
    toggleFavourite: PropTypes.func,
    openModal: PropTypes.func
}


export default Card;
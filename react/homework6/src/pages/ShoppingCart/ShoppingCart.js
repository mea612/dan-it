import React from 'react';
import Cards from "../../components/Cards/Cards";
import Icon from "../../components/Icon/Icon"
import {createUseStyles} from 'react-jss';
import { useSelector } from 'react-redux';
import { getCardsInCart, getTotalPrice } from '../../store/selectors';
import OrderForm from '../../components/OrderForm/OrderForm';


const useStyles = createUseStyles({
    container: {
      width: '90%',
      margin: "0 auto",
      padding: '0 0 20px'
    },
    headerCart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleCart: {
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: '20px',
        color: '#182e49',
        paddingLeft: '10px'
    },
    cartContainer: {
        backgroundColor: '#fafafa',
        // display: 'flex',
        width: '50%',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // alignItems: 'flex-start',
        padding: '20px',
    },
    cartPrice: {
        fontWeight: 700,
        color: '#182e49',
        marginLeft: '20px'
    },
    titleText: {
        marginLeft: '20px'
    },
    formOrder: {
        display: 'flex',
    },
    priceContainer: {
        width: '100%',
        borderTop: '2px solid #eaeaea',
    },
    priceTotal: {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: '700'
    }
})

const ShoppingCart = (props) => {
    const classes = useStyles()
    const cardsInCart = useSelector(getCardsInCart);
    const totalPrice = useSelector(getTotalPrice)
    // console.log(cardsInCart);
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.headerCart}>
                    <Icon
                        type='cart'
                        color='#182e49'
                        title={'Favourites'}
                        width='28'
                        height='28'
                    />
                    <p className={classes.titleCart}>Shopping Cart</p>
                    {!totalPrice
                        ? <p className={classes.titleText}>No items has been added</p>
                        : <p className={classes.cartPrice}>
                        
                        Total: $ {totalPrice}.<sup>00</sup></p>
                    }
                    
                </div>
                <div className={classes.formOrder}>
                   
                    {totalPrice > 0 && <OrderForm />}
                    <div className={classes.cartContainer}>
                        <Cards cards={cardsInCart}
                            inCart
                        />
                        {totalPrice > 0 && <div className={classes.priceContainer}>
                            <div className={classes.priceTotal}>
                                <p>Total:</p><p> $ {totalPrice}.<sup>00</sup></p>
                            </div>
                        </div>}
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default ShoppingCart;
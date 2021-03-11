import React from 'react';
import Cards from "../../components/Cards/Cards";
import Icon from "../../components/Icon/Icon"
import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    container: {
      width: '75em',
      margin: "0 auto",
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
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '20px 0'
    },
    cartPrice: {
        fontWeight: 700,
        color: '#182e49',
        marginLeft: '20px'
    },
    titleText: {
        marginLeft: '20px'
    }
})

const ShoppingCart = (props) => {
    const classes = useStyles()
    const { cardsInCart, openModal, totalPrice } = props;
    
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
                    {totalPrice === 0
                        ? <p className={classes.titleText}>No items has been added</p>
                        : <p className={classes.cartPrice}>
                        
                        Total: $ {totalPrice}.<sup>00</sup></p>
                    }
                    
                </div>
                
                <div className={classes.cartContainer}>
                    <Cards cards={cardsInCart} 
                        // toggleFavourite={toggleFavourite}
                        openModal={openModal}
                        // favouriteCards={favouriteCards}
                        // inFavorites
                        inCart
                    />
                    </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favourites from '../pages/Favourites/Favourites';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import Home from '../pages/Home/Home';

const AppRoutes = (props) => {
    const { cards, toggleFavourite, openModal, isModalShown, setIsModalShown, addToCart, favouriteCards, cardsInCart, totalPrice} = props;
    return (
        <div>
            <Switch>
                <Route path='/shopping-cart' render={() => <ShoppingCart cardsInCart={cardsInCart} openModal={openModal} totalPrice={totalPrice}/>}/>
                <Route path='/favourites' render={()=> <Favourites favouriteCards={favouriteCards} openModal={openModal} toggleFavourite={toggleFavourite}></Favourites>}/>
                <Route path='/' render={() => 
                    <Home 
                        cards={cards}
                        toggleFavourite={toggleFavourite}
                        openModal={openModal}
                        isModalShown={isModalShown}
                        setIsModalShown={setIsModalShown}
                        addToCart={addToCart}
                    />
                }/>
            </Switch>
        </div>
        
    );
};

export default AppRoutes;
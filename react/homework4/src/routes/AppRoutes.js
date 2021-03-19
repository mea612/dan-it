import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favourites from '../pages/Favourites/Favourites';
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart';
import Home from '../pages/Home/Home';

const AppRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path='/shopping-cart' render={() => <ShoppingCart />}/>
                <Route path='/favourites' render={()=> <Favourites />}/>
                <Route path='/' render={() => <Home/>
                }/>
            </Switch>
        </div>
        
    );
};

export default AppRoutes;
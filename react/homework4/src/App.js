import './App.css';
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Modal from "./components/Modal/Modal";
import AppRoutes from './routes/AppRoutes';
import { setCart, setModal } from '../src/store/actions';
import { getCards, getCart, getModal } from '../src/store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsOperation } from './store/operations';

const App = () => {
  const cards = useSelector(getCards);
  const cart = useSelector(getCart);
  const modal = useSelector(getModal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsOperation());
  }, [dispatch]);

  useEffect(() => {
    if(!cards || !cards.length) return;
     const favouriteItems = cards.filter(card => card.isFavourite).map(card => card.id);
     localStorage.setItem('favourite-items', JSON.stringify(favouriteItems));
  }, [cards]);

  useEffect(() => {
    if (cart) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    let storedCart;
    try {
      storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      
    } catch(e) {
      console.error(e);
      storedCart = [];
    }
    dispatch(setCart(storedCart));
  }, [dispatch])

  return (
    <div>
    <Header />
    <AppRoutes
    />
    {modal.isOpen && <Modal 
                onClose={() => dispatch(setModal({
                    isOpen: false
                }))}
                id={modal.toCartId}
                text={modal.text}
            />}
    </div>
  );
}

export default App;

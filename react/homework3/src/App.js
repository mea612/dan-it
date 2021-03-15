import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Modal from "./components/Modal/Modal";
import AppRoutes from './routes/AppRoutes';

const App = () => {

  const[cards, setCards] = useState([]);
  const[isModalShown, setIsModalShown] = useState({isOpen: false});
  
  const[cart, setCart] = useState(null);

  const toggleFavourite = (cardId) => {
    const favCards = cards.map(card => 
      (card.id === cardId) ? {...card, isFavourite: !card.isFavourite} : card
    )
    setCards(favCards);
  }

  const addToCart = (id) => {
    const isItemInCart = cart.find(item => item.id === id);
      if(isItemInCart) {
        setCart(cart.map(item => item.id === id 
          ? {...item, amount: item.amount + 1}
          : item))
      } else {
        setCart([...cart, {'id':id, amount: 1 }])
      }
  }
  const removeFromCart = (id) => {
    // console.log('remove: ', id);
    const isItemInCart = cart.find(item => item.id === id);
    if(isItemInCart) {

      let newCart = cart.filter(item => !(item.id === id && item.amount === 1));

      newCart = newCart.map(item => item.id === id && item.amount > 1
        ? {...item, amount: item.amount - 1}
        : item
        );

      setCart(newCart);
    };
  }

 

  const  openModal = (id, text) => {
    setIsModalShown({isOpen: true, toCartId: id, text: text})
  }

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(result => {
        let savedFavourites;
        try {
          savedFavourites = JSON.parse(localStorage.getItem('favourite-items'));
        } catch (e) {
            console.error(e);
        }
        if(!savedFavourites || !Array.isArray(savedFavourites) || !savedFavourites.length) {
            return result;
        } else {
            result.forEach(item => item.isFavourite = savedFavourites.indexOf(item.id) > -1)
        }
        return result;
      })
      .catch(console.error)
      .then(data => setCards(data))
  }, []);

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
    setCart(storedCart);
  }, [])

  const favouriteCards = cards.filter(card => card.isFavourite);

  const cardsInCart = cards.length
    ? (cart || []).map(item => ({...cards.find(card => card.id === item.id && card), ...item}))
    : [];

  const amountInCart = cardsInCart.reduce((acc, curr) => acc + curr.amount, 0);
  const totalPrice = cardsInCart.reduce(
    (acc, curr) => acc + parseInt(curr.price.replace(/,/g, '')) * curr.amount,
    0
  );

  // console.log('TOT: ', totalPrice);
  return (
    <div>
    <Header 
      title='Digital'
      favouriteCount= {favouriteCards.length}
      amountInCart={amountInCart}
    />
    <AppRoutes 
      cards={cards}
      toggleFavourite={toggleFavourite}
      openModal={openModal}
      isModalShown= {isModalShown}
      setIsModalShown={setIsModalShown}
      addToCart={addToCart}
      favouriteCards={favouriteCards}
      cardsInCart={cardsInCart}
      totalPrice={totalPrice}
    />
    {isModalShown.isOpen && <Modal 
                onClose={() => setIsModalShown({
                    isOpen: false
                })}
                addToCart={addToCart}
                id={isModalShown.toCartId}
                text={isModalShown.text}
                toggleFavourite={toggleFavourite}
                removeFromCart={removeFromCart}
            />}
    </div>
  );
}

export default App;

export const getCards = state => state.cards;
export const getModal = state => state.modal;
export const getCart = state => state.cart;

export const getFavouriteCards = state => state.cards.filter(card => card.isFavourite);
export const favouriteCount = state => getFavouriteCards(state).length;

export const getCardsInCart = state => state.cards.length
? (state.cart || []).map(item => ({...state.cards.find(card => card.id === item.id && card), ...item}))
: [];

export const amountInCart = state => getCardsInCart(state).reduce((acc, curr) => acc + curr.amount, 0);

export const getTotalPrice = state => getCardsInCart(state).reduce(
    (acc, curr) => acc + parseInt(curr.price.replace(/,/g, '')) * curr.amount,
    0
  );
// testing
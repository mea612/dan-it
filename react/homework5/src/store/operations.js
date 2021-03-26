
import { setCards, setCart, setOrder } from "./actions";



export const getCardsOperation = () => (dispatch) => {
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
      .then(data => dispatch(setCards(data)))
}

export const createOrderOperation = (deliveryInfo, orderItems) => (dispatch) => {
    const items = orderItems.map(({image, ...item}) => item);
    const order = {items, deliveryInfo};
   
    console.log('Order info:', order);
    dispatch(setOrder(order));
    dispatch(setCart(null)); //clear cart
    localStorage.setItem('cart', '');
}


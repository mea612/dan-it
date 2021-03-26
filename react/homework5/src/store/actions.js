import { 
    SET_CARDS, 
    SET_MODAL, 
    SET_CART, 
    TOGGLE_FAVOURITE, 
    ADD_TO_CART, 
    REMOVE_FROM_CART,
    SET_ORDER,
} from './types';

export const setCards = (data) => {
    return { type: SET_CARDS, payload: data}
}

export const setModal = (data) => {
    return { type: SET_MODAL, payload: data}
}

export const setCart = (data) => {
    return { type: SET_CART, payload: data}
}

export const toggleFavouriteAction = id => ({ type: TOGGLE_FAVOURITE, payload: id });

export const addToCartAction = id => ({type: ADD_TO_CART, payload: id})

export const removeFromCartAction = id => ({type: REMOVE_FROM_CART, payload: id})

export const setOrder = (data) => ({type: SET_ORDER, payload: data})


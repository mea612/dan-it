
import { 
    SET_CARDS, 
    SET_MODAL, 
    SET_CART, 
    TOGGLE_FAVOURITE, 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    SET_ORDER,
} from './types';


const initialState = {
    cards: [],
    cart: null,
    modal: {
        isOpen: false
    },
    orderInfo: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARDS: 
            return {...state, cards: action.payload };
        case SET_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    ...action.payload,
                }
            };
        case SET_CART:
            return {...state, cart: action.payload};
        case TOGGLE_FAVOURITE:
            const favCards = state.cards.map(card => 
                (card.id === action.payload) ? {...card, isFavourite: !card.isFavourite} : card
              )
            return {...state, cards: favCards}

        case ADD_TO_CART:
            return addToCartReducer(state, action);
        case REMOVE_FROM_CART:
            return removeFromCartReducer(state, action);
        case SET_ORDER: 
            return {...state, orderInfo: action.payload}
        default:
            return state;
    }
}

export default reducer;

const addToCartReducer = (state, action) => {
    const isItemInCart = state.cart.find(item => item.id === action.payload);

    if (isItemInCart) {
        return {
            ...state,
            cart: state.cart.map(item =>
                item.id === action.payload
                    ?
                        {
                            ...item,
                            amount: item.amount + 1
                        }
                    : item
            )
        }
    } else {
        return {
            ...state,
            cart: [
                ...state.cart,
                {
                    'id': action.payload,
                    amount: 1
                }
            ]
        }
    }
};

const removeFromCartReducer = (state, action) => {
    let newCart = state.cart.filter(item =>
        !(item.id === action.payload && item.amount === 1)
    );

    newCart = newCart.map(item => item.id === action.payload && item.amount > 1
    ? {...item, amount: item.amount - 1}
    : item
    );
    

    return {
    ...state, cart: newCart
    } 
}

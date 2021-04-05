import reducer from "../store/reducer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_CARDS,
  SET_CART,
  SET_MODAL,
  SET_ORDER,
  TOGGLE_FAVOURITE,
} from "../store/types";

const testCards = [
  {
    name: "Leica S (Typ 006) / 70mm Lens Set",
    color: "black",
    id: "00367",
    price: "18,500",
    image: "Leica_S-002_540x.jpg",
  },
  {
    name: "Leica S (Typ 006)",
    color: "black",
    id: "00368",
    price: "15,995",
    image: "1347910998_540x.jpg",
  },
];

const testFavCards = [
  {
    name: "Leica S (Typ 006) / 70mm Lens Set",
    color: "black",
    id: "00367",
    price: "18,500",
    image: "Leica_S-002_540x.jpg",
    isFavourite: true,
  },
  {
    name: "Leica S (Typ 006)",
    color: "black",
    id: "00368",
    price: "15,995",
    image: "1347910998_540x.jpg",
  },
];
const initialState = {
  cards: [],
  cart: null,
  modal: {
    isOpen: false,
  },
  orderInfo: null,
};

describe("Testing reducer", () => {
  test("SET_CARDS sets cards to store", () => {
    expect.assertions(1);
    const action = {
      type: SET_CARDS,
      payload: testCards,
    };
    const newState = reducer(initialState, action);

    expect(newState.cards).toEqual(action.payload);
  });

  test("SET_MODAL sets modal state", () => {
    expect.assertions(1);

    const action = {
      type: SET_MODAL,
      payload: { isOpen: false },
    };

    const newState = reducer(initialState, action);

    expect(newState.modal.isOpen).toEqual(action.payload.isOpen);
  });

  test("SET_CART sets cart items", () => {
    expect.assertions(1);

    const action = {
      type: SET_CART,
      payload: { id: 2, amount: 1 },
    };
    const newState = reducer(initialState, action);

    expect(newState.cart).toEqual(action.payload);
  });

  test("TOGGLE_FAVOURITE toggles favourite item", () => {
    expect.assertions(2);

    const initialState = {
      cards: testCards,
    };
    const initialState2 = {
      cards: testFavCards,
    };

    const action = {
      type: TOGGLE_FAVOURITE,
      payload: "00367",
    };

    const newState = reducer(initialState, action);
    expect(newState.cards[0].isFavourite).toBeTruthy();

    const newState2 = reducer(initialState2, action);
    expect(newState2.cards[0].isFavourite).toBeFalsy();
  });

  test("ADD_TO_CART adds item to cart", () => {
    expect.assertions(1);

    const initialState = {
      cart: [{ id: 1, amount: 1 }],
    };

    const action = { type: ADD_TO_CART, payload: 2 };

    const newState = reducer(initialState, action);
    expect(newState.cart).toEqual([
      { id: 1, amount: 1 },
      { id: 2, amount: 1 },
    ]);
  });

  test("ADD_TO_CART increases amount in cart", () => {
    expect.assertions(1);

    const initialState = {
      cart: [
        { id: 1, amount: 1 },
        { id: 2, amount: 1 },
      ],
    };

    const action = { type: ADD_TO_CART, payload: 1 };

    const newState = reducer(initialState, action);
    expect(newState.cart).toEqual([
      { id: 1, amount: 2 },
      { id: 2, amount: 1 },
    ]);
  });

  test("REMOVE_FROM_CART decreases amount in cart", () => {
    expect.assertions(1);

    const initialState = {
      cart: [
        { id: 1, amount: 2 },
        { id: 2, amount: 1 },
      ],
    };

    const action = { type: REMOVE_FROM_CART, payload: 1 };

    const newState = reducer(initialState, action);
    expect(newState.cart).toEqual([
      { id: 1, amount: 1 },
      { id: 2, amount: 1 },
    ]);
  });

  test("SET_ORDER sets oreder info in store", () => {
    expect.assertions(1);
    const orderInfo = [
      {
        name: "Leica S (Typ 006) / 70mm Lens Set",
        color: "black",
        id: "00367",
        price: "18,500",
      },
      {
        name: "Minny",
        surname: "Mars",
        address: "Viola, str",
        building: 132,
        phone: 97328180239,
      },
    ];
    const action = {
      type: SET_ORDER,
      payload: orderInfo,
    };

    const newState = reducer(initialState, action);
    expect(newState.orderInfo).toEqual(action.payload);
  });

  test("Unknown action type", () => {
    const action = {
      type: "UNKNOWN_TYPE",
      payload: { id: 1, amount: 9, name: "Lily" },
    };

    const newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  test("initializes using initialState", () => {
    expect.assertions(1);

    const initialState = reducer(undefined, { type: "@@INIT " });

    expect(initialState).toEqual(initialState);
  });
});

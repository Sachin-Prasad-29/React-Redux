import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from './actions';

function reducer(state, action) {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] };
    }
    if (action.type === DECREASE) {
        let tempCart = [];
        if (action.payload.amount === 1) {
            tempCart = state.cart.filter((cartItem) => {
                return cartItem.id !== action.payload.id;
            });
        } else {
            tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    cartItem = { ...cartItem, amount: cartItem.amount - 1 };
                }
                return cartItem;
            });
        }
        return { ...state, cart: tempCart };
    }
    if (action.type === INCREASE) {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                cartItem = { ...cartItem, amount: cartItem.amount + 1 };
            }
            return cartItem;
        });
        return { ...state, cart: tempCart };
    }
    if (action.type === REMOVE) {
        const newCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id);
        return {
            ...state,
            cart: newCart,
        };
    }
    if (action.type === GET_TOTALS) {
        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                cartTotal.amount += cartItem.amount;
                cartTotal.total += cartItem.price * cartItem.amount;
                return cartTotal;
            },
            { total: 0, amount: 0 }
        );
        total = parseFloat(total.toFixed(2));
        return { ...state, total: total, amount: amount };
    }

    return state;
}

export default reducer;

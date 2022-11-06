import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff

// store - stroes data, think of state,
// reducer - function that used to update store
// two arguments - state, action
// state - old state/ state before update
// action - what happended/ what update
// return updated or old state

import { createStore } from 'redux';
import reducer from './reducer';

//react-redux - Provider - wraps app, connect - used in components
import { Provider } from 'react-redux';

//dispatch method - send actions to the store
//action(object ) - Must have type property - what kind of action
// Dont mutate the state - redux buit on immutability (copy)

// initial store  which contain all the data
// const initialStore = {
//     cart: cartItems,
//     total: 105,
//     amount: 6,
// };

// reducer  , this function will contain all the action( which cointains logic ) and return updated or initial state

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
    // cart setu

    return (
        <Provider store={store}>
            <Navbar />
            <CartContainer />
        </Provider>
    );
}

export default App;

import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from "./Store/store";
import Cart from "./Store/cart"

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        store: new Store(),
        cart: new Cart()
        }}
        >
        <App />
    </Context.Provider>

);

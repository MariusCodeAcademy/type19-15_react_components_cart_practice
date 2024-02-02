import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext({
  cart: [],
  add(prodObj) {},
  remove() {},
  update() {},
});

CartContext.displayName = 'MaCart';

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case 'ADD':
      console.log('add to cart in reducer', action.payload);

      return cartState;
    default:
      console.warn('no action found', action);
      return cartState;
  }
};
export default function CartProvider({ children }) {
  const [cartState, dispach] = useReducer(cartReducer, []);

  const add = (prodObj) => {
    // console.log('adding to cart', prodObj);
    dispach({ type: 'ADD', payload: prodObj });
  };
  const remove = (idToRemove) => {
    console.log('removing to cart');
  };

  const cartCtxValue = {
    add,
    remove,
  };
  return <CartContext.Provider value={cartCtxValue}>{children}</CartContext.Provider>;
}

export function useCartCtx() {
  return useContext(CartContext);
}

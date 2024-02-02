import { createContext, useContext } from 'react';

const CartContext = createContext({
  cart: [],
  add() {},
  remove() {},
  update() {},
});

CartContext.displayName = 'MaCart';

export default function CartProvider({ children }) {
  const add = () => {
    console.log('adding to cart');
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

import { createContext, useContext } from 'react';

const CartContext = createContext({
  cart: [],
  add() {},
  remove() {},
  update() {},
});

CartContext.displayName = 'MaCart';

export default function CartProvider({ children }) {
  const cartCtxValue = { blabla: 500 };
  return <CartContext.Provider value={cartCtxValue}>{children}</CartContext.Provider>;
}

export function useCartCtx() {
  return useContext(CartContext);
}

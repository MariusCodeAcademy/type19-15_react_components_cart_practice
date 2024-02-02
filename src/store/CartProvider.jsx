import { createContext, useContext, useReducer } from 'react';
import { v4 as genId } from 'uuid';

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
      const prodItemToAdd = action.payload;
      // ar yra karte toks obj ant kurio paspausta add to cart
      const isInCart = cartState.some((cObj) => cObj.prodId === prodItemToAdd.id);
      console.log('isInCart ===', isInCart);

      if (isInCart === true) {
        // jei jau yra toksai objektas carte - padidinti quantity ir kaina
        return cartState.map((cObj) => {
          if (cObj.prodId === prodItemToAdd.id) {
            // grazinti pakeista kopija
            return { ...cObj, qty: cObj.qty + 1, priceTotal: (cObj.qty + 1) * cObj.priceUnit };
          }
          return cObj;
        });
      } else {
        // Tokio produkto krepselyje kol kas nera tai sukuriam ir idedam
        // suformuoti objekta (cartObj)
        const madeObj = {
          cItemId: genId(),
          prodId: prodItemToAdd.id,
          title: prodItemToAdd.title,
          qty: 1,
          priceUnit: prodItemToAdd.price,
          img: prodItemToAdd.thumbnail,
          priceTotal: prodItemToAdd.price,
        };
        return [...cartState, madeObj];
      }

    default:
      console.warn('no action found', action);
      return cartState;
  }
};
export default function CartProvider({ children }) {
  const [cartState, dispach] = useReducer(cartReducer, []);
  console.table(cartState);
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

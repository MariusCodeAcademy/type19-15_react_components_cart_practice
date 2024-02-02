import { v4 as genId } from 'uuid';
import { useState } from 'react';
import CartItem from '../components/cart/CartItem';
import { useCartCtx } from '../store/CartProvider';

const cartObj = {
  cItemId: genId(),
  prodId: 1,
  title: 'Iphone',
  qty: 1,
  priceUnit: 799,
  img: 'blabla.jpg',
  priceTotal: 799,
};
export default function CartPage() {
  const [cartArr, setCartArr] = useState([]);
  console.table(cartArr);

  const { remove } = useCartCtx();

  const addToCart = (itemId) => {
    // surati item is prodArr kurio id yra === itemId

    const foundItem = prodArr.find((pObj) => pObj.id === itemId);
    console.log('foundItem ===', foundItem);

    // ideti objekta i cart cartArr (simple)
    // setCartArr([...cartArr, madeObj]);
    // jei jau yra toksai objektas carte - padidinti quantity ir kaina
    // surasti ar yra jau cart toks item
    const isInCart = cartArr.some((cObj) => cObj.prodId === itemId);
    console.log('isInCart ===', isInCart);

    if (isInCart === true) {
      // jei jau yra toksai objektas carte - padidinti quantity ir kaina
      setCartArr(
        cartArr.map((cObj) => {
          if (cObj.prodId === itemId) {
            // grazinti pakeista kopija
            return { ...cObj, qty: cObj.qty + 1, priceTotal: (cObj.qty + 1) * cObj.priceUnit };
          }
          return cObj;
        }),
      );
    } else {
      // Tokio produkto krepselyje kol kas nera tai sukuriam ir idedam
      // suformuoti objekta (cartObj)
      const madeObj = {
        cItemId: genId(),
        prodId: foundItem.id,
        title: foundItem.title,
        qty: 1,
        priceUnit: foundItem.price,
        img: foundItem.thumbnail,
        priceTotal: foundItem.price,
      };
      setCartArr([...cartArr, madeObj]);
    }
  };
  const updateQtyCard = () => {
    // tures atnaujinti qty skaiciu kazkuriame objekte
  };
  const removeFromCart = (cartItemIdToRemove) => {
    // pasalinti objeka is cartArr
    console.log('removeFromCart', cartItemIdToRemove);
    setCartArr((prevState) => prevState.filter((cObj) => cObj.cItemId !== cartItemIdToRemove));
  };
  return (
    <div className='container'>
      <h1 className='about-heading text-4xl font-bold text-center mt-10'>CartPage</h1>
      <p className='text-lg text-center mt-4'>Thank for buying</p>

      <button onClick={remove}>Remove</button>

      {cartArr.length > 0 && (
        <ul className='my-10'>
          <li className='mb-5'>
            <div className='grid grid-cols-5'>
              <h3 className='uppercase text-xl'>Product Image</h3>
              <h3 className='uppercase text-xl'>Product</h3>
              <h3 className='uppercase text-xl'>Quantity</h3>
              <h3 className='uppercase text-xl'>Price</h3>
              <h3 className='uppercase text-xl'>Total</h3>
            </div>
          </li>
          {cartArr.map((cObj) => (
            <li key={cObj.cItemId}>
              <CartItem onRemove={removeFromCart} item={cObj} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

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

  const { remove, cart } = useCartCtx();

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

      {cart.length > 0 && (
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
          {cart.map((cObj) => (
            <li key={cObj.cItemId}>
              <CartItem onRemove={remove} item={cObj} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

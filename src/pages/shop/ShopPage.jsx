import axios from 'axios';
import { useEffect, useState } from 'react';
import { localProductsUrl, productsUrl } from '../../config';
import ShopListItem from '../../components/shop/ShopListItem';

export default function ShopPage() {
  const [prodArr, setProdArr] = useState([]);
  const [cartArr, setCartArr] = useState([]);

  const cartObj = {
    cItemId: 1,
    prodId: 1,
    title: 'Iphone',
    qty: 1,
    price: 799,
  };

  const addToCard = (itemId) => {
    // surati item is prodArr kurio id yra === itemId
    // suformuoti objekta (cartObj)
    // ideti objekta i cart cartArr (simple)
    // jei jau yra toksai objektas carte - padidinti quantity
  };
  const updateQtyCard = () => {
    // tures atnaujinti qty skaiciu kazkuriame objekte
  };
  const removeFromCard = () => {
    // pasalinti objeka is cartArr
  };

  console.log('prodArr ===', prodArr);
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = () => {
    axios
      .get(localProductsUrl)
      .then((resp) => {
        console.log('resp.data ===', resp.data);
        const products = resp.data;
        setProdArr(products);
        // console.log('products ===', products);
        // console.log(JSON.stringify(products, null, 2));
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  };

  return (
    <div className='container'>
      <h1 className='about-heading text-4xl font-bold text-center mt-10'>Shop</h1>
      <p className='text-lg text-center my-4'>
        This is just like <strong>Oboulys</strong> Shop
      </p>

      <ul>
        {cartArr.map((cObj) => (
          <li key={cObj.cItemId}>Cart Item</li>
        ))}
      </ul>

      <ul className='grid grid-cols-3'>
        {prodArr.map((pObj) => (
          <li key={pObj.id}>
            <ShopListItem item={pObj} />
          </li>
        ))}
      </ul>
    </div>
  );
}

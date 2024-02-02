import axios from 'axios';
import { useEffect, useState } from 'react';
import { localProductsUrl, productsUrl } from '../../config';
import ShopListItem from '../../components/shop/ShopListItem';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { v4 as genId } from 'uuid';
import CartItem from '../../components/cart/CartItem';

const prodItemType = {
  id: 30,
  title: 'Key Holder',
  description: 'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
  price: 30,
  discountPercentage: 2.92,
  rating: 4.92,
  stock: 54,
  brand: 'Golden',
  category: 'home-decoration',
  thumbnail: 'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
  images: [
    'https://cdn.dummyjson.com/product-images/30/1.jpg',
    'https://cdn.dummyjson.com/product-images/30/2.jpg',
    'https://cdn.dummyjson.com/product-images/30/3.jpg',
    'https://cdn.dummyjson.com/product-images/30/thumbnail.jpg',
  ],
};

export default function ShopPage() {
  const [prodArr, setProdArr] = useState([]);
  const [cartArr, setCartArr] = useState([]);
  console.table(cartArr);
  const cartObj = {
    cItemId: genId(),
    prodId: 1,
    title: 'Iphone',
    qty: 1,
    priceUnit: 799,
    img: 'blabla.jpg',
    priceTotal: 799,
  };

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
  const removeFromCart = (itemIdToRemove) => {
    // pasalinti objeka is cartArr
  };

  // console.log('prodArr ===', prodArr);
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = () => {
    axios
      .get(localProductsUrl)
      .then((resp) => {
        // console.log('resp.data ===', resp.data);
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
      <h1 className='about-heading text-4xl font-bold text-center mt-10'>
        {' '}
        <SiHomeassistantcommunitystore className='inline-block' size={'40px'} /> Shop
      </h1>
      <p className='text-lg text-center my-4'>
        This is just like <strong>Oboulys</strong> Shop
      </p>

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
              <CartItem item={cObj} />
            </li>
          ))}
        </ul>
      )}

      <ul className='grid grid-cols-3'>
        {prodArr.map((pObj) => (
          <li key={pObj.id}>
            <ShopListItem onAddToCart={addToCart} item={pObj} />
          </li>
        ))}
      </ul>
    </div>
  );
}

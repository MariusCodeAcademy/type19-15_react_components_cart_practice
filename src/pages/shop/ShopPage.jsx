import axios from 'axios';
import { useEffect, useState } from 'react';
import { localProductsUrl, productsUrl } from '../../config';
import ShopListItem from '../../components/shop/ShopListItem';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import CartItem from '../../components/cart/CartItem';
import { useCartCtx } from '../../store/CartProvider';

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
  const [catFilterValue, setCatFilterValue] = useState('');

  const { add } = useCartCtx();

  const allCategories = [];

  const ourSet = new Set();

  prodArr.forEach((pObj) => {
    ourSet.add(pObj.category);
    // jei jau tokia kategorija yra masyve
    if (allCategories.includes(pObj.category)) {
      return;
    }
    allCategories.push(pObj.category);
  });
  console.log('ourSet ===', ourSet);
  console.log('allCategories ===', allCategories);

  // console.table(prodArr);
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

  // jei turim catFilterValue tai mapinam per prafiltruota prodArr
  const filtered = '';
  // jei catFilterValue '' tai per prodArr

  return (
    <div className='container'>
      <h1 className='about-heading text-4xl font-bold text-center mt-10'>
        {' '}
        <SiHomeassistantcommunitystore className='inline-block' size={'40px'} /> Shop
      </h1>
      <p className='text-lg text-center my-4'>
        This is just like <strong>Oboulys</strong> Shop
      </p>

      <fieldset>
        {/* susieti su state */}
        <select>
          {allCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
          <option value=''>Laptop</option>
        </select>
      </fieldset>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {prodArr.map((pObj) => (
          <li key={pObj.id}>
            <ShopListItem onAddToCart={() => add(pObj)} item={pObj} />
          </li>
        ))}
      </ul>
    </div>
  );
}

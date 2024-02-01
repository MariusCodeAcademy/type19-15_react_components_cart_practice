import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/layout/Header';
import ShopPage from './pages/shop/ShopPage';

export default function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<ShopPage />} />
        {/* <Route path='*' element={<NoMatch />} /> */}
      </Routes>
    </div>
  );
}

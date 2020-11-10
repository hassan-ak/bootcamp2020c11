import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './components/cart/Cart';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { Home } from './components/home/Home';
import { Products } from './components/products/Products';

function App() {
  return (
    <div>
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="products" element={<Products/>} />
            <Route path="cart" element={<Cart/>} />
            <Route path="*" element={<ErrorPage />} />
    </Routes>      
    </div>

  );
}

export default App;

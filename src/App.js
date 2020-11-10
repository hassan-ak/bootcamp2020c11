import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './components/cart/Cart';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { Home } from './components/home/Home';
import { Gents } from './components/products/Gents';
import { Ladies } from './components/products/Ladies';
import { Products } from './components/products/Products';
import { GlobalDataProvider } from './functionalComponents/DataProvider';

function App() {
  return (
    <GlobalDataProvider>
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="products" element={<Products/>}/>
            <Route path="products/gents" element={<Gents />} />
            <Route path="products/ladies" element={<Ladies />} />
            <Route path="cart" element={<Cart/>} />
            <Route path="*" element={<ErrorPage />} />
    </Routes>      
    </GlobalDataProvider>

  );
}

export default App;

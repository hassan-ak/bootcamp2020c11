import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Cart } from './components/cart/Cart';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { Home } from './components/home/Home';
import { Gents } from './components/products/Gents';
import { Ladies } from './components/products/Ladies';
import { Product } from './components/products/Product';
import { Products } from './components/products/Products';
import { SelectedProduct } from './components/products/SelectedProduct';
import { GlobalDataProvider } from './functionalComponents/DataProvider';

function App() {
  return (
    <GlobalDataProvider>
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="products" element={<Products/>}/>
            <Route path="products/gents" element={<SelectedProduct />}>
              <Route path="/" element={<Gents/>}/>
              <Route path=":slug" element={<Product></Product>}></Route>
            </Route>
            <Route path="products/ladies" element={<SelectedProduct />}>
              <Route path="/" element={<Ladies/>}/>
              <Route path=":slug" element={<Product></Product>}></Route>
            </Route>
            <Route path="cart" element={<Cart/>} />
            <Route path="*" element={<ErrorPage />} />
    </Routes>      
    </GlobalDataProvider>

  );
}

export default App;

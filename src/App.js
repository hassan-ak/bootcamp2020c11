import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ErrorPage } from './components/errorPage/ErrorPage';
import { Home } from './components/home/Home';
import { Products } from './components/products/Products';

function App() {
  return (
    <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="products" element={<Products/>} />
            <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

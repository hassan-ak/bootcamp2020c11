import { Link, Route, Routes } from 'react-router-dom';
import { About } from './About';
import './App.css';
import { Error } from './Error';
import { Home } from './Home';
import { Products } from './Products';

function App() {
  return (
    <div>
      <h1>WellCome</h1>
      <div>
        <Link to="about">About</Link>
        {"    "}
        {"    "}
        <Link to="home">Home</Link>
        {"    "}
        {"    "}
        <Link to="products">Products</Link>
        {"    "}
        {"    "}
        <Link to="products/mobile">Mobile</Link>
        {"    "}
        {"    "}
        <Link to="products/laptop">Laptop</Link>
      </div>
      <Routes>
        <Route path="/"></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="products/:productId" element={<Products></Products>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Home from './Home';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Cart from './Cart';
import Tst from './Tst';
import Product from './Product';
function App() {
  return (
    <Routes>
    <Route exact path='*' element={< Home />}></Route>
    <Route exact path='/cart' element={<Cart/>}></Route>
    <Route exact path='/product/:id' element={<Product/>}></Route>
    <Route exact path='/tst' element={<Tst/>}></Route>

</Routes>
  

  );
}

export default App;

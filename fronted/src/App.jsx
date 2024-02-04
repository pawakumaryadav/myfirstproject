import  Shop  from './Pages/Shop';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginShignup from './Pages/LoginShignup';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>men
        <Route path='/' element={<Shop/>}/>men
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginShignup/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

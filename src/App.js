import './App.css';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';



function App() {


  const [cart,setCart]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/cart/')
    .then((response)=> setCart((response.data) ? response.data:[]))
  },[])

  const [product,setProduct]=useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products/')
    .then((response)=> setProduct((response.data) ? response.data:[]))
  },[])

 

  return (
    <BrowserRouter>
    <Navbar></Navbar>


    <div className="App">
      
      <Routes>
     <Route path = '/'></Route>   
     <Route path='/product' element={<Products product={product}cart={cart} ></Products>}></Route>
     <Route path='/cart' element={<Cart product={product}cart={cart} setCart={setCart} ></Cart>}></Route>
     {/* <Route path='/login' element={<Login login={login}></Login>}></Route> */}
     
     
     
     </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
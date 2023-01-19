import { useEffect, useState } from 'react';
import Products from './components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';


function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/product/")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            setProducts(data)
        });
    console.log('use effect called!')

    fetch("http://localhost:8000/cart/")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            setCart(data)
        });
    console.log('use effect called!')
}, [])


    function onDelete(id) {
        fetch("http://localhost:8000/cart/" + id, { method: 'DELETE' })

        setCart(cart.filter(productincart => productincart.id !== id))
    }


return (
<div className="App">
  <BrowserRouter>
    <Header/>
    <Routes>
                    <Route path="/products" element={
                        <Products products={products}/>}/>
                    <Route path="/cart" element={
                        <Cart cart={cart} onDelete={onDelete}/>} />
                </Routes>
    

    </BrowserRouter>


</div>
);
}

export default App;
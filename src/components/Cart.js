import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import axios from 'axios';
import Cartlist from './Cartlist';

function cart({ cart, setCart }) {
  return (
    <div>
      {cart.map((_products, index) => (
        <CartlistRow
          key={index}
          products={cart.slice(index * 4, index * 4 + 4)}
          setCart={setCart}
        />
      ))}
    </div>
  );
}

function CartlistRow({ products, setCart }) {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(product => (
          <div style={{ width: "25%" }}>
            <Cartlist product={product} setCart={setCart}/>
          </div>
        ))}
      </div>
    );
  }



export default cart
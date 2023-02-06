import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Cartlist from './Cartlist';

function cart({product,cart, setCart}) {
    


        return (
        
        <div>
            
            {cart.map(product => <Cartlist key={product.id} product={product} cart={cart} setCart={setCart}/>)}

          
            
        </div>
        )
    }
  
  
export default cart
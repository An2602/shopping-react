import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';




function Cartlist({ product, setCart }) {
    const [quantity, setQuantity] = useState(1)


    function Deletefromcart(productId) {
        axios.delete(`http://127.0.0.1:8000/deletecart/${productId}`)
            .then(response => {
                setCart(products => {
                    return products.filter(product => {
                        return product.product.id !== productId
                    })
                })

            })
        console.log(productId);
    }

    function updatecart(productId, quantity, cartId) {
        axios.put(`http://127.0.0.1:8000/updatecart/${cartId}/`, {
          "id": cartId,
          "product": productId,
          quantity: quantity
        })
        .then(response => {
          setCart(prevCart => {
            const updatedCart = [...prevCart];
            const productIndex = updatedCart.findIndex(cartItem => cartItem.id === cartId);
            const updatedCartItem = { ...updatedCart[productIndex], quantity };
            updatedCart[productIndex] = updatedCartItem;
            return updatedCart;
          });
        })
        .catch(error => {
          console.log(error);
        });
      }


    function plusclick() {
        setQuantity(quantity + 1)
    }


    function menosclick() {
        setQuantity(quantity - 1)
    }

    return (

        <div>
            <Card style={{ width: '18rem', backgroundColor: 'lightblue' }}>
                <Card.Img variant="top" src={`http://127.0.0.1:8000/static${product.product.image}`} alt={product.product.name} style={{ height: 300, width: '100%' }} />
                <Card.Body>
                    <Card.Title>{product.product.name}</Card.Title>
                    <Card.Text>
                        Price for one: {product.product.price}$<br></br>
                        Quantity: {product.quantity}<br></br>
                    </Card.Text>
                    <Button variant="danger" onClick={() => Deletefromcart(product.product.id)}>Delete</Button>
                    <Button variant="success" onClick={() => updatecart(product.product.id, quantity,product.id)}>Update quantity</Button><br></br>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Button variant="dark" onClick={plusclick}>+</Button>
                        <input type='text' value={quantity}></input>
                        <Button variant="dark" onClick={menosclick}>-</Button>
                    </div>
                </Card.Body>
            </Card>           

        </div>
    )
}

export default Cartlist
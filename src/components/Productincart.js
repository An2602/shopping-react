import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';



function Productincart({ productincart, onDelete }) {
    return (
        <Card style={{ width: '18rem', margin: '0.1rem', padding: '0.1rem' }}>
            <img src={'http://127.0.0.1:8000/static' + productincart.product.image} alt={productincart.product.name} 
            style={{ width: '285px', height: '250px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{productincart.product.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>price: {productincart.product.price}$</ListGroup.Item>
                <ListGroup.Item>quantity: {productincart.quantity}</ListGroup.Item>
                <ListGroup.Item>total price: {productincart.quantity*productincart.product.price}.00$</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button onClick={()=>onDelete(productincart.id)} variant="primary">Remove from cart</Button>
            </Card.Body>
        </Card>

    );
}

export default Productincart


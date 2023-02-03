import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function Product({ product, sendToCart }) {
    return (
        <Card style={{ width: '18rem', margin: '0.1rem', padding: '0.1rem' }}>
            <img src={'http://127.0.0.1:8000/static' + product.image} alt={product.name}
                style={{ width: '285px', height: '250px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{product.description}</ListGroup.Item>
                <ListGroup.Item>{product.price}$</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button onClick={() => sendToCart(product.id)} variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>

    );
}

export default Product


import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function Product({ product }) {
    return (
        <Card style={{ width: '18rem', margin: '0.1rem', padding: '0.1rem' }}>
            <img src={'http://127.0.0.1:8000/static' + product.image} alt={product.name} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{product.description}</ListGroup.Item>
                <ListGroup.Item>{product.price}$</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>

    );
}

export default Product


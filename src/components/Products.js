import Product from "./Product"
import { Row, Col } from 'react-bootstrap';



function Products({products, sendToCart}) {
  return (
    <Row className="justify-content-around">
      {products.map((product, index) => (
        <Col key={product.id} xs={6} md={3} className="mb-2">
          <Product product={product} sendToCart={sendToCart} />
        </Col>
      ))}
    </Row>
  )
}

export default Products
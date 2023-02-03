import Productincart from "./Productincart"
import { Row, Col } from 'react-bootstrap';


function Cart({cart, onDelete }) {
  return (
    <Row className="justify-content-around">
      {cart.map((productincart, index) => (
        <Col key={productincart.id} xs={6} md={3} className="mb-2 custom-col">
          <Productincart productincart={productincart} onDelete={onDelete}/>
        </Col>
      ))}
    </Row>
  )
}

export default Cart
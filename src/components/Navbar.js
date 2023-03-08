import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCartPlus } from "react-icons/fa";


function Navbarstyle() {

    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Amit's Shop</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/product">Products</Nav.Link>
                <Nav.Link href="/cart">Cart<FaCartPlus/></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
    
        </>
      );
    }


export default Navbarstyle;
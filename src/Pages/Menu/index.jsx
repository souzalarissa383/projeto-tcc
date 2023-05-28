import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function MenuNavbar() {
  return (
    <router>
      <div>
        <Navbar bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Para você</Nav.Link>
                <Nav.Link href="#action2">Para empresas</Nav.Link>
                
                <Nav.Link  href="#action3" to={"/login"}>Login</Nav.Link>
              </Nav>

             
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div></div>
    </router>
  );
}

export default MenuNavbar;

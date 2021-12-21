import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WeCare</Navbar.Brand>
          <Nav className="me-auto space-x-5">
            <Link to={"/counter"} className="no-underline text-gray-400  ">
              Counter{" "}
            </Link>
            <Link to={"/login"} className="no-underline text-gray-400">
              login{" "}
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

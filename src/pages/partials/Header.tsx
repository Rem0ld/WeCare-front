import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdLogout } from 'react-icons/md';
import Auth from "../../services/Auth";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/slices/userSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const onLogout = () => {
    Auth.logout();
    dispatch(logout({}))
  }

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
            <Link to={""} onClick={onLogout}><MdLogout />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

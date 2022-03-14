import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import Auth from "../../services/Auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/slices/userSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const onLogout = () => {
    Auth.logout();
    dispatch(logout());
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">WeCare</Navbar.Brand>
          <Nav className="me-auto space-x-5">
            <Link to={"/login/patient"} className="no-underline text-gray-400">
              Login patient
            </Link>
            <Link to={"/login/doctor"} className="no-underline text-gray-400">
              Login docteur
            </Link>
            {user.isLogged && (
              <Link to={""} onClick={onLogout}>
                <MdLogout />
              </Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

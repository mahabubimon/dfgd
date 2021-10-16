import React from "react";
import { Button, Container, Nav, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const headerLink = { color: "#000", textDecoration: "none" };

  const { user, logout } = useAuth();

  return (
    <header>
      <Navbar fixed="top" bg="light" variant="light">
        <Container>
          <NavLink to="/" style={headerLink}>
            <img
              className="w-25 img-fluid"
              src="https://i.ibb.co/XCNDTXt/logo2.png"
              alt="logo"
            />
          </NavLink>
          <Nav className="ms-auto">
            <Stack direction="horizontal" gap={4}>
              <NavLink to="/home" style={headerLink}>
                Home
              </NavLink>
              <NavLink to="/foods" style={headerLink}>
                Foods
              </NavLink>
              <NavLink
                to="/cart"
                style={headerLink}
                className="fs-4 text-danger"
              >
                <AiOutlineShoppingCart />
              </NavLink>
              {user.displayName ? (
                <div className="d-flex">
                  <img
                    className="img-fluid rounded-circle w-25"
                    src={user.photoURL}
                    alt=""
                  />
                  <span> {user.displayName}</span>
                  <Button className="btn-danger ms-4" onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <NavLink
                  className="bg-danger px-3 py-1 rounded"
                  to="/login"
                  style={headerLink}
                >
                  Login
                </NavLink>
              )}
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

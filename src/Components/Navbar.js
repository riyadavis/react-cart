import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

const NavMenu = styled.span`
  font-size: 14px;
  padding: 0px 5px;
`;
const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand
      style={{
        color: "#4b7df2",
        fontWeight: "bold",
        fontFamily: "cursive",
        fontSize: "25px"
      }}
    >
      Shoppers Stop
    </Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink exact to="/" activeStyle={{ color: "#06c9c9" }}>
        <NavMenu>Products</NavMenu>
      </NavLink>
      <NavLink to="/cart" activeStyle={{ color: "#06c9c9" }}>
        <NavMenu>Cart</NavMenu>
      </NavLink>
    </Nav>
  </Navbar>
);
export default NavBar;

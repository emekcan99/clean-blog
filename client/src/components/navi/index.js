import React from "react";
import { Link } from "react-router-dom";
import { NavItem, Nav, NavLink, Container } from "reactstrap";


import './styles.css'

function Navi() {
  return (
    <div>
      <Container className=" py-sm-2 Navi">
      <Nav card fill className="Navi">
        <NavItem >
          <Link to="/" className="link">Clean Blog </Link>
        </NavItem>
        <NavItem>
          <Link to="/add-post" className="link" >Add a post</Link>    
        </NavItem>
        <NavItem>
          <Link to="/profile" className="link" >Profile</Link>
        </NavItem>

      </Nav>
      </Container>
    </div>
  );
}

export default Navi;

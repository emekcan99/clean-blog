import React from "react";
import { Link } from "react-router-dom";
import { NavItem, Nav, NavLink } from "reactstrap";


import './styles.css'

function Navi() {
  return (
    <div>
      <Nav card fill className="nav">
        <NavItem className="nav-item">
          <Link to="/" className="link">Clean Blog </Link>
        </NavItem>
        <NavItem>
          <Link to="/add-post" className="link" >add a post</Link>    
        </NavItem>
        <NavItem>
          <Link to="/profile" className="link" >profile</Link>
        </NavItem>

      </Nav>
    </div>
  );
}

export default Navi;

import React, { Component } from 'react';
import {Link, IndexLink} from "react-router";
import { Nav, NavItem, Navbar, Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              Главная
            </Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
         <li key={1} role="presentation" >
           <Link to="/book">
             Books
           </Link>
         </li>
         <li key={2} role="presentation" >
           <Link to="/autor">
             Autors
           </Link>
         </li>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;

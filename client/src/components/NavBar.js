import React from 'react';
import {Nav, NavItem } from 'react-bootstrap';

const NavBar = (props) => {
    function handleSelect(selectedKey) {
      alert('selected ' + selectedKey);
    }

return(
  <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
    <NavItem eventKey={1} href="/home">Legejo</NavItem>
    <NavItem eventKey={2} title="Item">Words</NavItem>
    <NavItem eventKey={3} disabled>Your Account</NavItem>
  </Nav>

  )

};

export default NavBar;

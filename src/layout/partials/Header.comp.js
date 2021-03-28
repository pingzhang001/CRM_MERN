import React from 'react'
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap'
import panda from "../../assets/img/panda.webp";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      bg="info"
      expand="md"
    >
      <Navbar.Brand>
        <img src={panda} alt="logo" width="65px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/dashboard">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

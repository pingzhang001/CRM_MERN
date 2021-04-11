import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {useHistory} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import panda from "../../assets/img/panda.webp";
import './header.comp.css'

export default function Header() {
  const history = useHistory()
  const logMeOut = () => {
    history.push("/")
  }
  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      bg="info"
      expand="md"
      style={{'backgroundColor': 'black'}}
    >
      <Navbar.Brand>
        <img src={panda} alt="logo" width="65px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          {/* <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="">Logout</Link> */}
          <LinkContainer to="/dashboard">
            <Nav.Link >Dashboard</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/tickets">
            <Nav.Link >Tickets</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

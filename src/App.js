import "bootstrap/dist/css/bootstrap.min.css"
import React, { Component } from "react"
import Container from "react-bootstrap/TabContainer"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import Userhome from "./components/comp1"
import Subscribe from "./components/subscribe"
// import NavDropdown from "react-bootstrap/NavDropdown"
export default class App extends Component {
  render() {
    return <BrowserRouter>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Your Jaunt</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">Explore</Link>
              <Link className="nav-link" to="/subscribe">Subscribe</Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Switch>
        <Route exact path="/" component={Userhome}/>
        <Route exact path="/subscribe" component={Subscribe}/>
      </Switch>
    </BrowserRouter>
  }
}
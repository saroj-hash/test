import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/TabContainer"
import Badge from 'react-bootstrap/Badge'
import React, { Component, Fragment } from "react"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Home from "./components/home"
import Blogs from "./components/blogs"
import Subscribe from "./components/subscribe"
export default class App extends Component {
  render() {
    return <Container>
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
          <Link className="navbar-brand" to="/home">
            <Typography className="nav-link" variant="h5" component="h5">Wolfwalker's Journal</Typography>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/blogs">
                <Typography variant="h6" component="h6">Blogs</Typography>
              </Link>
              <Link className="nav-link" to="/subscribe">
                <Typography variant="h6" component="h6">Subscribe</Typography>
              </Link>
            </Nav>
           
              <Nav>
                <Link className="nav-link">
                  <Badge pill variant="light"><InstagramIcon /></Badge>
                </Link>
                <Link className="nav-link">
                  <Badge pill variant="light"><FacebookIcon /></Badge>
                </Link>
                <Link className="nav-link">
                  <Badge pill variant="light"><TwitterIcon /></Badge>
                </Link>
              </Nav>
            
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/subscribe" component={Subscribe} />
          <Redirect from="/*" to="/home" />
        </Switch>
      </BrowserRouter>
    </Container>


  }
}


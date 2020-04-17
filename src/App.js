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
import Thisshalltoopass from "./components/thisshalltoopasscomp"
import Autumn from "./components/autumncomp"
import Choices from "./components/choicescomp"
import Deardad from "./components/deardadcomp"
import Dearrachel from "./components/dearrachelcomp"
import Dearfriends from "./components/dearfriendscomp"
import Fear from "./components/fearcomp"
import ICDI from "./components/icantdoitcomp"
import Life from "./components/lifecomp"
import MFWS from "./components/myfavwhitesneakercomp"
import SLove from "./components/selflovecomp"
import Size from "./components/sizecomp"
import THM from "./components/thehappinessmatracomp"
import TQM from "./components/thequarantinemantracomp"
import Tright from "./components/turnrightcomp"
export default class App extends Component {
  state={
      style1 : {color:"orange"},
      style2 : {backgroundColor:"orange"},
      style3 : {color:"orange"},
      style4 : {color:"orange"},
      style5 : {backgroundColor:"orange"},
      style6 : {backgroundColor:"orange"},
      style7 : {backgroundColor:"orange"}
  }
  changeStyle1 = () =>{
    this.setState({
      style1 : {color:"lavender"}
    })
  }
  changeStyle2 = () => {
    this.setState({
      style1 : {color:"orange"}
    })
  }
  changeStyle3 = () =>{
    this.setState({
      style2 : {backgroundColor:"lavender"}
    })
  }
  changeStyle4 = () => {
    this.setState({
      style2 : {backgroundColor:"orange"}
    })
  }
  changeStyle5 = () =>{
    this.setState({
      style3 : {color:"lavender"}
    })
  }
  changeStyle6 = () => {
    this.setState({
      style3 : {color:"orange"}
    })
  }
  changeStyle7 = () =>{
    this.setState({
      style4 : {color:"lavender"}
    })
  }
  changeStyle8 = () => {
    this.setState({
      style4 : {color:"orange"}
    })
  }
  changeStyle9 = () =>{
    this.setState({
      style5 : {backgroundColor:"lavender"}
    })
  }
  changeStyle10 = () => {
    this.setState({
      style5 : {backgroundColor:"orange"}
    })
  }
  changeStyle11 = () =>{
    this.setState({
      style6 : {backgroundColor:"lavender"}
    })
  }
  changeStyle12 = () => {
    this.setState({
      style6 : {backgroundColor:"orange"}
    })
  }
  changeStyle13 = () =>{
    this.setState({
      style7 : {backgroundColor:"lavender"}
    })
  }
  changeStyle14 = () => {
    this.setState({
      style7 : {backgroundColor:"orange"}
    })
  }
  render() {
    return <Fragment>
      
        <BrowserRouter>
          <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"black", borderBottom:"1px solid orange"}} sticky="top">
            <Link className="navbar-brand nav-link" to="/home" >
              <Typography variant="h5" component="h5" style={this.state.style1} onMouseEnter={this.changeStyle1} onMouseLeave={this.changeStyle2} >Wolfwalker's Journal</Typography>
            </Link>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={this.state.style2} />
            
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/blogs">
                  <Typography variant="h6" component="h6" style={this.state.style3} onMouseEnter={this.changeStyle5} onMouseLeave={this.changeStyle6} >Blogs</Typography>
                </Link>
                <Link className="nav-link" to="/subscribe">
                  <Typography variant="h6" component="h6" style={this.state.style4} onMouseEnter={this.changeStyle7} onMouseLeave={this.changeStyle8} >Subscribe</Typography>
                </Link>
              </Nav>

              <Nav>
                <div className="row">
                  &nbsp;&nbsp;
                <Link className="nav-link">
                  <Badge pill variant="light" style={this.state.style5} onMouseEnter={this.changeStyle9} onMouseLeave={this.changeStyle10}><InstagramIcon /></Badge>
                </Link>&nbsp;&nbsp;
                <Link className="nav-link">
                  <Badge pill variant="light" style={this.state.style6} onMouseEnter={this.changeStyle11} onMouseLeave={this.changeStyle12}><FacebookIcon /></Badge>
                </Link>&nbsp;&nbsp;
                <Link className="nav-link">
                  <Badge pill variant="light" style={this.state.style7} onMouseEnter={this.changeStyle13} onMouseLeave={this.changeStyle14}><TwitterIcon /></Badge>
                </Link>
                </div>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/blogs/thisshalltoopass" component={Thisshalltoopass} />
            <Route exact path="/blogs/autumn" component={Autumn} />
            <Route exact path="/blogs/deardad" component={Deardad} />
            <Route exact path="/blogs/dearrachel" component={Dearrachel} />
            <Route exact path="/blogs/dearfriends" component={Dearfriends} />
            <Route exact path="/blogs/fear" component={Fear} />
            <Route exact path="/blogs/icantdoit" component={ICDI} />
            <Route exact path="/blogs/life" component={Life} />
            <Route exact path="/blogs/myfavwhitesneaker" component={MFWS} />
            <Route exact path="/blogs/selflove" component={SLove} />
            <Route exact path="/blogs/doessizedefinepoewer" component={Size} />
            <Route exact path="/blogs/thehappinessmantra" component={THM} />
            <Route exact path="/blogs/thequarantinemantra" component={TQM} />
            <Route exact path="/blogs/choices" component={Choices} />
            <Route exact path="/blogs/turnright" component={Tright} />
            <Route exact path="/subscribe" component={Subscribe} />
            <Redirect from="/*" to="/home" />
          </Switch>
        </BrowserRouter>
    
    </Fragment>

  }
}


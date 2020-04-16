import React, { Component, Fragment } from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography, Tooltip } from "@material-ui/core"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import ScrollUpButton from "react-scroll-up-button"
import Badge from "react-bootstrap/Badge"
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import FormHelperText from "@material-ui/core/FormHelperText"
import InputLabel from "@material-ui/core/InputLabel"
import IconButton from "@material-ui/core/IconButton"
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import Container from "react-bootstrap/TabContainer"
import Row from "react-bootstrap/Row"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

export default class Footercomp extends Component {
    state={
        div1: {border:"1px solid black"},
        div2: {border:"1px solid black"},
        div3: {border:"1px solid black"},
        style3 : {color:"orange"},
        style4 : {color:"orange"},
        style5 : {backgroundColor:"orange"},
        style6 : {backgroundColor:"orange"},
        style7 : {backgroundColor:"orange"}
    }
    
    styleChange1Div2 = () => {
        this.setState({
            div2:{border:"1px solid orange"}
        })
    }
    styleChange2Div2 = () => {
        this.setState({
            div2:{border:"1px solid black"}
        })
    }
    
    changeStyle5 = () =>{
        this.setState({
          style3 : {color:"white"},
          div1: {border:"1px solid orange"}

        })
      }
      changeStyle6 = () => {
        this.setState({
          style3 : {color:"orange"},
          div1: {border:"1px solid black"}
        })
      }
      changeStyle7 = () =>{
        this.setState({
          style4 : {color:"white"},
          div3: {border:"1px solid orange"}
        })
      }
      changeStyle8 = () => {
        this.setState({
          style4 : {color:"orange"},
          div3: {border:"1px solid black"}
        })
      }
      changeStyle9 = () =>{
        this.setState({
          style5 : {backgroundColor:"white"}
        })
      }
      changeStyle10 = () => {
        this.setState({
          style5 : {backgroundColor:"orange"}
        })
      }
      changeStyle11 = () =>{
        this.setState({
          style6 : {backgroundColor:"white"}
        })
      }
      changeStyle12 = () => {
        this.setState({
          style6 : {backgroundColor:"orange"}
        })
      }
      changeStyle13 = () =>{
        this.setState({
          style7 : {backgroundColor:"white"}
        })
      }
      changeStyle14 = () => {
        this.setState({
          style7 : {backgroundColor:"orange"}
        })
      }
    render() {
        return <Fragment>
            <Container>
            <BrowserRouter>
            <Navbar collapseOnSelect expand="lg" sticky="bottom"  style={{width:"100%",backgroundColor:"black",borderTop:"1px solid orange"}}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:"orange"}} />
            <div className="col-md-4" style={this.state.div1} >
            <br/>
            <div className="offset-md-3 col-md-6 offset-md-3">
            <Navbar.Collapse id="responsive-navbar-nav" >
                    <Link className="nav-link">
                        <Typography variant="h6" component="h6" className="text-center" style={this.state.style3} onMouseEnter={this.changeStyle5} onMouseLeave={this.changeStyle6}>
                            About Us
                        </Typography>
                    </Link>
            </Navbar.Collapse>
            </div>
            
           
            <br/>
            </div> 
            <div className="col-md-4" style={this.state.div2} onMouseEnter={this.styleChange1Div2} onMouseLeave={this.styleChange2Div2}>
            <br/>
            <div className="offset-md-3 col-md-6 offset-md-3">
            <Navbar.Brand>
            <Typography variant="h5" component="h5" style={{color:"orange"}}>
               Wolfwalker's Journal
            </Typography>
            <Row>
            <Link className="nav-link">
                <Badge pill variant="light" style={this.state.style5} onMouseEnter={this.changeStyle9} onMouseLeave={this.changeStyle10}><InstagramIcon /></Badge>
            </Link>&nbsp;&nbsp;
            <Link className="nav-link">
                <Badge pill variant="light" style={this.state.style6} onMouseEnter={this.changeStyle11} onMouseLeave={this.changeStyle12}><FacebookIcon /></Badge>
            </Link>&nbsp;&nbsp;
            <Link className="nav-link">
                <Badge pill variant="light" style={this.state.style7} onMouseEnter={this.changeStyle13} onMouseLeave={this.changeStyle14}><TwitterIcon /></Badge>
            </Link>
            </Row>
            </Navbar.Brand>
            </div>
            <br/>
            </div> 
            <div className="col-md-4" style={this.state.div3}>
            <br/>
            <div className="offset-md-3 col-md-6 offset-md-3">
            <Navbar.Collapse id="responsive-navbar-nav" >
                    <Link className="nav-link">
                        <Typography variant="h6" component="h6" className="text-center" style={this.state.style4} onMouseEnter={this.changeStyle7} onMouseLeave={this.changeStyle8}>
                            Contact us
                        </Typography>
                    </Link>
            </Navbar.Collapse>
            </div>
            
      
            <br/>
            </div> 
            <ScrollUpButton/>
            </Navbar>
            </BrowserRouter>
            </Container>
        </Fragment>
    }
}

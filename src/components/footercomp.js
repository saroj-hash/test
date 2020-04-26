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
import BootstrapButton from "react-bootstrap/Button"
import CancelIcon from '@material-ui/icons/Cancel'
export default class Footercomp extends Component {
    state={
        showmore : false,
        style1 : {
          border : "1px solid black"
        },
        style11 : {
          border : "1px solid black"
        },
        style2 : {
          border : "1px solid black"
        },
        style21 : {
          border : "1px solid black"
        },
        style22 : {
          border : "1px solid black"
        },
        styleIcon1 : {backgroundColor : "orange"},
        styleIcon2 : {backgroundColor : "orange"},
        styleIcon3 : {backgroundColor : "orange"},
        styleText1 : {color : "orange"},
        styleText2 : {color : "orange"}
    }
    style1Change1 = () => {
      this.setState({
        style1 : {
          border : "1px solid orange"
        }
      })
    }

    style1Change2 = () => {
      this.setState({
        style1 : {
          border : "1px solid black"
        }
      })
    }

    style11Change1 = () => {
      this.setState({
        style11 : {
          border : "1px solid orange"
        }
      })
    }

    style11Change2 = () => {
      this.setState({
        style11 : {
          border : "1px solid black"
        }
      })
    }

    style21Change1 = () => {
      this.setState({
        style21 : {
          border : "1px solid orange"
        }
      })
    }

    style21Change2 = () => {
      this.setState({
        style21 : {
          border : "1px solid black"
        }
      })
    }

    style22Change1 = () => {
      this.setState({
        style22 : {
          border : "1px solid orange"
        }
      })
    }

    style22Change2 = () => {
      this.setState({
        style22 : {
          border : "1px solid black"
        }
      })
    }

    style2Change1 = () => {
      this.setState({
        style2 : {
          border : "1px solid orange"
        }
      })
    }

    style2Change2 = () => {
      this.setState({
        style2 : {
          border : "1px solid black"
        }
      })
    }

    styleIcon1Change1 = () => {
      this.setState({
        styleIcon1 : {backgroundColor : "lavender"}
      })
    }
    styleIcon1Change2 = () => {
      this.setState({
        styleIcon1 : {backgroundColor : "orange"}
      })
    }

    styleIcon2Change1 = () => {
      this.setState({
        styleIcon2 : {backgroundColor : "lavender"}
      })
    }
    styleIcon2Change2 = () => {
      this.setState({
        styleIcon2 : {backgroundColor : "orange"}
      })
    }
   
    styleIcon3Change1 = () => {
      this.setState({
        styleIcon3 : {backgroundColor : "lavender"}
      })
    }
    styleIcon3Change2 = () => {
      this.setState({
        styleIcon3 : {backgroundColor : "orange"}
      })
    }

    styleText1Change1 = () => {
      this.setState({
        styleText1 : {color : "lavender"},
        style21 : {border : "1px solid lavender"}
      })
    }
    styleText1Change2 = () => {
      this.setState({
        styleText1 : {color : "orange"},
        style21 : {border : "1px solid orange"},
        
      })
    }

    styleText2Change1 = () => {
      this.setState({
        styleText2 : {color : "lavender"},
        style22 : {border : "1px solid lavender"}
      })
    }
    styleText2Change2 = () => {
      this.setState({
        styleText2 : {color : "orange"},
        style22 : {border : "1px solid orange"}
      })
    }
    

    handleShowMore = () => {
      this.setState({
        showmore : true,
        style1 : {
          border : "1px solid black"
        },
        style11 : {
          border : "1px solid black"
        },
        style2 : {
          border : "1px solid black"
        },
        style21 : {
          border : "1px solid black"
        },
        style22 : {
          border : "1px solid black"
        },
        styleIcon1 : {backgroundColor : "orange"},
        styleIcon2 : {backgroundColor : "orange"},
        styleIcon3 : {backgroundColor : "orange"},
        styleText1 : {color : "orange"},
        styleText2 : {color : "orange"}
      })
    }

    handleShowless = () => {
      this.setState({
        showmore : false,
        style1 : {
          border : "1px solid black"
        },
        style11 : {
          border : "1px solid black"
        },
        style2 : {
          border : "1px solid black"
        },
        style21 : {
          border : "1px solid black"
        },
        style22 : {
          border : "1px solid black"
        },
        styleIcon1 : {backgroundColor : "orange"},
        styleIcon2 : {backgroundColor : "orange"},
        styleIcon3 : {backgroundColor : "orange"},
        styleText1 : {color : "orange"},
        styleText2 : {color : "orange"}
      })
    }

    
    render() {
        return <Fragment>
            <Container>
            {
              this.state.showmore === false ? 
              <div style = {{ backgroundColor : "black", borderTop : "1px solid orange" }} className="col-md-12">
                <br/><br/>
                  <div className = "offset-md-4 col-md-4 offset-md-4" style = {this.state.style1} onMouseEnter = {this.style1Change1} onMouseLeave = {this.style1Change2}>
                    <br/><br/>
                    <Typography className="text-center" variant = "h3" component="h3" style={{color : "orange"}}>
                      Wolfwalker's Journal
                    </Typography>
                    <Row>
                    <div className="col-md-4">
                    <a target="_blank" className="nav-link text-center" href="https://twitter.com/login">
                      <Badge pill variant="light" style={this.state.styleIcon1} onMouseEnter = {this.styleIcon1Change1} onMouseLeave = {this.styleIcon1Change2}>
                        <InstagramIcon/>
                      </Badge>
                    </a>
                    </div>
                    <div className="col-md-4">
                    <a target="_blank" className="nav-link text-center" href="https://twitter.com/login">
                      <Badge pill variant="light" style={this.state.styleIcon2} onMouseEnter = {this.styleIcon2Change1} onMouseLeave = {this.styleIcon2Change2}>
                        <FacebookIcon/>
                      </Badge>
                    </a>
                    </div>
                    <div className="col-md-4">
                    <a target="_blank" className="nav-link text-center" href="https://twitter.com/login">
                      <Badge pill variant="light" style={this.state.styleIcon3} onMouseEnter = {this.styleIcon3Change1} onMouseLeave = {this.styleIcon3Change2}>
                        <TwitterIcon/>
                      </Badge>
                    </a>
                    </div>
                    </Row>
                    <br/>
                    <Typography className="text-center">
                      <BootstrapButton variant="outline-warning" onClick = {this.handleShowMore}>
                        SHOW MORE
                      </BootstrapButton>
                    </Typography>
                    <br/><br/>
                </div>
                <br/><br/>
              </div>:
              <div style = {{ backgroundColor : "black", borderTop : "1px solid orange" }} className="col-md-12">
                <br/><br/>
                <Row>
                <div className = "col-md-4" style = {this.state.style11} onMouseEnter = {this.style11Change1} onMouseLeave = {this.style11Change2}>
                    <br/><br/>
                    <Typography className="text-center" variant = "h3" component="h3" style={{color : "orange"}}>
                      Wolfwalker's Journal
                    </Typography>
                    <Row>
                    <div className="col-md-4" >
                    <a target="_blank" className="nav-link text-center" href="https://twitter.com/login">
                      <Badge pill variant="light" style={this.state.styleIcon1} onMouseEnter = {this.styleIcon1Change1} onMouseLeave = {this.styleIcon1Change2}>
                        <InstagramIcon/>
                      </Badge>
                    </a>
                    </div>
                    <div className="col-md-4">
                    <a target="_blank" className="nav-link text-center" href="https://twitter.com/login">
                      <Badge pill variant="light" style={this.state.styleIcon2} onMouseEnter = {this.styleIcon2Change1} onMouseLeave = {this.styleIcon2Change2}>
                        <FacebookIcon/>
                      </Badge>
                    </a>
                    </div>
                    <div className="col-md-4" >
                    <a target="_blank" className="nav-link text-center" href="https://twitter.com/login">
                      <Badge pill variant="light" style={this.state.styleIcon3} onMouseEnter = {this.styleIcon3Change1} onMouseLeave = {this.styleIcon3Change2}>
                        <TwitterIcon/>
                      </Badge>
                    </a>
                    </div>
                    </Row>
                    <br/>
                    <Typography className="text-center">
                      <BootstrapButton variant="outline-warning" onClick = {this.handleShowless}>
                        SHOW LESS
                      </BootstrapButton>
                    </Typography>
                    <br/><br/>
                </div>
                <div className="col-md-7" style = {this.state.style2} onMouseEnter = {this.style2Change1} onMouseLeave = {this.style2Change2}>
                  <br/>
                  {/* <BootstrapButton className="float-right" variant="outline-warning" onClick = {this.handleShowless}>
                        <CancelIcon/>
                  </BootstrapButton> */}
                  <br/>
                <Row>
                  <div className="offset-md-1"></div>
                  <div className = "col-md-5" style = {this.state.style21} onMouseEnter = {this.style21Change1} onMouseLeave = {this.style21Change2}>
                    <br/><br/>
                    <Typography className = "nav-link text-center" component = {Link} to="/aboutus" variant="h3" style={this.state.styleText1} onMouseEnter = {this.styleText1Change1} onMouseLeave = {this.styleText1Change2}>
                      About us
                    </Typography>
                    <br/><br/>
                </div>
                <div className = "col-md-5" style = {this.state.style22} onMouseEnter = {this.style22Change1} onMouseLeave = {this.style22Change2}>
                    <br/><br/>
                    <Typography className = "nav-link text-center" component = {Link} to="/contactus" variant="h3" style={this.state.styleText2} onMouseEnter = {this.styleText2Change1} onMouseLeave = {this.styleText2Change2}>
                      Contact us
                    </Typography>
                    <br/><br/>
                </div>
                <div className="offset-md-1"></div>
                </Row>
                </div>
                </Row>
                <br/><br/>
                </div>
            }
            <ScrollUpButton/>
            </Container>
        </Fragment>
    }
}

import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Typography from '@material-ui/core/Typography';
import Button from 'react-bootstrap/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from 'react-bootstrap/Badge'
import Blogs from "./blogs"
import Footercomp from "./footercomp"
import Row from "react-bootstrap/Row"
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import TextField from "@material-ui/core/TextField"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import { Fragment } from "react";
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import Photo2 from "../assets/photo2.jpg"
import axios from "axios"
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles';
export default class Subscribe extends React.Component {
    state = {
        form: {
            Email: ""
        },
        formError: {
            Email: ""
        },
        formValid: {
            Email: false,
            buttonActive: false
        },
        buttonVariant : "outline-danger",
        error: true,
        successMessage: "",
        errorMessage : "",
        successDiv : false,
        style:{borderBottom:"1px solid black"}

    }
    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#FFA500' //your color
            }
        }
    });
    handleChange = event => {
        let { name, value } = event.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
        this.validate(name, value)
    }
    validate = (name, value) => {
        let modifiedFormError = this.state.formError
        let modifiedFormValid = this.state.formValid
        let modifiedError = this.state.error
        let modifiedStyle = this.state.style
        let modifiedButtonVariant = this.state.buttonVariant
        const regEx2 = new RegExp(/^[A-z0-9_%$\.]{3,}@[A-z]{3,30}.com$/)
        switch (name) {
            case "Email":
                if (value.length === 0) {
                    modifiedFormError[name] = "Field Required"
                    modifiedFormValid[name] = false
                    modifiedError = true
                    modifiedStyle = {borderBottom:"1px solid black"}
                    modifiedButtonVariant = "outline-danger"
                }
                else if (!regEx2.test(value)) {
                    modifiedFormError[name] = "Please enter a valid Email address"
                    modifiedFormValid[name] = false
                    modifiedError = true
                    modifiedStyle = {borderBottom:"1px solid black"}
                    modifiedButtonVariant = "outline-danger"
                }
                else {
                    modifiedFormError[name] = "Now, thats a valid Email!"
                    modifiedFormValid[name] = true
                    modifiedError = false
                    modifiedStyle = {borderBottom:"1px solid orange"}
                    modifiedButtonVariant = "outline-warning"
                }
                break
        }
        modifiedFormValid.buttonActive = modifiedFormValid.Email
        this.setState({
            formError: modifiedFormError,
            formValid: modifiedFormValid,
            error: modifiedError,
            style:modifiedStyle,
            buttonVariant:modifiedButtonVariant
        })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        let emailData = this.state.form
        axios.post("http://localhost:3001/insertEmail",emailData).then(response => {
            this.setState({
                successMessage:response.data.message,
                errorMessage:"",
                successDiv:true
            })
        }).catch(error => {
            this.setState({
                successMessage: "",
                errorMessage: error.response.data.message,
                successDiv:true
            })
        })

    }
    handleBack = () => {
        this.setState({
            successDiv : false,
            formError: {
                Email: ""
            },
            formValid: {
                Email: false,
                buttonActive: false
            },
            error: true,
            style:{borderBottom:"1px solid black"}

        })
    }

    render() {
        return <Fragment>
            <div style={{ backgroundColor: "black" }} className="col-md-12">
                <div className="offset-md-2 col-md-8 offset-md-2">
                    <Typography component="h2" variant="h2" style={{ color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "1px solid orange" }} className="text-center">
                        STAY UPDATED
                </Typography>
                    <br />
                    <Typography component="h5" variant="h5" style={{ color: "orange", fontFamily: "Berlin Sans FB" }} className="text-center">
                        Get the best of Wolfwalker's Journal everyday and more importantly, become ONE OF US...
                </Typography>
                </div>
                <br /><br />
                <Row>
                    {
                        !this.state.successDiv?
                        <div className="offset-md-1 col-md-5">
                        <form onSubmit={this.handleSubmit}>
                            <span style={{ color: "orange", fontFamily: "Berlin Sans FB" }}>{this.state.formError.Email}</span>
                            <br /><br />
                            <ThemeProvider theme={this.theme}>
                                <TextField name="Email" className="col-md-8" variant='outlined' error={this.state.error} label="Email" inputProps={{ style: { color: "orange" } }}
                                    InputLabelProps={{
                                        style: { color: 'orange' },
                                    }}
                                    onChange={this.handleChange}
                                    style={this.state.style}
                                />
                            </ThemeProvider> <br />
                            <br/>
                            <Button variant={this.state.buttonVariant} className="btn btn-block col-md-8" disabled={!this.state.formValid.buttonActive} onClick={this.handleSubmit}>
                                SUBSCRIBE FOR FREE <SubscriptionsRoundedIcon />
                            </Button>
                            
                            <br /><br />
                            
                        </form>
                    </div>:
                    <div className="offset-md-1 col-md-5">
                      
                        <Typography component="h4" variant="h4" style={{color:"orange", fontFamily: "Berlin Sans FB" }} className="text-center">
                                {
                                    this.state.errorMessage === ""?
                                    <div>
                                        {this.state.successMessage}<br/>
                                        You are a wolfwalker now!
                                    </div>:
                                    <div>
                                        {this.state.errorMessage}<br/>
                                    </div>
                                }
                        </Typography><br/>
                        <br/>
                        {
                            this.state.errorMessage === ""?
                            <div>
                                <Row>
                            
                            <Tooltip title="Go back to home page" placement="bottom" arrow>
                        <IconButton className="btn btn-block"  onClick={() => this.setState({ home: true })} component={Link} to="/home">
                        <Badge pill variant="primary">
                            <HomeIcon />
                        </Badge>
                        </IconButton>
                        </Tooltip>
                            
                        
                        
                        <Tooltip title="Go directly to blogs" placement="top" arrow>
                                <IconButton className="btn btn-block"  onClick={() => { this.setState({ blogs: true }) }} component={Link} to="/blogs">
                                    <Badge pill variant="danger">
                                        <BookIcon />
                                    </Badge>
                                </IconButton>
                        </Tooltip>
                      
                        </Row> 
                            </div>:
                            <div>
                                <Row>
                                    <Button variant = "outline-warning" className="btn btn-block" onClick={this.handleBack}>
                                        <h4>
                                        TRY AGAIN
                                        </h4>
                                    </Button>
                                </Row>
                            </div>
                        }  
                    </div>
                    }
                    <div className="col-md-6" >
                        <img src={Photo2} className="img img-fluid" />
                    </div>
                </Row>
                <br /><br />
            </div>
            <Footercomp />
        </Fragment>
    }
}
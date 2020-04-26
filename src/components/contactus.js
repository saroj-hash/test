import React,{Component,Fragment} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles';
import Row from "react-bootstrap/Row";
import BootstrapButton from "react-bootstrap/Button"
import axios from "axios"
import IconButton from "@material-ui/core/IconButton"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HomeIcon from '@material-ui/icons/Home';
import BookIcon from '@material-ui/icons/Book';
import Tooltip from "@material-ui/core/Tooltip"
import Badge from "react-bootstrap/Badge"
import {Link} from "react-router-dom"
import Photo3 from "../assets/photo3.jpg"
import Footer from "./footercomp"
export default class ContactUs extends Component{
    state = {
        form: {
            Name: "",
            Email: "",
            Message : ""
        },
        formError: {
            Name: "",
            Email: "" ,
            Message : "",
        },
        formValid : {
            Name: false,
            Email: false,
            Message:false,
            buttonActive : false
        },
        error: {
            Name: true,
            Email:true,
            Message: true
        },
        labelStyle : {
            Name : {style : {color : "orange"}},
            Email : {style : {color : "orange"}},
            Message :  {style : {color : "orange"}}
        },
        inputStyle : {
            Name : {style : {color : "orange"}},
            Email : {style : {color : "orange"}},
            Message : {style : {color : "orange"}}
        },
        buttonVariant : {
            Name : "outline-warning",
            Email : "outline-warning",
            Message : "outline-warning",
            color : "outline-danger"
        },
        textFieldStyle:{
            Name : {borderBottom : "1px solid black"},
            Email : {borderBottom : "1px solid black"},
            Message : {borderBottom : "1px solid black"},
        },
        successDiv : false,
        successMessage : "",
        errorMessage : ""
    }

    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#FFA500' //your color
            }
        }
    });

    handleChange = (event) => {
        let { name, value } = event.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
        this.validateField(name,value)
    }

    validateField = (name,value) => {
        let modifiedFormError = this.state.formError
        let modifiedFormValid = this.state.formValid
        let modifiedError = this.state.error
        let modifiedLabelStyle = this.state.labelStyle
        let modifiedInputStyle = this.state.inputStyle
        let modifiedButtonVariant = this.state.buttonVariant
        let modifiedTextFieldStyle = this.state.textFieldStyle
        const regEx2 = new RegExp(/^[A-z0-9_%$\.]{3,}@[A-z]{3,30}.com$/)
        switch (name) {
            case "Name" : 
                if (value.length === 0) {
                    modifiedFormError[name] = "Field Required"
                    modifiedFormValid[name] = false
                    modifiedError[name] = true
                    modifiedLabelStyle[name] = {style : {color : "red"}}
                    modifiedInputStyle[name] = {style : {color : "red"}}
                    modifiedButtonVariant[name] = "outline-danger"
                    modifiedTextFieldStyle[name] = {borderBottom : "1px solid black"}
                }
                else{
                    modifiedFormError[name] = ""
                    modifiedFormValid[name] = true
                    modifiedError[name] = false
                    modifiedLabelStyle[name] = {style : {color : "orange"}}
                    modifiedInputStyle[name] = {style : {color : "orange"}}
                    modifiedButtonVariant[name] = "outline-warning"
                    modifiedTextFieldStyle[name] = {borderBottom : "1px solid orange"}
                }
            break;

            case "Email":
                if (value.length === 0) {
                    modifiedFormError[name] = "Field Required"
                    modifiedFormValid[name] = false
                    modifiedError[name] = true
                    modifiedLabelStyle[name] = {style : {color : "red"}}
                    modifiedInputStyle[name] = {style : {color : "red"}}
                    modifiedButtonVariant[name] = "outline-danger"
                    modifiedTextFieldStyle[name] = {borderBottom : "1px solid black"}
                }
                else if (!regEx2.test(value)) {
                    modifiedFormError[name] = "Please enter a valid Email address"
                    modifiedFormValid[name] = false
                    modifiedError[name] = true
                    modifiedLabelStyle[name] = {style : {color : "red"}}
                    modifiedInputStyle[name] = {style : {color : "red"}}
                    modifiedButtonVariant[name] = "outline-danger"
                    modifiedTextFieldStyle[name] = {borderBottom : "1px solid black"}
                }
                else{
                    modifiedFormError[name] = ""
                    modifiedFormValid[name] = true
                    modifiedError[name] = false
                    modifiedLabelStyle[name] = {style : {color : "orange"}}
                    modifiedInputStyle[name] = {style : {color : "orange"}}
                    modifiedButtonVariant[name] = "outline-warning"
                    modifiedTextFieldStyle[name] = {borderBottom : "1px solid orange"}
                }
                break;

            case "Message" : 
                if (value.length === 0) {
                    modifiedFormError[name] = "Field Required"
                    modifiedFormValid[name] = false
                    modifiedError[name] = true
                    modifiedLabelStyle[name] = {style : {color : "red"}}
                    modifiedInputStyle[name] = {style : {color : "red"}}
                    modifiedButtonVariant[name] = "outline-danger"
                    modifiedTextFieldStyle[name] = {borderBottom : "1px solid black"}
                }
                else{
                    modifiedFormError[name] = ""
                    modifiedFormValid[name] = true
                    modifiedError[name] = false
                    modifiedLabelStyle[name] = {style : {color : "orange"}}
                    modifiedInputStyle[name] = {style : {color : "orange"}}
                    modifiedButtonVariant[name] = "outline-warning"
                    modifiedTextFieldStyle[name] = {borderBottom : "1px solid orange"}
                }
            break;
        }

            modifiedFormValid.buttonActive = modifiedFormValid.Name && modifiedFormValid.Email && modifiedFormValid.Message

            if(modifiedButtonVariant.Name === "outline-warning" && modifiedButtonVariant.Email === "outline-warning" && modifiedButtonVariant.Message === "outline-warning"){
                modifiedButtonVariant.color = "outline-warning"
            }
            else{
                modifiedButtonVariant.color = "outline-danger"
            }

            this.setState({
                formError: modifiedFormError,
                formValid: modifiedFormValid,
                error: modifiedError,
                labelStyle : modifiedLabelStyle,
                inputStyle : modifiedInputStyle,
                textFieldStyle : modifiedTextFieldStyle
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let messageObj = this.state.form
        axios.post("http://localhost:3001/postMessage", messageObj).then(response => {
            this.setState({
                successDiv : true,
                successMessage : response.data.message,
                errorMessage : ""
            })
            }).catch(err => {
                this.setState({
                    successDiv : true,
                    successMessage : "",
                    errorMessage : err.response.data.message 
            })
        })

    }


    render(){
        return <Fragment>
           <div style={{ backgroundColor: "black" }} className="col-md-12">
           <div className="offset-md-2 col-md-8 offset-md-2">
                <Typography component="h2" variant="h2" style={{ color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "1px solid orange" }} className="text-center">
                    SEND A NOTE
                </Typography>
                    <br/><br/>
           </div>
           {
               this.state.successDiv === false?
               <div className="offset-md-2 col-md-8 offset-md-2">
                    <form>
                    <Row>
                    <div className="col-md-6">
                    <span style={{color:"red"}}>{this.state.formError.Name}</span> <br/><br/>
                    <ThemeProvider theme={this.theme}>
                        
                        <TextField  
                        variant="outlined"
                        className="col-md-12"
                        label="Name" 
                        name="Name"
                        onChange={this.handleChange}
                        InputLabelProps={this.state.labelStyle.Name}
                        inputProps={this.state.inputStyle.Name}  
                        error={this.state.error.Name}
                        style={this.state.textFieldStyle.Name}
                        />
                    </ThemeProvider> 
                      
                    </div> 
                    <br/>
                   <div className="col-md-6">
                   <span style={{color:"red"}}>{this.state.formError.Email}</span>
                   <br/><br/>
                   <ThemeProvider theme={this.theme}>
                    
                        <TextField  
                        variant="outlined"
                        className="col-md-12"
                        label="Email" 
                        name="Email"
                        onChange={this.handleChange}
                        InputLabelProps={this.state.labelStyle.Email}
                        inputProps={this.state.inputStyle.Email}  
                        error={this.state.error.Email}
                        style={this.state.textFieldStyle.Email}
                        />
                      
                    </ThemeProvider> 
                   </div>
                    </Row>
                    <br/><br/>
                    <ThemeProvider theme={this.theme}>
                        <TextField 
                        rows="10" col="20"
                        className="col-md-12" 
                        variant="outlined"
                        label="Message" 
                        name="Message"
                        onChange={this.handleChange}
                        InputLabelProps={this.state.labelStyle.Message}
                        inputProps={this.state.inputStyle.Message}  
                        error={this.state.error.Message}
                        style={this.state.textFieldStyle.Message}
                        />
                        </ThemeProvider>
                        <br/>
                        <span style={{color:"red"}}>{this.state.formError.Message}</span>
                        <br /><br />
                        <BootstrapButton type="submit" disabled = {!this.state.formValid.buttonActive} variant={this.state.buttonVariant.color} className="btn btn-block" size="lg" onClick ={this.handleSubmit}>SEND</BootstrapButton>
                    </form>
                    <br /><br/><br/>
                </div>:
                <div className="offset-md-2 col-md-8 offset-md-2">
                    {
                        this.state.successMessage.length!==0?
                        <Typography component="h4" variant="h4" style={{ color: "orange", fontFamily: "Berlin Sans FB"}} className="text-center">
                            {this.state.successMessage}
                        </Typography>:
                        <Typography component="h4" variant="h4" style={{ color: "orange", fontFamily: "Berlin Sans FB"}} className="text-center">
                            {this.state.errorMessage}
                        </Typography> 
                    }
                    <Row>
                        <div className="col-md-4">
                            <Typography className="text-center">
                                <Tooltip position="bottom" arrow title="Go back">
                                <IconButton onClick = {() => this.setState({successDiv : false})}>
                                    <Badge pill variant="warning">
                                        <ArrowBackIosIcon/>
                                    </Badge>
                                </IconButton>
                                </Tooltip>
                            </Typography>
                        </div>
                        <div className="col-md-4">
                            <Typography className="text-center">
                                <Tooltip title="Go back to home page" placement="bottom" arrow>
                                    <IconButton className="btn btn-block" component={Link} to="/home">
                                        <Badge pill variant="primary">
                                            <HomeIcon />
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </Typography>
                        </div>
                        <div className="col-md-4">
                            <Typography className="text-center">
                                <Tooltip title="Go back to blogs page" placement="bottom" arrow>
                                    <IconButton className="btn btn-block" component={Link} to="/blogs">
                                        <Badge pill variant="danger">
                                            <BookIcon/>
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                            </Typography>
                        </div>
                    </Row>
                    <br/><br/><br/>
                </div>
                
           }
           <img src={Photo3} className="img img-fluid"/>
           <br/><br/><br/><br/>
           </div>
           <Footer/>
        </Fragment>
    }
}
import React, { Component, Fragment } from "react"
import TextField from "@material-ui/core/TextField"
import Paper from "@material-ui/core/Paper"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import BootstrapButton from "react-bootstrap/Button"
import Badge from 'react-bootstrap/Badge'
import Typography from "@material-ui/core/Typography"
import Chip from '@material-ui/core/Chip';
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent';
import Row from "react-bootstrap/Row"
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles';
import axios from "axios"
export default class Reply extends Component {
    state = {
        form: {
            Name: "",
            Reply: ""
        },
        formError: {
            Name: "",
            Reply: "" 
        },
        formValid : {
            Name: false,
            Reply: false,
            buttonActive : false
        },
        error: {
            Name: false,
            Reply: false
        },
        labelStyle : {
            Name : {style : {color : "orange"}},
            Reply : {style : {color : "orange"}}
        },
        inputStyle : {
            Name : {style : {color : "orange"}},
            Reply : {style : {color : "orange"}}
        },
        buttonVariant : {
            Name : "outline-warning",
            Reply : "outline-warning",
            color : "outline-warning"
        },
        textFieldStyle:{
            Name : {borderBottom : "1px solid orange"},
            Reply : {borderBottom : "1px solid orange"}
        },
        getData : [],
        successMessage: "",
        errorMessage : "",
        
    }


    theme = createMuiTheme({
        palette: {
            primary: {
                main: '#FFA500' //your color
            }
        }
    });


    handleReplyChange = (event) => {
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

            case "Reply" : 
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

            modifiedFormValid.buttonActive = modifiedFormValid.Name && modifiedFormValid.Reply

            if(modifiedButtonVariant.Name === "outline-warning" && modifiedButtonVariant.Reply === "outline-warning"){
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
            console.log(2)
        }


        handleReplySubmit = (event) => {
            event.preventDefault()
            let replyObj = this.state.form
            axios.put("http://localhost:3001/postReply/" + this.props.CommentId, replyObj).then(response => {
                if (response.data.message) {
                    axios.get("http://localhost:3001/getReplies/" + this.props.CommentId).then(getResponse => {
                        let len = getResponse.data.message.length
                        let arr = []
                        for (let i = len - 1; i >= 0; i--) {
                            arr.push(getResponse.data.message[i])
                        }
                        this.setState({
                            getData: arr
                        })
                    }).catch(err => {
                        this.setState({
                            getData: []
                        })
                    })
                }
    
            }).catch(err => {
                this.setState({
                    errorMessage: err.response.data.message
                })
            })
            console.log(3)
        }
        handleGet = () => {
            console.log("5")
            axios.get("http://localhost:3001/getReplies/"+this.props.CommentId).then(getResponse => {
                let len = getResponse.data.message.length
                let arr = []
                for(let i=len-1 ; i>=0 ; i--){
                    arr.push(getResponse.data.message[i])
                }
                this.setState({
                    getData : arr 
                })
            }).catch(err => {
                this.setState({
                    getData : []
                })
            })
        }
        componentDidMount(){
            this.handleGet()
        }

    render() {
        return <Container>
            <Row>
                <div className="offset-md-2 col-md-8 offset-md-2">
                    <form>
                    <ThemeProvider theme={this.theme}>
                        <TextField className="col-md-12"
                        id="standard-basic"
                        label="Name"
                        name="Name"
                        InputLabelProps={this.state.labelStyle.Name}
                        inputProps={this.state.inputStyle.Name}  
                        error={this.state.error.Name}
                        style={this.state.textFieldStyle.Name}
                        onChange={this.handleReplyChange} />
                        <span style={{color:"red"}}>{this.state.formError.Name}</span>
                    </ThemeProvider>
                    <br /><br />
                    <ThemeProvider theme={this.theme}>
                        <TextField className="col-md-12"
                        id="outlined-basic"
                        label="Reply"
                        name="Reply"
                        InputLabelProps={this.state.labelStyle.Reply}
                        inputProps={this.state.inputStyle.Reply}  
                        error = {this.state.error.Reply}
                        style={this.state.textFieldStyle.Reply}
                        onChange={this.handleReplyChange} />
                        <span style={{color:"red"}}>{this.state.formError.Reply}</span>
                    </ThemeProvider>
                        <br /><br />
                        <BootstrapButton type="submit" disabled = {!this.state.formValid.buttonActive} variant={this.state.buttonVariant.color} className="btn btn-block" size="lg" onClick={this.handleReplySubmit}>Reply</BootstrapButton>
                    </form>
                    <br /><br />
                    {
                       this.state.getData.map((data, index) => {
                        return <div className="container">    
                                <Paper key={index} style={{backgroundColor:"black"}}>
                                <Row>
                                <div className="col-md-12">
                                    <Typography variant="h5" component="h5" style={{color:"orange",borderBottom:"1px solid orange"}}>
                                        {data.Name}
                                    </Typography>
                                    <br/>
                                    <Typography variant="P" component="body-1" style={{color:"orange"}}>
                                        {data.Reply}
                                    </Typography>
                                </div>
                                </Row>
                            </Paper>
                            <br />

                          </div>  
                    })
                    }
                              
                           
                    
                </div>
            </Row>
        </Container>
    }


}






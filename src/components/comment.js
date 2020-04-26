import React, { Component, Fragment } from "react"
import TextField from "@material-ui/core/TextField"
import Paper from "@material-ui/core/Paper"
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import Row from "react-bootstrap/Row"
import BootstrapButton from "react-bootstrap/Button"
import Badge from 'react-bootstrap/Badge'
import Typography from "@material-ui/core/Typography"
import Chip from '@material-ui/core/Chip';
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent';
import Reply from "./reply"
import {
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core/styles';
import axios from "axios"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Tooltip from "@material-ui/core/Tooltip"
import ReplyIcon from '@material-ui/icons/Reply';
import Button from "react-bootstrap/Button"
import MBadge from "@material-ui/core/Badge"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
export default class Comment extends Component {
    state = {
        form: {
            Name: "",
            Comment: ""
        },
        formError: {
            Name: "",
            Comment: "" 
        },
        formValid : {
            Name: false,
            Comment: false,
            buttonActive : false
        },
        error: {
            Name: false,
            Comment: false
        },
        labelStyle : {
            Name : {style : {color : "orange"}},
            Comment : {style : {color : "orange"}}
        },
        inputStyle : {
            Name : {style : {color : "orange"}},
            Comment : {style : {color : "orange"}}
        },
        buttonVariant : {
            Name : "outline-warning",
            Comment : "outline-warning",
            color : "outline-warning"
        },
        textFieldStyle:{
            Name : {borderBottom : "1px solid orange"},
            Comment : {borderBottom : "1px solid orange"}
        },
        getData : [],
        successMessage: "",
        errorMessage : "",
        deleteSuccessMessage : "",
        deleteErrorMessage : "",
        reply: [],
        
       
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

        console.log("1")
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

            case "Comment" : 
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

            modifiedFormValid.buttonActive = modifiedFormValid.Name && modifiedFormValid.Comment

            if(modifiedButtonVariant.Name === "outline-warning" && modifiedButtonVariant.Comment === "outline-warning"){
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

    

    handleSubmit = (event) => {
        event.preventDefault()
        let commentObj = this.state.form
        console.log("Yes handleSubmit is called with commentObj -> ", commentObj)
        axios.put("http://localhost:3001/postComment/" + this.props.PostId, commentObj).then(response => {
            if (response.data.message) {
                axios.get("http://localhost:3001/getComments/" + this.props.PostId).then(getResponse => {
                    let len = getResponse.data.message.length
                    let arr = []
                    let replyBool = []
                    for(let j=0; j<len; j++){
                        replyBool[j]=false
                    }
                    arr[0] = getResponse.data.message[0]
                    for (let i = len - 1; i >= 1; i--) {
                        arr.push(getResponse.data.message[i])
                    }
                    console.log("Arr in get -> ", arr)
                    this.setState({
                        getData: arr,
                        reply:replyBool
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
        axios.get("http://localhost:3001/getComments/"+this.props.PostId).then(getResponse => {
            let len = getResponse.data.message.length
            let arr = []
            arr[0] = getResponse.data.message[0]
            for(let i=len-1 ; i>=1 ; i--){
                arr.push(getResponse.data.message[i])
            }
            console.log("Arr in get -> ",arr)
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

    handleReply = (index) => {
        let modifiedReply = this.state.reply
        modifiedReply[index]=!modifiedReply[index]
        this.setState({
            reply:modifiedReply
        })
    }

    render() {
        console.log("4")
        return <Container fluid style={{backgroundColor:"black"}}>
            <div className="row">
                <div className="offset-md-1 col-md-10 offset-md-1" >
                    <form>
                        <ThemeProvider theme={this.theme}>
                        <TextField 
                        className="col-md-12" 
                        id="standard-basic" 
                        label="Name" 
                        name="Name"
                        onChange={this.handleChange}
                        InputLabelProps={this.state.labelStyle.Name}
                        inputProps={this.state.inputStyle.Name}  
                        error={this.state.error.Name}
                        style={this.state.textFieldStyle.Name}
                        />
                        <span style={{color:"red"}}>{this.state.formError.Name}</span>
                        </ThemeProvider>
                        <br /><br />
                        <ThemeProvider theme={this.theme}>
                        <TextField 
                        className="col-md-12" 
                        id="standard-basic" 
                        cols="40" 
                        rows="5"
                        label="Comment" 
                        name="Comment"
                        onChange={this.handleChange}
                        InputLabelProps={this.state.labelStyle.Comment}
                        inputProps={this.state.inputStyle.Comment}  
                        error = {this.state.error.Comment}
                        style={this.state.textFieldStyle.Comment}
                        />
                        <span style={{color:"red"}}>{this.state.formError.Comment}</span>
                        </ThemeProvider>
                        <br /><br /><br />
                        <BootstrapButton type="submit" disabled = {!this.state.formValid.buttonActive} variant={this.state.buttonVariant.color} className="btn btn-block" size="lg" onClick ={this.handleSubmit}>Comment</BootstrapButton>
                    </form>
                </div>
            </div>
            <br /><br />
            <div className="row">
                <div className="offset-md-1 col-md-10 offset-md-1">
                    <br /><br />
                   
                    
                        {
                        this.state.getData.map((data, index) => {
                            return <div className="container">    
                                    <Paper key={index} style={{backgroundColor:"black"}}>
                                    <Row>
                                    <div className="col-md-12">
                                        <Typography variant="h3" component="h3" style={{color:"orange",borderBottom:"1px solid orange"}}>
                                            {data.Name}
                                        </Typography>
                                        <br/>
                                        <Typography variant="h5" component="h5" style={{color:"orange"}}>
                                            {data.Comment}
                                        </Typography>  
                                       <Button variant="outline-warning" className="float-right"  onClick={()=>this.handleReply(index)}>
                                            REPLY <ReplyIcon/>
                                       </Button>
                                        &nbsp;
                                       
                                       <br/>
                                       {
                                           this.state.reply[index]?
                                           <Reply CommentId={data.CommentId}/>:
                                           <div/>
                                       }
                                    </div>
                                    </Row>

                                </Paper>
                                <br />

                              </div>  
                        })
                        }
                   <br /><br />
                </div>
            </div> 

        </Container>

    }
}
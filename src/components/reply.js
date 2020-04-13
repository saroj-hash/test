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
export default class Reply extends Component {
    state = {
        Rform: {
            Rname: "",
            Rcomment: ""
        },
        Rnames: [],
        Rcomments: [],
        viewReplies:false
    }
    
    handleReplyChange = (event) => {
        let { name, value } = event.target
        this.setState({
            Rform: {
                ...this.state.Rform,
                [name]: value
            },
            viewReplies: false
        })
    }
    handleReplySubmit = (event) => {
        event.preventDefault()
        let Rname = this.state.Rform.Rname
        console.log("Rname ->",Rname)
        let Rcomment = this.state.Rform.Rcomment
        console.log("Rcomment ->",Rcomment)
        let Rnames = this.state.Rnames
        console.log("Rnames ->",Rnames)
        let Rcomments = this.state.Rcomments
        console.log("Rcomment ->",Rcomment)
        if (Rname !== "" && Rnames.indexOf(Rname) === -1 && Rname !== undefined) Rnames.unshift(Rname)
        if (Rcomment !== "" && Rcomments.indexOf(Rcomment) === -1 && Rcomment !== undefined) Rcomments.unshift(Rcomment)
        this.setState({
            Rnames: Rnames,
            Rcomments: Rcomments
        })
        
    }
   

    render() {
        return <Container>
            <Row>
                <div className="offset-md-2 col-md-8 offset-md-2">
                    <form noValidate autoComplete="off" onClick={this.handleReplySubmit}>
                        <TextField className="col-md-12" id="standard-basic" label="Name" name="Rname" onChange={this.handleReplyChange} />
                        <br /><br />
                        <TextField className="col-md-12" id="outlined-basic" label="Comment" name="Rcomment" onChange={this.handleReplyChange} />
                        <br /><br />
                        <BootstrapButton variant="outline-dark" className="btn btn-block" size="lg" onClick={() => this.setState({ viewReplies: true })}>Reply</BootstrapButton>
                    </form>
                    <br /><br />
                    {
                        this.state.viewReplies ?
                            <div className="row">
                                <div className="offset-md-1 col-md-10 offset-md-1">
                                    <h1>
                                        <Badge variant="dark">
                                            Replies
                                        </Badge>
                                    </h1>
                                    <br />
                                    {
                                        this.state.Rnames.map((data, index) => {
                                            return <div className="container">
                                                <Paper>
                                                    <Typography variant="h4" component="h6">
                                                        {data}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {this.state.Rcomments[index]}
                                                    </Typography>
                                                    <br />
                                                </Paper>
                                                <br />
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                            :
                            <div />
                    }
                </div>
            </Row>
        </Container>
    }


}






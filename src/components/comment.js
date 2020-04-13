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
import Reply from "./reply"
export default class Comment extends Component {
    state = {
        form: {
            name: "",
            comment: ""
        },
        names: [],
        comments: [],
        viewComments: false,
        reply: []

    }
    handleChange = (event) => {
        let { name, value } = event.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            },
            viewComments: false
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let name = this.state.form.name
        let comment = this.state.form.comment
        let reply = this.state.reply
        let names = this.state.names
        let comments = this.state.comments
        if (name !== "" && names.indexOf(name) === -1 && name !== undefined) {
            names.unshift(name)
            reply.unshift(false)
        }
        if (comment !== "" && comments.indexOf(comment) === -1 && comment !== undefined) comments.unshift(comment)

        this.setState({
            names: names,
            comments: comments
        })
    }
    handleReplyButton = (index) => {
        let reply = this.state.reply
        reply[index] = !reply[index];
        this.setState({
            reply: reply
        })
    }
    render() {
        return <Container fluid>
            <div className="row">
                <div className="offset-md-1 col-md-10 offset-md-1">
                    <form noValidate autoComplete="off" onClick={this.handleSubmit}>
                        <TextField className="col-md-12" id="standard-basic" label="Name" name="name" onChange={this.handleChange} />
                        <br /><br />
                        <TextField className="col-md-12" id="outlined-basic" label="Comment" name="comment" onChange={this.handleChange} />
                        <br /><br /><br />
                        <BootstrapButton variant="outline-dark" className="btn btn-block" size="lg" onClick={() => this.setState({ viewComments: true })}>Comment</BootstrapButton>
                    </form>
                </div>
            </div>
            <br /><br />
            {
                this.state.viewComments ?
                    <div className="row">
                        <div className="offset-md-1 col-md-10 offset-md-1">
                            <h1>
                                <Badge variant="dark">
                                    Comments
                                </Badge>
                            </h1>
                            <br /><br />
                            {
                                this.state.names.map((data, index) => {
                                    return <div className="container">
                                        <Paper>
                                            <Typography variant="h4" component="h6">
                                                {data}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {this.state.comments[index]}
                                            </Typography>
                                            <Chip
                                                size="large"
                                                label="Delete"
                                                color="secondary"
                                                className="float-right"
                                                onClick = {() => {
                                                    let names = this.state.names
                                                    let comments = this.state.comments
                                                    names.splice(index,1)
                                                    comments.splice(index,1)
                                                    this.setState({
                                                        names : names,
                                                        comments: comments
                                                    })
                                                }}
                                            />
                                            <Chip
                                                size="large"
                                                label="Reply"
                                                color="primary"
                                                className="float-right"
                                                onClick={() => {
                                                    let reply = this.state.reply
                                                    reply[index] = !reply[index];
                                                    this.setState({
                                                        reply: reply
                                                    })
                                                }} />
                                            <br /><br />
                                        </Paper>
                                        <br />
                                        {
                                            this.state.reply[index] ?
                                                <Reply />
                                                : <div />
                                        }
                                    </div>
                                })
                            }<br /><br />
                        </div>
                    </div> :
                    <div />
            }
        </Container>

    }
}
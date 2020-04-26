import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import Footercomp from "./footercomp"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "@material-ui/core/Card"
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from "./comment"
import IconButton from "@material-ui/core/IconButton"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BBadge from "react-bootstrap/Badge"
import Badge from "@material-ui/core/Badge"
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import axios from "axios"
import ShareIcon from '@material-ui/icons/Share'
import ShareComp from "./sharecomp"

export default class Autumn extends React.Component {
    state = {
        root: {
            maxWidth: 1400
        },
        shareButton: false,
        viewComment: false,
        PostId: 1002,
        postUrl: "http://localhost:3000/blogs/autumn",
        tempArr: [],
        color: "light",
        badgeContent: 0,
        likeclick: false,
        showMenu: false,
        contentCol: "col-md-12",

    }
    handleLike = () => {
        if (this.state.likeclick === false) {
            let postId = this.state.PostId
            axios.get("http://localhost:3001/getPostIds").then(response => {
                this.setState({
                    tempArr: response.data.message
                })
                let tempArr = this.state.tempArr
                console.log(tempArr)
                console.log(tempArr.indexOf(postId))
                if (tempArr.indexOf(postId) === -1) {
                    let postObj = { PostId: postId }
                    axios.post("http://localhost:3001/createPost", postObj).then(postResponse => {
                        console.log(postResponse.data.message)
                        if (postResponse.data.message) {
                            axios.put("http://localhost:3001/increasePostLikes/" + this.state.PostId).then(response => {
                                console.log(response.data.message)
                                if (response.data.message) {
                                    axios.get("http://localhost:3001/getPostLikes/" + this.state.PostId).then(getResponse => {
                                        this.setState({
                                            badgeContent: getResponse.data.message.NoOfLikes,
                                            color: "warning",
                                            likeclick: true
                                        })
                                    })
                                }
                            })
                        }
                    })
                }
                else {
                    axios.put("http://localhost:3001/increasePostLikes/" + this.state.PostId).then(response => {
                        console.log(response.data.message)
                        if (response.data.message) {
                            axios.get("http://localhost:3001/getPostLikes/" + this.state.PostId).then(getResponse => {
                                this.setState({
                                    badgeContent: getResponse.data.message.NoOfLikes,
                                    color: "warning",
                                    likeclick: true
                                })
                            })
                        }
                    })
                }
            })
        }
        else {
            axios.put("http://localhost:3001/decreasePostLikes/" + this.state.PostId).then(response => {
                if (response.data.message) {
                    axios.get("http://localhost:3001/getPostLikes/" + this.state.PostId).then(getResponse => {
                        this.setState({
                            badgeContent: getResponse.data.message.NoOfLikes,
                            color: "light",
                            likeclick: false
                        })
                    })
                }
            })
        }
    }

    getPostLikes = () => {
        axios.get("http://localhost:3001/getPostLikes/" + this.state.PostId).then(response => {
            this.setState({
                badgeContent: response.data.message.NoOfLikes
            })
        })
    }

    componentDidMount() {
        this.getPostLikes()
    }

    handleComment = () => {
        if (this.state.viewComment === false) {
            let postId = this.state.PostId
            axios.get("http://localhost:3001/getPostIds").then(response => {
                console.log("response of get -> ", response)
                this.setState({
                    tempArr: response.data.message
                })
                let tempArr = this.state.tempArr
                if (tempArr.indexOf(postId) === -1) {
                    let postObj = { PostId: postId }
                    axios.post("http://localhost:3001/createPost", postObj).then(response2 => {
                        if (response2.data.message) {
                            this.setState({
                                viewComment: true
                            })
                        }
                    }).catch(error => {
                        if (error.response.data.message) {
                            this.setState({
                                viewComment: false
                            })
                        }
                    })
                }
                else {
                    this.setState({
                        viewComment: true
                    })
                }
            })
        }
        else {
            this.setState({
                viewComment: false
            })
        }
    }

    render() {
        return <Fragment>


            <div className="offset-md-2 col-md-8 offset-md-2">
                <br />
                <Card style={this.state.root} className={this.state.contentCol}>
                    <CardActionArea>
                        <CardContent>
                            <IconButton component={Link} to="/menu" >
                                <BBadge pill variant="warning">
                                    <MenuOpenIcon />
                                </BBadge>
                            </IconButton>
                            <br />
                            <Typography gutterBottom variant="h5" component="h2">
                                Autumn
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Oh Autumn, dear Autumn!<br/>
                                Why do we have to go through this again and again?<br/> 
                                Why do you have to shed those yellow leaves,<br/>
                                making nature look deranged?<br/>
                                Why can't we just skip through the dark cloudy skies and retreating storms? <br/>
                                Oh Autumn, dear Autumn! <br/>
                                Why can't you be just sunny instead? <br/>
                                Why can't you be nourishing and let those flower blossom under your shade?<br/>
                                Why can't you let those birds chirp their song of joy? <br/>
                                Why are your days shorter? Why are your nights longer and darker?<br/>
                                Oh Autumn, dear Autumn! Why does it hurt so much when you are around?<br/>
                                Are you the season of death? <br/>
                                You are supposed to take the pain away.<br/>
                                Instead, why do you leave us in such agony?<br/>
                                Oh Autumn, dear Autumn!<br/>
                                Is it true what they speak about you? <br/>
                                Do you find utter pleasure from this,<br/>
                                or is it absolutely necessary for the rejuvenation of nature's soul? <br/>
                                Or do you chime in these allegations letting your head down to do the devil's work?<br/>
                                Oh Autumn, dear Autumn!<br/>
                                Do you take guilty pleasure from these allegations, <br/>
                                or do you shut your ears and endure chills to mark the beginning of something new? <br/>
                                Oh Autumn, do you like the cloudy skies and those October storms<br/>
                                or are those tears you shed doing the deeds that welcome a new beginning?<br/>
                                Oh Autumn, is it just a disguise you take while being actually beautiful inside?<br/>
                                Autumn inside each one of us should be appreciated,<br/>
                                for it brings the glory of the future. <br/>
                                If it were not for autumn, <br/>
                                we would never have the feeling of joy looking at the cherry blossom tree. <br/>
                                If it weren't for darkness, we won't ever know, whats light looks like.<br/>
                                If it weren't for sadness, we won't ever know how happiness feels like.<br/>
                                If it weren't for failure, we won't ever know how sweet the success tastes.<br/>
                                If it weren't for endings, we won't ever have new beginnings. <br/>
                                If it weren't for closed doors, we won't ever find a place of our own. <br/>
                                If it weren't for let-downs, we won't ever find our dream person.<br/>
                                If it weren't for embarrassment, we won't ever learn to stand up to the expectations of people.<br/>
                                If it weren't for foes, we won't ever have a true friend.<br/>
                                If it weren't for those long dark nights, we won't ever see how bright days can be.<br/>
                                If it weren't for autumns, we won't ever see springs.<br/>
                                Oh Autumn, dear Autumn! <br/>Don't you destroy the evil and pave the way for all the new beginnings?

                            </Typography>
                            <br />
 
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" component={Link} to="/blogs">
                            Back
                        </Button>
                        <Button size="small" color="primary" onClick={this.handleComment}>
                            Discussion
                        </Button>
                        <IconButton onClick={this.handleLike}>
                            <BBadge pill variant={this.state.color}>
                                <Badge badgeContent={this.state.badgeContent} color="primary">
                                    <FavoriteBorderIcon />
                                </Badge>
                            </BBadge>
                        </IconButton>
                        <IconButton onClick={() => this.setState({ shareButton: !this.state.shareButton })}>
                            <ShareIcon />
                        </IconButton>
                        {
                            this.state.shareButton ?
                                <ShareComp PostUrl={this.state.postUrl} /> :
                                <div />
                        }
                    </CardActions>
                </Card>

                <br /><br />
                {
                    this.state.viewComment ?
                        <Comment PostId={this.state.PostId} /> :
                        <div></div>
                }

            </div>

            <div style={{ width: "100%" }}>
                <Footercomp />
            </div>
        </Fragment>
    }
}
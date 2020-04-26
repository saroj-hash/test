import React, { Fragment } from "react"
import {Link} from "react-router-dom"
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

export default class ThisShallTooPass extends React.Component {
    state = {
        root: {
            maxWidth: 1400
        },
        shareButton : false,
        viewComment: false,
        PostId: 1001,
        postUrl: "http://localhost:3000/blogs/thisshalltoopass",
        tempArr: [],
        color: "light",
        badgeContent: 0,
        likeclick: false,
        showMenu: false,
        contentCol: "col-md-12",
        hidden: "",
        
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
                            <IconButton component = {Link} to="/menu" >
                                <BBadge pill variant="warning">
                                    <MenuOpenIcon />
                                </BBadge>
                            </IconButton>
                            <br />
                            <Typography gutterBottom variant="h5" component="h2">
                                This shall too pass
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Yes! This shall too pass. So what, if you cry your eyes out, this shall too pass.<br/>
                                So what, if things will never be the same, this shall too pass. <br/>
                                So what, if you get crippling depression, this shall too pass.<br/>
                                So what, if you start to lose yourself and become this person,<br/>you have hated from the very beginning, this shall too pass.<br/>
                                So what, you start drinking which you have always despised,this shall too pass.<br/>
                                So what, if you start choking up on your vomit, this shall too pass.<br/>
                                So what, if you get into those nice little white pills<br/> that let you off the pain for a moment,
                                this shall too pass.<br/> So what, if you OD on those pills that are in your back pocket, <br/>
                                which you are popping every hour, yes, this shall too pass. <br/>
                                So what, if you find yourself as an embarrassment on your family,
                                this shall too pass.<br/> 
                                So what, if you start living as a hobo behind a garbage bin<br/> and get morbidly rashed with all those good old flea bites, 
                                this shall too pass.<br/>
                                So what, you are hungry and finally give up on the tiniest self-esteem you are
                                left with and <br/>start digging for all those delicious leftovers in the garbage bin, 
                                this shall too pass. <br/>
                                So what, you get kidney stones by eating crap from the garbage bin,
                                yes this shall too pass,<br/> maybe in your urine someday leaving you in excruciating pain.
                                But yes, this shall too pass.<br/> So what, if you finally give up and jump in front of the speeding bus <br/>which
                                wasn't supposed to stop at your bus bay, <br/>leaving your family with absolutely nothing but regrets,
                                this shall too pass.<br/>
                                Yes! This shall too pass.<br/>
                                Well, this most certainly will not! <br/>
                                If you don't get your ass off that beautiful couch,
                                which,<br/> probbly would be reeking of your sweet little behind by now,<br/>
                                this most certainly will not.<br/>
                                Chaos will always stay.<br/> However deteriorated may your condition be,<br/>
                                you will just have to live with that. <br/>You will have to learn, how to make yourself happy again. <br/>
                                You will have to work on the recovery of your compromised self-esteem.<br/>
                                Believe me, when I confer, you will find happiness again. <br/>Needless to say, sometimes,
                                the greatest soul also needs cleansing.<br/>
                                You will get your first job.<br/> 
                                You will get a fellowship in your dream university.<br/>
                                You will find someone, who completes you. You will get married.<br/>
                                You will have beautiful kids. You will grow.<br/>
                                Well-cooked or not, the world, still, is your oyster.<br/>
                                Despite being stuck at its hard outer shell,<br/>
                                go find yourself beautiful pearls,<br/>
                                that everyone talks about.<br/>
                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                -From a fellow miserably heartbroken loser ...
                            </Typography>
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
                        <IconButton onClick={() => this.setState({shareButton : !this.state.shareButton})}>
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
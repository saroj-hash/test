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

export default class DearRachel extends React.Component {
    state = {
        root: {
            maxWidth: 1400
        },
        shareButton: false,
        viewComment: false,
        PostId: 1004,
        postUrl: "http://localhost:3000/blogs/dearrachel",
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
                                Dear Rachel,
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                I hope you're doing well. I wish well for Mr. and Mrs. Smith.
                                Is Lizzie doing good? She was an adorable little pup when I gave her to you.
                                Now she must be all grown up. Care to send her photos sometime? Just kidding.
                                Arghh! Hasn't it been five years already? Time flies away so fast. Isn't it.
                                I don't know if you will read this ever.<br/>
                                But I am stuck at home, I might as well write as you say a bunch of gibberish.
                                Haha! Again, I might be taking the tone of a sarcastic loser, but it's alright!
                                It's been five whole years that I took out my diary to pen down my hideous feelings.
                                Arghhh! I am literally out of words! You see, I was this loser when we dated.
                                But now, I am still a loser, who doesn't make a shit load of sweet money, 
                                and still stuck with ZERO partners.<br/> 
                                But you know what is changed,
                                I started living my life as per my guidelines again. 
                                You don't say, the feeling of being suffocated, 
                                it literally smothers the very last bit of self-esteem you have.
                                Did we ever have this tale of a love story? 
                                For, if we had, it would have ended with a lot less bitterness. 
                                Both of us had spoken some words which can never be taken back by either of us! 
                                But oh dear god, was I done being apologizing? 
                                Fuck no! I don't know, but the thought of you in my mind makes my obnoxiously violent, 
                                and believe it or not, I would deliberately smash my hand into the god damn wall 
                                if I did not bruise like a little girl. <br/>
                                Oh yes, do you remember slapping me in front of the whole world 
                                obliterating the tiniest self-esteem I was left with? 
                                So fucked up I was that all I could see that day was getting a black eye from getting hit by possibly 
                                the best Ex-girlfriend ever. Neither am I saying that I did not deserve it. 
                                But the slap was a bit of over-exaggeration. Parameters people set for a healthy relationship. 
                                What's up with that? Jeez, I was so not in love with you, 
                                why the fuck would I have been stuck to endless jeopardy you gave to my career?<br/>
                                More the merrier is a just a figure of god damn speech. Isn't it? 
                                Do you know what was wrong with us in the first place? 
                                We were never really friends. We didn't hit it off as strangers either.
                                And if I am coming out of the closet, your taste in movies makes me suicidal.<br/>
                                No hard feelings to Ethan Hawke and Julie Delpy, Before Sunrise makes me puke after every time I see it.
                                And you made me see that disaster of a movie every date night.
                                You see how a love story works is you should be in love with the small gestures your partner makes. 
                                But your one and only gesture were cleaning my room, 
                                irrespective of me blabbering of how I despise a cleaned room.
                                Believe it or not, the Big guy made me dodge a bullet.
                        </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Hoping to never see your face again,<br />
                            with lots of hate,<br />
                            Steven<br />
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
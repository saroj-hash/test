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

export default class DearFriends extends React.Component {
    state = {
        root: {
            maxWidth: 1400
        },
        shareButton: false,
        viewComment: false,
        PostId: 1005,
        postUrl: "http://localhost:3000/blogs/dearfriends",
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
                                Dear "F.R.I.E.N.D.S.",
                                                                                                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                We were on a break! The age-old cliche. 
                                Its been almost three decades since your first episode aired, 
                                and I see you're still the best show on the Tv even now. 
                                Not much has changed since then, but the influence you made on people is worthy of remuneration even today.
                                Needless to say, the apartment and the coffee place is thoroughly missed. 
                                You are the only show that intrigues all the generations today.
                                I am certain that the coming generation will also fall in love with you as I did.
                                I remember the day when I started with the first episode of yours.
                                With Rachel's intro followed by Chandler's sarcastic returns, you grew on me.<br/>
                                I can never narrow down my favorite character on you. I don't know why, but I always had this soft corner for Chandler.
                                Sharing a similar childhood perhaps, my life awfully matches with that of Chandler.
                                Thanksgiving does never strike as a good festival for me either. <br/>
                                With that being said, I would solely focus on my favorite episode from now on, "The one with the Proposal".
                                If it weren't for the big tree Richard, Monica would never have those second thoughts. 
                                However, if it weren't for the big tree Richard, we would have never got the plot twist, 
                                which we ache for almost every time we revisit you.
                                So ahh! Richard for the win, plus also Tom Selleck was great in the show. 
                                So coming back, when agony overshadows Chandler hearing that Monica left, from Joey, I broke into tears.
                                But then I saw her, in a room well lit with nothing but candles and she was standing all pretty with a candle in her hands. 
                                "You wanted it to be a surprise". That was it. My soul succumbed to the overloaded emotions and my eyes gave up.
                                "There’s a reason why girls don’t do this!".
                                Likewise, there's a reason why boys cry watching the very scene.
                                I just live every second of that dialogue.
                                And when you guys hug it out, except for Ross. 
                                Well, he had three of those, to begin with. 
                                Imagining how lucky Ross is, blossoms my heart with Joy. 
                                His best friend and his little sister. I am not just fanboying over you now.<br/><br/> 
                                I mean You are not just a TV show. You are an emotion.
                                From Phoebe's smelly cats to Joey being adorably hungry all the time.
                                From Monica being so loud for such a small person to chandler not being able to cry at the end of Bambi.   
                                From Ross being the dinosaur guy to Rachel being a pushover. You win billions of hearts. Hope you never get old.
                        </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                -From an honest fan...
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
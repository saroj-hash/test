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

export default class Fear extends React.Component {
    state = {
        root: {
            maxWidth: 1400
        },
        shareButton: false,
        viewComment: false,
        PostId: 1006,
        postUrl: "http://localhost:3000/blogs/fear",
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
                                    Fear
                            </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">

                                    An illusion created in mind which stops life, a lie that holds back almost everything. 
                                    This is an emotion that causes physiological changes which are later reflected in behavioral changes.
                                    Among all fears, the greatest is facing fear.<br/>
                                   
                                    Neither a fear gene exists that can be inherited nor we are taught how to fear.
                                    Then how do we learn to fear?
                                    A blanket of bad experiences caused by failures in our mind.
                                    But this blanket does not exist in reality. Fed the fear and you are dead.
                                    Fear has the capability of killing dreams and restricting us to dream further. 
                                    It gives birth to a hell lot of negative thought.
                                    Higher the level of fear higher will be the level of self-doubt and 
                                    this finally this will turn into an addiction. 
                                    This shit can be so strong that it can question your existence and then you are dead 
                                    just waiting to be buried.
                                    We all have different kinds of fear, when I was a kid I had fear of injections, darkness, speed, 
                                    thrill rides in amusement parks. 
                                    Fear of injection, realized this when I was 8. I would make excuses, vomit forcefully,
                                    run away, pretend as if I am cured and I don't need an injection. 
                                    As a kid, I never tried to overcome that and then at the age of 17 I got my first tattoo,
                                    18 another, 19 one more and at 21, four more of it and now I love getting inked.<br/>
                                    Fear of darkness didn't stay long. Getting over speed was not so tough, 
                                    just hit the speed you fear(with proper riding gears)and it will be gone
                                    and the same happened with rides in parks too.<br/><br/>
                                    Overcoming fear has one rule, just do it and once it's done the fear goes away. 
                                    The satisfaction received will be priceless. 
                                    The more you overcome fear the more you will be confident to overcome other fears.<br/>
                                    A lot of people have a fear of being left alone. But it's nothing but an illusion. 
                                    Trust yourself, you are self-sufficient and you need yourself more than you need anybody.
                                    Fearing at things steals the ability to accomplish it. 
                                    It's ok to fail but not to fear. Success and failure can be determined by our actions 
                                    but fear will stop taking actions. Understand that the 'restriction of can't' is self-made 
                                    and you can overcome it by yourself. 
                                    Just face it. Nothing is unachievable, the only thing that makes it so is your fear towards it.<br/>
                                    Do not let fear make you feel small. Do not be a slave of your fear.
                                    Take that adventure, hit that speed, face that person, do everything that is your fear and 
                                    you will end up turning them into your power.
                                    Be intrepid and you can accomplish anything you aspire for.<br/><br/>
                                    "We are all gonna die. The only question's how." –Point Break
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
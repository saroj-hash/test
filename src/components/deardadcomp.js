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

export default class DearDad extends React.Component {
    state = {
        root: {
            maxWidth: 1400
        },
        shareButton: false,
        viewComment: false,
        PostId: 1003,
        postUrl: "http://localhost:3000/blogs/deardad",
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
                                Dear Dad,
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                I hope, you're doing well. I am doing good. Is mom okay?
                                How are Sheldon and Jessie? I heard about their big news, and I just can't be less happy. 
                                I heard about cousin Lynn, and I hope he gets okay. Believe it or not, I miss you folks back there a lot. 
                                I just want to come back home and stay there permanently!
                                But you didn't raise me to show my back on the country.
                                You taught me good and these are your principles that have taken me so far, 
                                and I believe, these would help me spend those endless nights in the bunker as well.<br/> <br/>
                                Remember the night, you came back from Afghanistan? 
                                Sheldon was 4, and mom asked me to look after him, while she goes and picks you up from the station. 
                                That was the first time, I thought, yes I am responsible for someone like my Dad.
                                Like, he looks after not just our family, but everyone else's while being days and nights stationed at a remote war zone,
                                with absolutely no idea if he will see the faces of his kids after the very night.<br/><br/>
                                Well, I didn't live up to mom and you that day either, for Sheldon's stupidity of thinking that he can fly,
                                consequently breaking a tooth. Apart from that fact, I acted just the way a big brother would.
                                I cleaned up his mess, fed him, and tried to make him fall asleep, but oh dear God, was he nightmare back then! 
                                And now my baby brother is all grown up and ready to be a groom. I am extremely proud of him and his achievements.
                                I remember that night when you guys returned home, I hid inside the attic, 
                                in the fear that mom would scold me for Sheldon's broken tooth. 
                                He immediately ran off to Mom showing his broken tooth. 
                                Mom called for me and I will never forget what you said to me that night.
                                You found me inside the attic and came in and sat beside me and said,
                                "Having a man down doesn't mean you will retreat yourselves from the war. 
                                It means you will have to push even harder to defend your squad, being selfless and brave at the same time. 
                                Son, you did the same.
                                So what, Sheldon broke a tooth, it will grow back. 
                                But you didn't get scared and immediately called your mom leaving her all worried. 
                                You looked after him, and kept him safe until we returned. You did a commendable job and we are proud of you."<br/><br/>
                                Dad, you use to say those war stories. I never got afraid. Those stories ignited my zeal to serve my country even more.
                                I never said this before, but I love you Dad! I love you so much. 
                                You are the reason behind everything, I am remotely standing for.
                                And I hope, you can also stand up to that fact that I have made you proud, one day.<br/><br/>
                                Things have not been going well around here. Enemy is closing forward on us and we are left with less resources. 
                                This time, I am not sure, if I can make this.
                                Well, I am not even sure that I will be counting my breathes while you will be reading this letter.
                                I hope everything will be okay around there.
                                Tell Mom, I love her. Tell Grammy, I am counting the rosary she gave me.
                                Give Sheldon my love. Congratulate both of them on my behalf. Wish you the best holidays ahead.
                        </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                - Your Son, Mike...
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
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

export default class TheHappinessMantra extends React.Component {
    state = {
        root: {
            maxWidth: 1400
        },
        shareButton: false,
        viewComment: false,
        PostId: 1007,
        postUrl: "http://localhost:3000/blogs/thehappinessmantra",
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

    componentWillMount() {
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
                                The Happiness Mantra
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">

                                "If you are not going to talk about something during the last hour of life,
                                then don't make it a priority during life."
                                –Richard Corlson.<br /><br />
                                Life never goes as per your plans and it will never for anyone.
                                Every person's life is centered around finding happiness.
                                You work hard, give your best in whatever you do, everyone around you seems to be happy,
                                your boss, family, people in locality everyone.
                                But how many of you ask this question to yourself, Am I really happy?
                                Does anything from these things has any consequences for our happiness?
                                Yes, family has, your work has but not the bar you hit every weekend,
                                not those people you come across every day.
                                People who are passionate about what they do are happy.
                                But not everyone is fortunate enough to do what they love.
                                In this fast-moving world, you run after money, fame, power.
                                You wear masks and sometimes so much of it that you forget who you are.
                                You assume that if we get to ride a superbike, have a lot of money, a good wine to drink,
                                a pet to live with, a girl whom you thought of spending your whole life with, you can be happy.
                                But in fact, all these things are temporary and have least consequences for your happiness.<br />
                                Of course, riding a bike gives happiness, you feel the air, the speed and
                                adrenaline rush gives you thrills.
                                After all, we live once, so we should make it to the fullest.
                                But What if someday we will be deprived of that?<br />
                                Money gives freedom, though it is virtual. But What if someday you lose every penny you have saved?
                                What if your body has reached the maximum capacity of alcohol intake?
                                Your pet dies, girlfriend cheats.
                                What's next?
                                Now you have lost all those things that made you happy.
                                You start feeling shattered, anxiety hits you hard,
                                yoou find nothing good, those pills are not working anymore. What you do then?... <br /><br />
                                But if you will be having something which you will never be able to count,
                                like creativity which has no connection with materialistic things around you.
                                If you start loving yourself, your own company then you won't need anybody to make you
                                realize you are adorable, because in the end no matter what, you won't ever let you down.
                                This will make you happy.
                                If you start to value whatever you possess you can be happy.
                                No one in this world is perfect and chasing perfection will steal your happiness.
                                So you should start accepting the way you are and you can be happy.
                                But this doesn't mean you will stop defeating your negativity.
                                You should love yourself, spread that love, help people.
                                Stop worrying about the craps you have in your life,
                                people you have lost and start cherishing people you have with you now,
                                this will make you happy. Start making habits that breed happiness.<br /><br />

                                "Everyone should be rich and famous because to know that is not what it takes to be happy." <br /> -Jim Carrey
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
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

export default class TheQuarantineMantra extends React.Component {
    state = {
        root: {
            maxWidth: 1400
        },
        shareButton: false,
        viewComment: false,
        PostId: 1010,
        postUrl: "http://localhost:3000/blogs/thequarantinemantra",
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
                            <IconButton component={Link} to="/menu" >
                                <BBadge pill variant="warning">
                                    <MenuOpenIcon />
                                </BBadge>
                            </IconButton>
                            <br />
                            <Typography gutterBottom variant="h5" component="h2">
                                The Quarantine Mantra
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                First things first,
                                during this pandemic wash your hands,
                                take care of your health and maintain social distancing with some social media distancing.
                                The world is rejuvenating now and trying to make us do the same.<br />
                                A Lot of people are dying every day, may their souls rest peacefully and
                                a lot of people are suffering, we should pray for their fast recovery. <br />
                                Everything has a dark and a bright side.
                                Now let's talk about the bright side.
                                If you're not in the combat zone in this fight, you have a lot of free time,
                                I mean apart from your office work, don't have much to worry about.
                                So if you are not using this time to prioritize your purpose,
                                you are wasting this opportunity which you may never get again.
                                This should be quarantine and hustle, not quarantine and chill.<br />
                                There are tons of things to do which are productive.
                                Make a schedule and stick to it. <br />
                                Utilize this time to learn new languages. <br />
                                Improve your coding skills if you love playing with systems.<br />
                                A lot of problems are out there, pick anyone, find a solution
                                and you never know, this might end up in discoveries or inventions which may change the world.<br />
                                Read as much as you can, read about stocks, investments, real estate, funds.<br />
                                Plan for a side hustle.<br />
                                Makeover your room, try a different theme, as of now the café theme would be best
                                because customizations won't require many new pieces of stuff,
                                you can make paintings, write quotes and use them in your room. But do not go out to buy new stuff.
                                Just arrange and rearrange, this will improve your cleaning skill and next time your maid doesn't come
                                you don't have to lose your shit.<br />
                                Update resume and LinkedIn profile.<br />
                                Assess your budget, a recession is near.<br />
                                Workout and eat homemade foods.<br />
                                Cook if you love to, if not you can give a try it will be fun. <br />
                                Spend time with family, your pet, once everything will be under control you might not get this,
                                you have to run fast, maybe faster than the old days.<br />
                                Find ways to heal yourself internally, start meditation it helps in rejuvenation.<br />
                                Stay connected with your friends through video chatting platforms, plan for trips, parties.<br />
                                Try Quibi, a new streaming service has been launched.<br />
                                Don't kill your vibe worrying about this uncertainty because you can't control everything around you.<br />
                                Choose anything which can be productive and do it,
                                prepare yourself for what's coming next<br />
                                Do not just sit with your Netflix.
                                Do something so that it will be worth celebrating after everything falls into place.
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
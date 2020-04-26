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

export default class SelfLove extends React.Component {
    state = {
        root: {
            maxWidth: 1400
        },
        shareButton: false,
        viewComment: false,
        PostId: 1011,
        postUrl: "http://localhost:3000/blogs/selflove",
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
                                Self Love
                             </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Relationship status: Treating me the way I treated someone I loved.<br/>
                                What is your relationship status? 
                                Not the relationship you have with people around you,
                                it is about the relationship you have with yourself. Are you in a good relationship with yourself? 
                                If not I am sorry my friend, you need to start doing things differently.<br/>
                                Parents sacrifice a lot, they never hesitate to compromise with their well being 
                                from the point you are born till they hit their geriatric stage. 
                                All they want is you should respect their unconditional love. 
                                Apart from these beautiful people, you come across millions of people in life. 
                                Your feelings with those people vary from person to person, 
                                with best people you create memories, 
                                with good people you feel happy and worse people teach you lessons.
                                The last category of people was not bad for you. But in fact, you were not settled up with yourself
                                completely, you didn't love yourself completely so shit happened.
                                The reality is if you do not love yourself how can you expect someone else to love you the way you want.<br/><br/>
                                People have a lot of issues with bonds shared with other people around them.
                                These issues affect a lot.
                                You love so hard, it leaves a mark on your hearts, you love unconditionally, 
                                but was that unconditional? No, because if you don't love yourself unconditionally
                                how can you love other people that way.
                                All you did was thinking about the person you loved forgetting to love yourself and that is a mistake. 
                                To love someone madly you need to love yourself first and this will be reflected in your relationships.<br/><br/>
                                You can't control people, their behavior but what you can is we can control our emotions
                                of not losing shit when someone treats you badly.
                                But if once, you start investing yourself for you, living for yourself trust me miracles will show up.
                                You should design our thought process to think good and be high in reforming yourself, competing with yourself,
                                doing things you love.
                                At times you should make decisions for situation, like going out for a party with friends
                                or just sitting in your room with a beer and reading a book or watching a movie. 
                                Understand that making mistakes is ok but sticking around to consequences will lead to resentment,
                                so just move on.
                                Believe that you deserve a better life and you are gonna get it.
                                You should start liberating toxic people from your life so that you can have places for real people.
                                Gift yourself an undying love and the right person will fall for you.
                                You don't need to rush for anything in life.
                                What is meant for you will eventually be yours. All we need to do is to live for yourself.
                            <br /><br />
                            "Loving yourself isn't vanity, it's sanity."<br />
                            -Katrina Mayer
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
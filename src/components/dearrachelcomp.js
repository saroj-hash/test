import React, { Fragment } from "react"
import Blogs from "./blogs"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/TabContainer"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from "@material-ui/core/Card"
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BootstrapButton from "react-bootstrap/Button"
// import Continueblog1 from "./comp1"
import Form from "react-bootstrap/Form"
import Comment from "./comment"
import IconButton from "@material-ui/core/IconButton"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BBadge from "react-bootstrap/Badge"
import Badge from "@material-ui/core/Badge"
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Row from "react-bootstrap/Row"
import Thisshalltoopasscomp from "./thisshalltoopasscomp"
import Autumncomp from "./autumncomp"
import Deardadcomp from "./deardadcomp"
import Dearrachelcomp from "./dearrachelcomp"
import Dearfriendscomp from "./dearfriendscomp"
import Fearcomp from "./fearcomp"
import Thehappinessmantracomp from "./thehappinessmatracomp"
import Lifecomp from "./lifecomp"
import Myfavwhitesneakercomp from "./myfavwhitesneakercomp"
import Thequarantinemantracomp from "./thequarantinemantracomp"
import Selflovecomp from "./selflovecomp"
import Sizecomp from "./sizecomp"
import Choicescomp from "./choicescomp"
import Turnrightcomp from "./turnrightcomp"
import Icantdoitcomp from "./icantdoitcomp"
export default class Comp2 extends React.Component {
    state = {
        goback: false,
        root: {
            maxWidth: 1400
        },
        viewComment: false,
        color: "light",
        badgeContent: 0,
        likeclick: true,
        showMenu: false,
        contentCol: "col-md-12",
        hidden: "",
        thisshalltoopasscomp: false,
        autumncomp: false,
        deardadcomp: false,
        dearrachelcomp: false,
        dearfriendscomp: false,
        fearcomp: false,
        thehappinessmatracomp: false,
        lifecomp: false,
        myfavwhitesneakercomp: false,
        thequarantinemantracomp: false,
        selflovecomp: false,
        sizecomp: false,
        choicescomp: false,
        turnrightcomp: false,
        icantdoitcomp: false
    }
    handleLike = () => {
        this.setState({ likeclick: !this.state.likeclick })
        if (this.state.likeclick) {
            this.setState({
                color: "dark",
                badgeContent: this.state.badgeContent + 1
            })
        }
        else {
            this.setState({
                color: "light",
                badgeContent: this.state.badgeContent - 1
            })
        }
    }
    handleMenu = () => {
        this.setState({
            showMenu: true,
            hidden: "hidden",
            contentCol: "col-md-12"
        })
    }
    handleClose = () => {
        this.setState({
            showMenu: false,
            hidden: "",
            contentCol: "col-md-12"
        })
    }


    render() {
        if (this.state.goback) return <Blogs />
        if (this.state.thisshalltoopasscomp) return <Thisshalltoopasscomp />
        if (this.state.autumncomp) return <Autumncomp />
        if (this.state.deardadcomp) return <Deardadcomp />
        if (this.state.dearrachelcomp) return <Dearrachelcomp />
        if (this.state.dearfriendscomp) return <Dearfriendscomp />
        if (this.state.fearcomp) return <Fearcomp />
        if (this.state.thehappinessmatracomp) return <Thehappinessmantracomp />
        if (this.state.lifecomp) return <Lifecomp />
        if (this.state.myfavwhitesneakercomp) return <Myfavwhitesneakercomp />
        if (this.state.thequarantinemantracomp) return <Thequarantinemantracomp />
        if (this.state.selflovecomp) return <Selflovecomp />
        if (this.state.sizecomp) return <Sizecomp />
        if (this.state.choicescomp) return <Choicescomp />
        if (this.state.turnrightcomp) return <Turnrightcomp />
        if (this.state.icantdoitcomp) return <Icantdoitcomp />
        return <Fragment>
            <div className="offset-md-2 col-md-8 offset-2">
                
                    {
                        this.state.showMenu ?
                            <Card className="col-md-12">
                                <CardContent>
                                    <IconButton className="float-right" onClick={this.handleClose} >
                                        <BBadge pill variant="dark">
                                            <CancelPresentationIcon />
                                        </BBadge>
                                    </IconButton>
                                    <br /><br />

                                    <Typography variant="h3" component="h3" className="text-center">
                                        <BBadge pill variant="dark"> CONTENTS </BBadge>
                                    </Typography>

                                    <br />
                                    <Button size="large" onClick={() => this.setState({ thisshalltoopasscomp: !this.state.thisshalltoopasscomp })} >
                                        <h5>
                                            <BBadge pill variant="dark">
                                                This shall too pass
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ autumncomp: true })} >
                                        <h5>
                                            <BBadge pill variant="dark">
                                                Autumn
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ deardadcomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                Dear Dad,
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ dearrachelcomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                Dear Rachel,
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ dearfriendscomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                Dear "Friends"
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ fearcomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                Fear
                                    </BBadge>
                                        </h5>
                                    </Button>
                                    <Button size="large" onClick={() => this.setState({ thehappinessmatracomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                The Happiness Mantra
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ lifecomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                LIFE
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ myfavwhitesneakercomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                My Favorite white sneaker
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ thequarantinemantracomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                The Quarantine Mantra
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ selflovecomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                Self Love
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large">
                                        <h5>
                                            <BBadge pill variant="dark" onClick={() => this.setState({ sizecomp: true })}>
                                                Does size defines power?
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ choicescomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                Choices
                                    </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large">
                                        <h5>
                                            <BBadge pill variant="dark" onClick={() => this.setState({ turnrightcomp: true })}>
                                                Turn Right
                                     </BBadge>
                                        </h5>
                                    </Button>

                                    <Button size="large" onClick={() => this.setState({ icantdoitcomp: true })}>
                                        <h5>
                                            <BBadge pill variant="dark">
                                                I can't do it
                                    </BBadge>
                                        </h5>
                                    </Button>
                                </CardContent>
                                <br />
                            </Card> :
                            <div />
                    }
                    <br />
                    <Card style={this.state.root} className={this.state.contentCol}>
                        <CardActionArea>
                            <CardContent>
                                <IconButton hidden={this.state.hidden} onClick={this.handleMenu}>
                                    <BBadge pill variant="dark">
                                        <MenuOpenIcon />
                                    </BBadge>
                                </IconButton><br />
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dear Rachel,
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    I hope you're doing well. I wish well for Mr. and Mrs. Smith. Is Lizzie doing good? She was an adorable little pup when I gave her to you. Now she must be all grown up. Care to send her photos sometime? Just kidding. Arghh! Hasn't it been five years already? Time flies away so fast. Isn't it. I don't know if you will read this ever. But I am stuck at home, I might as well write as you say a bunch of gibberish.  Haha! Again, I might be taking the tone of a sarcastic loser, but it's alright! It's been five whole years that I took out my diary to pen down my hideous feelings. Arghhh! I am literally out of words! You see, I was this loser when we dated. But now, I am still a loser, who doesn't make a shit load of sweet money, and still stuck with ZERO partners. But you know what is changed,
                                    I started living my life as per my guidelines again. You don't say, the feeling of being suffocated, it literally smothers the very last bit of self-esteem you have. Did we ever have this tale of a love story? For, if we had, it would have ended with a lot less bitterness. Both of us had spoken some words which can never be taken back by either of us! But oh dear god, was I done being apologizing?  Fuck no! I don't know, but the thought of you in my mind makes my obnoxiously violent, and believe it or not, I would deliberately smash my hand into the god damn wall if I did not bruise like a little girl. Oh yes, do you remember slapping me in front of the whole world obliterating the tiniest self-esteem I was left with? So fucked up I was that all I could see that day was getting a black eye from getting hit by possibly the best Ex-girlfriend ever. Neither am I saying that I did not deserve it. But the slap was a bit of over-exaggeration. Parameters people set for a healthy relationship. What's up with that? Jeez, I was so not in love with you, why the fuck would I have been stuck to endless jeopardy you gave to my career? More the merrier is a just a figure of god damn speech. Isn't it? Do you know what was wrong with us in the first place? We were never really friends. We didn't hit it off as strangers either. And if I am coming out of the closet, your taste in movies makes me suicidal. No hard feelings to Ethan Hawke and Julie Delpy, Before Sunrise makes me puke after every time I see it. And you made me see that disaster of a movie every date night.
                                    You see how a love story works is you should be in love with the small gestures your partner makes. But your one and only gesture were cleaning my room, irrespective of me blabbering of how I despise a cleaned room.
                                <br />
                                Believe it or not, the Big guy made me dodge a bullet.
                        </Typography>
                                <br />
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Hoping to never see your face again,<br />
                            with lots of hate,<br />
                            Steven<br />
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ goback: true })}>
                                Back
                    </Button>
                            <Button size="small" color="primary" onClick={() => this.setState({ viewComment: !this.state.viewComment })}>
                                Comment
                    </Button>
                            <IconButton onClick={this.handleLike}>
                                <BBadge pill variant={this.state.color}>

                                    <Badge badgeContent={this.state.badgeContent} color="primary">
                                        <FavoriteBorderIcon />
                                    </Badge>
                                </BBadge>
                            </IconButton>
                        </CardActions>
                    </Card>
                

                <br /><br />
                {
                    this.state.viewComment ?
                        <Comment /> :
                        <div></div>
                }
            </div>
        </Fragment>
    }
}
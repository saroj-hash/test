import React, { Fragment } from "react"
import Footercomp from "./footercomp"
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


            <div className="offset-md-2 col-md-8 offset-md-2">
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
                        </Card>
                        :
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
                            </IconButton>
                            <br />
                            <Typography gutterBottom variant="h5" component="h2">
                                Autumn
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Oh Autumn, dear Autumn! Why do we have to go through this again and again? Why do you have to shed those yellow leaves, making nature look deranged? Why can't we just skip through the dark cloudy skies and retreating storms? Oh Autumn, dear Autumn! Why can't you be just sunny instead? Why can't you be nourishing and let those flower blossom under your shade? Why can't you let those birds chirp their song of joy? Why are your days shorter? Why are your nights longer and darker? Oh Autumn, dear Autumn! Why does it hurt so much when you are around? Are you the season of death? You are supposed to take the pain away. Instead, why do you leave us in such agony? Oh Autumn, dear Autumn! Is it true what they speak about you? Do you find utter pleasure from this, or is it absolutely necessary for the rejuvenation of nature's soul? Or do you chime in these allegations letting your head down to do the devil's work?
                                Oh Autumn, dear Autumn! Do you take guilty pleasure from these allegations, or do you shut your ears and endure chills to mark the beginning of something new? Oh Autumn, do you like the cloudy skies and those October storms or are those tears you shed doing the deeds that welcome a new beginning? Oh Autumn, is it just a disguise you take while being actually beautiful inside?
                                Autumn inside each one of us should be appreciated, for it brings the glory of the future. If it were not for autumn, we would never have the feeling of joy looking at the cherry blossom tree. If it weren't for darkness, we won't ever know, whats light looks like. If it weren't for sadness, we won't ever know how happiness feels like. If it weren't for failure, we won't ever know how sweet the success tastes. If it weren't for endings, we won't ever have new beginnings. If it weren't for closed doors, we won't ever find a place of our own. If it weren't for let-downs, we won't ever find our dream person. If it weren't for embarrassment, we won't ever learn to stand up to the expectations of people. If it weren't for foes, we won't ever have a true friend. If it weren't for those long dark nights, we won't ever see how bright days can be. If it weren't for autumns, we won't ever see springs.
                                Oh Autumn, dear Autumn! Don't you destroy the evil and pave the way for all the new beginnings?

                            </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                -From a fellow miserably heartbroken loser ...
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

            <div style={{ width: "100%" }}>
                <Footercomp />
            </div>
        </Fragment>
    }
}
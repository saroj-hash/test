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
                                    The Happiness Mantra
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">

                                    "If you are not going to talk about something during the last hour of life, then don't make it a priority during life."
                                    –Richard Corlson.
                                    Life never goes as per our plans and it will never for anyone. Every person's life is centered around finding happiness. We work hard, give our best in whatever we do, everyone around us seems to be happy, our boss, family, people in locality everyone. But how many of us ask this question to ourselves, are we really happy, does anything from these things has any consequences for our happiness? Yes, the family has, our work has but not the bar we hit every weekend, not those people we come across every day. People who are passionate about what they do are happy. But not everyone is fortunate enough to do what they love. In this fast-moving world, we run after money, fame, power, we wear masks and sometimes so much of it that we forget who we are. We assume that if we get to ride a superbike, have a lot of money, a good wine to drink, a pet to live with, a girlfriend whom we thought of spending our whole life with, we can be happy. But in fact, all these things are temporary and have the least consequences for our happiness. Of course, riding a bike makes us happy, we feel the air, the speed and adrenaline rush gives us thrills, and after all, we live once, so we should make it to the fullest. But What if someday we will be deprived of that? Money gives freedom, though it is virtual. But What if someday we lose every penny we have saved, what if our body has reached the maximum capacity of alcohol intake, the pet dies, girlfriend cheats. What's next? Now we have lost All those things that made us happy. We start feeling shattered, anxiety hits us hard, we find nothing good, those pills are not working anymore. What we do then?...
                                    But if we will be having something which we will never be able to count, like creativity which has no connection with materialistic things around us. If we start loving ourselves, our own company then we won't need anybody to make us realize we are adorable, because in the end no matter what, we won't ever let us down. This will make us happy. If we start to value whatever we possess we can be happy. No one in this world is perfect and chasing perfection will steal our happiness. So we should start accepting the way we are and we can be happy. But this doesn't mean we will stop defeating our negativity. We should love yourself, spread that love, help people. Stop worrying about the craps we have, people we have lost and start cherishing people we have with us now, this will make us happy. We should start making habits that breed happiness.

                                    "Everyone should be rich and famous because to know that is not what it takes to be happy. " -Jim Carrey
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
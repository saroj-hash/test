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
                    }<br/>
                    <Card style={this.state.root} className={this.state.contentCol}>
                        <CardActionArea>
                            <CardContent>
                                <IconButton hidden={this.state.hidden} onClick={this.handleMenu}>
                                    <BBadge pill variant="dark">
                                        <MenuOpenIcon />
                                    </BBadge>
                                </IconButton><br />
                                <Typography gutterBottom variant="h5" component="h2">
                                    Size doesn't define power
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    COVID-19, such a tiny creature, we can't even see it. It is changing the world. This virus has proved that size doesn't matter at all. It has emerged to be powerful even without a single weapon. People with immense influence like Modi JI, Vladimir Putin, Donald Trump, Angela Markel, are on a verge of losing the war against this creature but for the first time all nations together against a common enemy. Let's forget about Xi Jinping for the time being.
                                    Last few decades our life has become fast, we have forgotten the pause button. We have stopped giving a damn about other things around us, our planet, animals. All we did care about was humans as if we are the only creatures in an ecosystem. This virus is teaching us lessons and is going to bring changes to our lifestyle. It is teaching us survivability. We have started to live with whatever resources we are left with.
                                    No matter whatever we achieve, whomever we conquer we can't defeat nature. Once nature hits the saturation point of its exploitation it will find a way of letting us down. We, humans, possess the ability to win all most all battles but not the battle against certain things like nature, time, death. Time has come to stop these inhuman activities against nature. Stop killing of animals for our benefits, stop trading of their body parts like elephant ivory and bones, rhino horns, turtle shells, helmeted hornbill, ungulate horns. We should reduce meat consumption, animals we slaughter have families too. Reducing fish consumption can minimize coral reef destruction. We should not try to control them and use for our entertainment purpose.
                                    Now the climate is reviving, countries are experiencing temporary falls in carbon dioxide, nitrogen dioxide and dozens of other harmful gases. This reduction is helping nature as well as human beings reducing the risk o heart attack, asthma, and other lung diseases. Less human and vehicle movement is calming the planet.
                                    Let nature breathe some fresh air and heal. After this pandemic is over or under control we are gonna see a new world let's not make it hard for nature.
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
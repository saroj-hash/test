

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
                                Choices
                                                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">

                                Nothing in this world happens by chance. Our fulfilments and unfulfillments come from the choices we make through our actions. Sometimes we choose the wrong things predicting that these choices would lead us to achieve our goals. Our calculations go wrong and we fail miserably. On the other side, not making a choice and unwilling to get out of our comfort zone will only lead to regrets. The only way to move forward in life is choosing to put ourselves in our discomfort zones, make sacrifices and work on it. But if at all we don't make choices we can't get what we have aspired for. Here comes the difference, dreaming every time and taking action to achieve them. At points, our plan of action seems perfect, but the start is what stops most of us. No matter how good we plan out things, how perfect our calculations seem to be, still we will have to go through a lot of catastrophes. This hustle phase might seem tough rather impossible and at points, we would feel like we are left with one option, i.e giving up. But still, we should not lose heart, because we never know how close we are to the point of achievement. There will be failures, not one, not two but a lot. There will be crossroads to encounter in our path and the choice to take a particular one will decide our destiny.
                                Don't be afraid of failures, because all of them are psychological. Believe that we will succeed may not be now, after a month or a year but someday will be our day. But for that one day or that overnight success, we need to have perseverance, we have to slog our asses for a lot of days, spend a lot of sleepless nights. No one is gonna handover nothing to us. Believe me, there is no greater satisfaction than being self-made.
                                But how to make these choices, how to figure out which road to take? There are a lot of ways, but listening to our instincts and figuring out a particular thing which will make us happy even after losing everything we ever had can make us choose the right thing for us. Even at times, these decisions might fail and we get a setback, but then we can't undo it. So all we need to do is learn from it, make memories and grow.
                                Make choices and take action, some days will be easier and others will be hard. Be it easy or hard the only way to get there is, choose to start.
                                "A hard thing is done by figuring out how to start."
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
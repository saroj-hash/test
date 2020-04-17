
import { Link } from "react-router-dom"
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
                                <Button size="large" onClick={() => this.setState({ thisshalltoopasscomp: !this.state.thisshalltoopasscomp })} component={Link} to="/blogs/thisshalltoopass" >
                                    <h5>
                                        <BBadge pill variant="dark">
                                            This shall too pass
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ autumncomp: true })} component={Link} to="/blogs/autumn">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Autumn
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ deardadcomp: true })} component={Link} to="/blogs/deardad" >
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Dear Dad,
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ dearrachelcomp: true })} component={Link} to="/blogs/dearrachel">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Dear Rachel,
                                    </BBadge>
                                    </h5>
                                </Button>
                                <Button size="large" onClick={() => this.setState({ dearfriendscomp: true })} component={Link} to="/blogs/dearfriends">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Dear "Friends"
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ fearcomp: true })} component={Link} to="/blogs/fear">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Fear
                                    </BBadge>
                                    </h5>
                                </Button>
                                <Button size="large" onClick={() => this.setState({ thehappinessmatracomp: true })}  component={Link} to="/blogs/thehappinessmantra">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            The Happiness Mantra
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ lifecomp: true })} component={Link} to="/blogs/life">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            LIFE
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ myfavwhitesneakercomp: true })} component={Link} to="/blogs/myfavwhitesneaker">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            My Favorite white sneaker
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ thequarantinemantracomp: true })} component={Link} to="/blogs/thequarantinemantra">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            The Quarantine Mantra
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ selflovecomp: true })} component={Link} to="/blogs/selflove">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Self Love
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ sizecomp: true })}component={Link} to="/blogs/doessizedefinepoewer">
                                    <h5>
                                        <BBadge pill variant="dark" >
                                            Does size defines power?
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ choicescomp: true })} component={Link} to="/blogs/choices">
                                    <h5>
                                        <BBadge pill variant="dark">
                                            Choices
                                    </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large">
                                    <h5>
                                        <BBadge pill variant="dark" onClick={() => this.setState({ turnrightcomp: true })} component={Link} to="/blogs/turnright">
                                            Turn Right
                                     </BBadge>
                                    </h5>
                                </Button>

                                <Button size="large" onClick={() => this.setState({ icantdoitcomp: true })} component={Link} to="/blogs/icantdoit">
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
                                LIFE
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                It's completely ok to start living life at thirty, forty, fifty or at whatever age you realize that you aren't living your life. Trust me, it completely is. Irrespective of whatever age you belong to, you are meant to have an amazing life. If not then you are going to have that sooner or later.
                                There will be sufferings, struggles, setbacks and a lot. Life may appear to be unfair. These things are going to be tough, tougher than you have ever thought of. You will be having your favorite people around you still you feel lonely, you have resources but taking action won't be that easy, things start fading away and now you have hit the rock bottom. This is completely ok, it's ok to lose some battles, we all lose, but not getting up after you fall is not ok. So do not ever run from it. Do not believe in giving up. This breaking point in your life is a clear indication that your grind season has arrived. This is going to shape your life differently and you will be rewarded. The only thing you need to do is have faith in yourself, stay focused, give everything you have, sacrifice in all possible ways and hustle. Identify the purpose and be confident to get what you deserve. Keep going, keep finding ways to get problems solved, keep fighting with all the negatives. If something doesn't work out try the other, but keep fighting and you will hit your point. These phases in life are blessings in disguise, the more you dig in the more you gonna get it. Never forget, life happens during the most uncertain phases.
                                Now let's talk about positive things. We have at least some real people for us, food to eat, roof to stay and clothes to wear. Every day we wake up, it's a gift for us. Apart from these genuine things we create memories, achieve our goals. These things give us priceless happiness. For some people, having bikes, cars, villas, pairs of shoes ten times their age, watches, clothes, and bottles of Macallan or Ramey are happiness. But only if we have achieved this of our own. It is of a different kind and has a price. So no matter what life won't be easy and if it is so then it's not worth living.
                        </Typography>

                            <br />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => this.setState({ goback: true })} component={Link} to="/blogs">
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
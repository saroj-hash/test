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
                                </IconButton>
                                <br />
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dear Dad,
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    I hope, you're doing well. I am doing good. Is mom okay? How are Sheldon and Jessie? I heard about their big news, and I just can't be less happy. I heard about cousin Lynn, and I hope he gets okay. Believe it or not, I miss you folks back there a lot. I just want to come back home and stay there permanently! But you didn't raise me to show my back on the country. You taught me good and these are your principles that have taken me so far, and I believe, these would help me spend those endless nights in the bunker as well.
                                    Remember the night, you came back from Afghanistan? Sheldon was 4, and mom asked me to look after him, while she goes and picks you up from the station. That was the first time, I thought, yes I am responsible for someone like my Dad. Like, he looks after not just our family, but everyone else's while being days and nights stationed at a remote war zone, with absolutely no idea if he will see the faces of his kids after the very night. Well, I didn't live up to mom and you that day either, for Sheldon's stupidity of thinking that he can fly, consequently breaking a tooth. Apart from that fact, I acted just the way a big brother would. I cleaned up his mess, fed him, and tried to make him fall asleep, but oh dear God, was he nightmare back then! And now my baby brother is all grown up and ready to be a groom. I am extremely proud of him and his achievements. I remember that night when you guys returned home, I hid inside the attic, in the fear that mom would scold me for Sheldon's broken tooth. He immediately ran off to Mom showing his broken tooth. Mom called for me and I will never forget what you said to me that night.
                                    You found me inside the attic and came in and sat beside me and said,
                                    "Having a man down doesn't mean you will retreat yourselves from the war. It means you will have to push even harder to defend your squad, being selfless and brave at the same time. Son, you did the same.
                                    So what, Sheldon broke a tooth, it will grow back. But you didn't get scared and immediately called your mom leaving her all worried. You looked after him, and kept him safe until we returned. You did a commendable job and we are proud of you."
                                    Dad, you use to say those war stories. I never got afraid. Those stories ignited my zeal to serve my country even more.
                                    I never said this before, but I love you Dad! I love you so much. You are the reason behind everything, I am remotely standing for. And I hope, you can also stand up to that fact that I have made you proud, one day.
                                    Things have not been going well around here. Enemy is closing forward on us and we are left with less resources. This time, I am not sure, if I can make this. Well, I am not even sure that I will be counting my breathes while you will be reading this letter. I hope everything will be okay around there.
                                    Tell Mom, I love her. Tell Grammy, I am counting the rosary she gave me.
                                    Give Sheldon my love. Congratulate both of them on my behalf. Wish you the best holidays ahead.
                        </Typography>
                                <br />
                                <Typography variant="body2" color="textSecondary" component="p">
                                    - Your Son, Mike...
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
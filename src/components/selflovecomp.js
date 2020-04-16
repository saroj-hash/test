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
                                    Self Love
                        </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Relationship status: Treating me the way I treated someone I loved.
                                    What is your relationship status? Not the relationship you have with people around you, it is about the relationship you have with yourself. Are you in a good relationship with yourself? If not I am sorry my friend, you need to start doing things differently.
                                    Parents sacrifice a lot of things for us, they never hesitate to compromise with their well being from the point we are born till they hit their geriatric stage. All they want is we should respect that unconditional love. Apart from these beautiful people, we come across millions of people in life. Our feelings with these people vary from person to person, with best people we create memories, with good people we feel happy and worse people give us lessons. The last category of people was not bad for us. But in fact, we were not settled up with ourselves completely, we didn't love ourselves completely so shit happened. The reality is if we do not love ourselves how can we expect someone else to love us the way we wanted. People have a lot of issues with bonds shared with other people around them. These issues affect a lot. We love people so much that it leaves a mark on our hearts, we love unconditionally, but was that unconditional? No, because if we don't love our self unconditionally how can we love other people that way. All we did was thinking about the person we loved forgetting to love ourselves and that is a mistake. To love our partner madly we need to love our selves first and this will be reflected in our relationships. We can't control people, their behavior but what we can do is we can control our emotions of not losing shit when someone treats us badly.
                                    But if once, we start investing ourselves for us, living for ourselves trust me miracles will show up. We should design our thought process to think good and be high in reforming ourselves, competing with ourselves, doing things we love. At times we should make decisions for a specific situation for us like going out for a party with friends or just sitting in our room with a beer and reading a book. Understand that making mistakes is ok but sticking around to consequences will lead to resentment, so just move on.
                                    Believe that we deserve a better life and we gonna get it. We should start liberating toxic people from our life so that we can have places for real people.
                                    Gift yourself an undying love and the right person will fall for you. We don't need to rush for anything in life. What is meant for us will eventually be ours. All we need to do is to live for ourselves.
                            <br /><br />
                            "Loving yourself isn't vanity, it's sanity."<br />
                            -Katrina Mayer
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
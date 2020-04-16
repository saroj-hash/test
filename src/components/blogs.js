import Tooltip from "@material-ui/core/Tooltip"
import ScrollUpButton from "react-scroll-up-button"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import React, { Component,Fragment } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Container from "react-bootstrap/TabContainer"
import IconButton from '@material-ui/core/IconButton';
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import Row from "react-bootstrap/Row"
import Badge from "react-bootstrap/Badge"
import Typography from "@material-ui/core/Typography"
import Thisshalltoopasscomp from "./thisshalltoopasscomp"
import Autumncomp from "./autumncomp"
import Deardadcomp from "./deardadcomp"
import Dearrachelcomp from "./dearrachelcomp"
import Dearfriendscomp from "./dearfriendscomp"
import Fearcomp from "./fearcomp"
import Thehappinessmantracomp from "./thehappinessmatracomp"
import Lifecomp from "./lifecomp"
import Myfavoritewhitesneakercomp from "./myfavwhitesneakercomp"
import Thequarantinemantracomp from "./thequarantinemantracomp"
import Selflovecomp from "./selflovecomp"
import Sizecomp from "./sizecomp"
import Choicescomp from "./choicescomp"
import Turnrightcomp from "./turnrightcomp"
import Icantdoitcomp from "./icantdoitcomp"
import Home from "./home"
import Footercomp from "./footercomp"
export default class Blogs extends Component {
    state = {
        continueblog1: false,
        continueblog2: false,
        continueblog3: false,
        continueblog4: false,
        continueblog5: false,
        continueblog6: false,
        continueblog7: false,
        continueblog8: false,
        continueblog9: false,
        continueblog10: false,
        continueblog11: false,
        continueblog12: false,
        continueblog13: false,
        continueblog14: false,
        continueblog15: false,
        home: false
    }
    render() {
        if (this.state.continueblog2) return <Autumncomp />
        if (this.state.continueblog1) return <Thisshalltoopasscomp />
        if (this.state.continueblog3) return <Deardadcomp />
        if (this.state.continueblog4) return <Dearrachelcomp />
        if (this.state.continueblog5) return <Dearfriendscomp />
        if (this.state.continueblog6) return <Fearcomp />
        if (this.state.continueblog7) return <Thehappinessmantracomp />
        if (this.state.continueblog8) return <Lifecomp />
        if (this.state.continueblog9) return <Myfavoritewhitesneakercomp />
        if (this.state.continueblog10) return <Thequarantinemantracomp />
        if (this.state.continueblog11) return <Selflovecomp />
        if (this.state.continueblog12) return <Sizecomp />
        if (this.state.continueblog13) return <Choicescomp />
        if (this.state.continueblog14) return <Turnrightcomp />
        if (this.state.continueblog15) return <Icantdoitcomp />
        if (this.state.home) return <Home />
        return <Fragment>
        
        
        <div className="container-fluid" style={{backgroundColor:"black"}}>
           
           
            <BrowserRouter>
                <Link to="/home">
                <Tooltip title="Go back to home page" placement="bottom" arrow>
                <IconButton aria-label="down" className="btn btn-block" onClick={() => this.setState({ home: true })}>
                <Badge pill variant="primary">
                    <ArrowDropUpRoundedIcon />
                </Badge>
                </IconButton>
                </Tooltip>
                </Link>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                </Switch>
            </BrowserRouter>
        
          
            
            <Row>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    This shall too pass
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Yes! This shall too pass. So what, if you cry your eyes out, this shall too pass. So what, if things will never be the same, this shall too pass. So what, if you get crippling depression,...
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog1: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Autumn
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Oh Autumn, dear Autumn! Why do we have to go through this again and again? Why do you have to shed those yellow leaves, making nature look deranged? Why can't we...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog2: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dear Dad,
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    I hope, you're doing well. I am doing good. Is mom okay? How are Sheldon and Jessie? I heard about their big news, and I just can't be less happy. I heard about cousin Lynn,...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog3: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dear Rachel,
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    I hope you're doing well. I wish well for Mr. and Mrs. Smith. Is Lizzie doing good? She was an adorable little pup when I gave her to you. Now she must be all grown up. Care to ...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog4: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </Row>
            <Row><br /></Row>
            <Row>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dear "Friends",
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    We were on a break! The age-old cliche. Its been almost three decades since your first episode aired, and I see you're still the best show on the Tv even now.  Not much has changed since then,...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog5: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Fear
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    An illusion created in mind which stops life, a lie that holds back almost everything. This is an emotion that causes physiological changes which are later reflected in behavioral changes. Among all fears...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog6: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Happiness Mantra
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    "If you are not going to talk about something during the last hour of life, then don't make it a priority during life."
                                <br /><br />
                                - Richard Corlson...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog7: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    LIFE
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    It's completely ok to start living life at thirty, forty, fifty or at whatever age you realize that you aren't living your life. Trust me, it completely is. Irrespective of whatever age you belong to,you are meant to have an amazing life...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog8: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </Row>
            <Row><br /></Row>
            <Row>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    My favorite white sneaker
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Have you ever imagined how important shoes are? Shoes were as a staple of my outfit. Especially, my white sneakers, whatever clothes I put on my sneakers never disappoint me.This time it added...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog9: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Quarantine Mantra
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    First things first, during this pandemic wash your hands, take care of your health and maintain social distancing with some social media distancing. The world is rejuvenating now and trying to make us do the same...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog10: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Self Love
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Relationship status: Treating me the way I treated someone I loved. What is your relationship status? Not the relationship you have with people around you, it is about the relationship you have with yourself...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog11: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Does size defines power?
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                COVID-19, such a tiny creature, we can't even see it. It is changing the world. This virus has proved that size doesn't matter at all. It has emerged to be powerful even without a single weapon. People with immense influence...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog12: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </Row>
            <Row><br/></Row>
            <Row>
            <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                   Choices 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Nothing in this world happens by chance. Our fulfilments and unfulfillments come from the choices we make through our actions. Sometimes we choose the wrong things predicting that these choices...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog13: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                   Turn right 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Life is a bumpy long road to cover. The day we are born we start to walk. Every day, at every point of life we walk. Sometimes alone, sometimes with beautiful people. The beauty of this journey lies in...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog14: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
                <div className=" col-md-3"  >
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                   I can't do it.
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                When we were cute little human beings, just growing up to face the world, we were taught the limitations of humanity. We were told to adhere to the practical aspect of everything . We were asked to lay down...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => this.setState({ continueblog15: true })}>
                                Continue Reading...
                            </Button>
                        </CardActions>
                    </Card>
                </div>
          </Row> 
          <br/>
          </div>
          <Footercomp/>
          </Fragment>
    }
}

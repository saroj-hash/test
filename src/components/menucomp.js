import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import {Typography, Button,IconButton} from "@material-ui/core"
import Badge from "react-bootstrap/Badge"
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Footer from "./footercomp"
export default class Menu extends Component {
    render() {
        return <Fragment>
            <div className="col-md-12" style={{backgroundColor:"black",height:"100%"}}>
                <div className="offset-md-2 col-md-8 offset-md-2" >
                    <IconButton className="float-right" component = {Link} to="/blogs" >
                        <Badge pill variant="warning">
                            <CancelPresentationIcon />
                        </Badge>
                    </IconButton>
                    <br /><br />

                    <Typography variant="h3" component="h3" className="text-center">
                        <Badge pill variant="warning"> CONTENTS </Badge>
                    </Typography>

                    <br />
                    <Button size="large" component={Link} to="/blogs/thisshalltoopass" >
                        <h5>
                            <Badge pill variant="warning">
                                This shall too pass
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/autumn">
                        <h5>
                            <Badge pill variant="warning">
                                Autumn
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/deardad" >
                        <h5>
                            <Badge pill variant="warning">
                                Dear Dad,
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/dearrachel">
                        <h5>
                            <Badge pill variant="warning">
                                Dear Rachel,
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/dearfriends">
                        <h5>
                            <Badge pill variant="warning">
                                Dear "Friends"
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/fear">
                        <h5>
                            <Badge pill variant="warning">
                                Fear
                                    </Badge>
                        </h5>
                    </Button>
                    <Button size="large" component={Link} to="/blogs/thehappinessmantra">
                        <h5>
                            <Badge pill variant="warning">
                                The Happiness Mantra
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large"  component={Link} to="/blogs/life">
                        <h5>
                            <Badge pill variant="warning">
                                LIFE
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/myfavwhitesneaker">
                        <h5>
                            <Badge pill variant="warning">
                                My Favorite white sneaker
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large"  component={Link} to="/blogs/thequarantinemantra">
                        <h5>
                            <Badge pill variant="warning">
                                The Quarantine Mantra
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/selflove">
                        <h5>
                            <Badge pill variant="warning">
                                Self Love
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/doessizedefinepoewer">
                        <h5>
                            <Badge pill variant="warning" >
                                Does size defines power?
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/choices">
                        <h5>
                            <Badge pill variant="warning">
                                Choices
                                    </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/turnright">
                        <h5>
                            <Badge pill variant="warning" >
                                Turn Right
                            </Badge>
                        </h5>
                    </Button>

                    <Button size="large" component={Link} to="/blogs/icantdoit">
                        <h5>
                            <Badge pill variant="warning">
                                I can't do it
                                    </Badge>
                        </h5>
                    </Button>
                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            <Footer/>
        </Fragment>
    }
}
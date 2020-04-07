import React, { Fragment } from "react"
import Home from "./comp1"
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
import Continueblog1 from "./comp1"
export default class Comp2 extends React.Component {
    state = {
        goback: false,
        root: {
            maxWidth: 1220
        }
    }
    render() {
        if (this.state.goback) return <Home />
        else return <Fragment>
            <Card style={this.state.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Autumn
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Oh Autumn, dear Autumn! Why do we have to go through this again and again? Why do you have to shed those yellow leaves, making nature look deranged? Why can't we just skip through the dark cloudy skies and retreating storms? Oh Autumn, dear Autumn! Why can't you be just sunny instead? Why can't you be nourishing and let those flower blossom under your shade? Why can't you let those birds chirp their song of joy? Why are your days shorter? Why are your nights longer and darker? Oh Autumn, dear Autumn! Why does it hurt so much when you are around? Are you the season of death? You are supposed to take the pain away. Instead, why do you leave us in such agony? Oh Autumn, dear Autumn! Is it true what they speak about you? Do you find utter pleasure from this, or is it absolutely necessary for the rejuvenation of nature's soul? Or do you chime in these allegations letting your head down to do the devil's work?
                            Oh Autumn, dear Autumn! Do you take guilty pleasure from these allegations, or do you shut your ears and endure chills to mark the beginning of something new? Oh Autumn, do you like the cloudy skies and those October storms or are those tears you shed doing the deeds that welcome a new beginning? Oh Autumn, is it just a disguise you take while being actually beautiful inside?
                            Autumn inside each one of us should be appreciated, for it brings the glory of the future. If it were not for autumn, we would never have the feeling of joy looking at the cherry blossom tree. If it weren't for darkness, we won't ever know, whats light looks like. If it weren't for sadness, we won't ever know how happiness feels like. If it weren't for failure, we won't ever know how sweet the success tastes. If it weren't for endings, we won't ever have new beginnings. If it weren't for closed doors, we won't ever find a place of our own. If it weren't for let-downs, we won't ever find our dream person. If it weren't for embarrassment, we won't ever learn to stand up to the expectations of people. If it weren't for foes, we won't ever have a true friend. If it weren't for those long dark nights, we won't ever see how bright days can be. If it weren't for autumns, we won't ever see springs.
                            Oh Autumn, dear Autumn! Don't you destroy the evil and pave the way for all the new beginnings?

                        </Typography>


                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => this.setState({ goback: true })}>
                        Back
                    </Button>
                    <Button size="small" color="primary">
                        Comment
                    </Button>
                </CardActions>
            </Card>
        </Fragment>
    }
}
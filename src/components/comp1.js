import React from "react"
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
import Continueblog1 from "./comp2"
import Continueblog2 from "./comp3"
export default class Comp1 extends React.Component {
    state = {
        index: 0,
        continueblog1: false,
        continueblog2: false,
        quotes: [
            {
                quote: "I got a list, here's the order of my list that it's in; It goes, Reggie, Jay-Z, Tupac and Biggie Andre from Outkast, Jada, Kurupt, Nas and then me",
                by: "Eminem"
            },
            {
                quote: "I see no changes all I see is racist faces misplaced hate makes disgrace to races",
                by: "2pac"
            },
            {
                quote: "This is ten percent luck Twenty percent skill Fifteen percent concentrated power of will Five percent pleasure Fifty percent pain And a hundred percent reason to remember the name",
                by: "Fort Minor"
            }
        ],
        root: {
            maxWidth: 345,
        }

    }
    generateRandomIndex = () => {
        let value = Math.floor(
            Math.random() * ((this.state.quotes.length - 1) - 0 + 1) + 0
        )
        this.setState({
            index: value
        })
    }
    componentWillMount = () => {
        this.generateRandomIndex()
    }


    render() {
        if (this.state.continueblog1) return <Continueblog1 />
        if (this.state.continueblog2) return <Continueblog2 />
        return <React.Fragment>
            <Jumbotron fluid>
                <Container>
                    <h1>{this.state.quotes[this.state.index].quote}</h1>
                    <br />
                    <h3>
                        - {this.state.quotes[this.state.index].by}
                    </h3>
                </Container>
            </Jumbotron>
            <div className="row">
                <Card style={this.state.root}>
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
                <Card style={this.state.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Autumn
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Oh Autumn, dear Autumn! Why do we have to go through this again and again? Why do you have to shed those yellow leaves, making nature look deranged? Why can't we just skip through the dark ...
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
        </React.Fragment >
    }

}
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/TabContainer"
import Photo1 from "../assets/photo1.jpg"
import Photo2 from "../assets/photo2.jpg"
import Photo3 from "../assets/photo3.jpg"
import Photo4 from "../assets/photo4.jpg"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import Badge from 'react-bootstrap/Badge'
import Blogs from "./blogs"
export default class Comp1 extends React.Component {
    state = {
        blogs:false,
        index: 0,
        quotes: [
            {
                quote: '"The beautiful thing about fear is when you run to it, it runs away."',
                by: "Robin Sharma",
                url: "url("+ Photo1 +")"
            },
            {
                quote: '"The only thing that makes a dream impossible to achieve: the fear of failure."',
                by: "Paulo Coelho",
                url: "url("+ Photo2 +")"
            },
            {
                quote: '"Nothing in this world is ever completely wrong. Even a stopped clock is right twice a day."',
                by: "Paulo Coelho",
                url: "url("+ Photo3 +")"
            },
            {
                quote: '"Be brave .Take risks. Nothing can substitute experience"',
                by: "Paulo Coelho",
                url: "url("+ Photo4 +")"
            }
        ],
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
        if(this.state.blogs) return <Blogs/>
        return <body style={{width:"100%", height:"100%" }}>
                <div className="container-fluid" style={{backgroundImage:this.state.quotes[this.state.index].url , height:"100%",width:"100%", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize:"cover"}}>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <Typography variant="h4" component="h4" style={{fontStyle:"italic"}} className="text-light text-center">
                        {this.state.quotes[this.state.index].quote}
                    </Typography>
                    <br/><br/>
                    <Typography variant="h4" component="h4" style={{fontStyle:"italic"}} className="text-light text-center">
                        -{this.state.quotes[this.state.index].by}
                    </Typography>
                    <br/><br/><br/><br/>
                    <IconButton aria-label="down" className="float-right" onClick={()=>{this.setState({blogs:true})}}>
                        <Badge pill variant="danger">
                            <ArrowDropDownRoundedIcon/>
                        </Badge>
                    </IconButton>
                    <br/><br/><br/>
                </div>
        </body>
    }

}

// commented
{/* <div className="row">
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
</div> */}
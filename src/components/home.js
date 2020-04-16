import "bootstrap/dist/css/bootstrap.min.css"
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from 'react-bootstrap/Badge'
import Blogs from "./blogs"
import Footercomp from "./footercomp"
import Row from "react-bootstrap/Row"
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import FormControl from "@material-ui/core/FormControl"
import FormHelperText from "@material-ui/core/FormHelperText"
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import TextField from "@material-ui/core/TextField"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import React, { Fragment, Component } from "react"
import Container from "react-bootstrap/TabContainer"
import Photo1 from "../assets/photo1.jpg"
import Photo2 from "../assets/photo2.jpg"
import Photo3 from "../assets/photo3.jpg"
import Photo4 from "../assets/photo4.jpg"
export default class Home extends Component {
    state = {
        blogs: false,
        index: 0,
        Quotes: [
            {
                quote : '"If you live among the wolves, you have to act like a wolf."',
                by : "Nikita Khruschev"
            },
            {
                quote : '"Wolves and women are relational by nature, inquiring, possessed of great endurance and strength. They are deeply intuitive, intensely concerned with their young, their mate and their pack. Yet both have been hounded, harassed and falsely imputed to be devouring and devious, overly aggressive, of less value than those who are their detractors."',
                by : "Clarisa Pinkola Estes"
            },
            {
                quote : `"We have enforced a Darwinian process on wolves, turning them into the shy and elusive animals they've become. They didn't have that fear of us 30,000 years ago. We didn't have gunpowder; we had rocks. Wolves would have seen us as lunch, and we were weak and slow and tasty."`,
                by : "W Bruce Cameron"
            },
            {
                quote : `"When I was young, I asked my priest how you could get to Heaven and still protect yourself from all the evil in the world. He told me what God said to his children. You are sheep among wolves. Be wise as serpents, yet innocent as doves."`,
                by : "Casey Affleck"
            },
            {
                quote : `"Fear isn't so difficult to understand. After all, weren't we all frightened as children? Nothing has changed since Little Red Riding Hood faced the big bad wolf. What frightens us today is exactly the same sort of thing that frightened us yesterday. It's just a different wolf. This fright complex is rooted in every individual."`,
                by : "Alfred Hitchcock"
            },
            {
                quote : `"A man might befriend a wolf, even break a wolf, but no man could truly tame a wolf."`,
                by : "George R.R. Martin, A Dance with Dragons"
            },
            {
                quote : `"To run with the wolf was to run in the shadows, the dark ray of life, survival and instinct. A fierceness that was both proud and lonely, a tearing, a howling, a hunger and thirst. Blessed are they who hunger and thirst. A strength that would die fighting, kicking, screaming, that wouldn't stop until the last breath had been wrung from its body. The will to take one's place in the world. To say 'I am here.' To say 'I am."`,
                by : "O. R. Melling"
            },
            

        ]
    }

    generateRandomIndex = () => {
        let value = Math.floor(
            Math.random() * ((this.state.Quotes.length - 1) - 0 + 1) + 0
        )
        this.setState({
            index: value
        })
    }
    componentWillMount = () => {
        this.generateRandomIndex()
    }

    render() {
        if (this.state.blogs) return <Blogs />
        return <Fragment>
            <Container style={{ width: "100%", height: "100%" }}>
                <div style={{ width: "100%", height: "100%", backgroundColor: "black" }}>
                    <Typography component="h2" variant="h2" style={{ color: "orange", fontFamily: "Berlin Sans FB", borderBottom:"1px solid orange" }} className="text-center">
                        WOLFWALKER
                    </Typography>
                    <br/><br/>
                   <div className="offset-md-2 col-md-8 offset-md-2">
                   <Typography component="h5" variant="h5" style={{ color: "orange", fontFamily: "Berlin Sans FB"}} className="text-left">
                    Signifies generosity, intuition, idealism, romance, creativity, tolerance and wisdom.
                    <br/><br/>
                    Wolfwalkers are ambitious spirits. Solving problems give us pleasure. We defend injustice. We trust our trained instincts and never settle for hearing and believing. We look for evidence. We are empathetic and can read others. We believe in romance, service, and value loyalty. We believe in  creating a harmonious world.
                    </Typography>
                   </div>
                   <br/><br/>
                   <img src={Photo4} className="img img-fluid"/> 
                   <br/><br/><br/><br/>
                    <div className="offset-md-2 col-md-8 offset-md-2">
                            <Typography variant="h5" component="h5" style={{color:"orange", fontFamily: "Berlin Sans FB"}} className="text-left">
                                {this.state.Quotes[this.state.index].quote}
                                <br/><br/>
                                -{this.state.Quotes[this.state.index].by}
                            </Typography>
                        </div>
                        <br/><br/>
                    <BrowserRouter>
                        <Link to="/blogs">
                            <Tooltip title="Go directly to blogs" placement="top" arrow>
                                <IconButton aria-label="down" className="btn btn-block" onClick={() => { this.setState({ blogs: true }) }}>
                                    <Badge pill variant="danger">
                                        <ArrowDropDownRoundedIcon />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                        </Link>
                        <Switch>
                            <Route exact path="/blogs" component={Blogs} />
                        </Switch>
                    </BrowserRouter>
                    <br/><br/>
                </div>
                <Footercomp />
            </Container>
        </Fragment>
    }
}


















// import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom"
// import React, {Fragment} from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
// import Container from "react-bootstrap/TabContainer"
// import Photo37 from "../assets/photo37.jpg"
// import Photo41 from "../assets/photo41.jpg"
// import Photo44 from "../assets/photo44.jpg"
// import Photo45 from "../assets/photo45.jpg"
// import Photo46 from "../assets/photo46.jpg"
// import Photo47 from "../assets/photo47.jpg"
// import Photo48 from "../assets/photo48.jpg"
// import Photo49 from "../assets/photo49.jpg"
// import Photo50 from "../assets/photo50.jpg"
// import Photo50V from "../assets/photo50.mp4"
// import Photo51 from "../assets/photo51.jpg"
// import Photo52 from "../assets/photo52.jpg"
// import Photo53 from "../assets/photo53.jpg"
// import Photo54 from "../assets/photo54.jpg"
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
// import Tooltip from '@material-ui/core/Tooltip';
// import Badge from 'react-bootstrap/Badge'
// import Blogs from "./blogs"
// import Footercomp from "./footercomp"
// import Row from "react-bootstrap/Row"
// import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
// import FormControl from "@material-ui/core/FormControl"
// import FormHelperText from "@material-ui/core/FormHelperText"
// import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
// import TextField from "@material-ui/core/TextField"
// export default class Comp1 extends React.Component {
//        // {
//             //     url: "url("+ Photo49 +")"
//             // },
//             // {
//             //     url: "url("+ Photo50V +")"
//             // },
//             // {
//             //     url: "url("+ Photo50 + ")"
//             // },
//             // {
//             //     url: "url("+ Photo51 +  ")"
//             // },
//             // {
//             //     url: "url("+ Photo52 +  ")"
//             // },
//             // {
//             //     url: "url("+ Photo53+  ")"
//             // },
//             //  {
//             //     url: "url("+ Photo54+  ")"
//             // },
//         ],
//     }
//     generateRandomIndex = () => {
//         let value = Math.floor(
//             Math.random() * ((this.state.quotes.length - 1) - 0 + 1) + 0
//         )
//         this.setState({
//             index: value
//         })
//     }
//     componentWillMount = () => {
//         this.generateRandomIndex()
//     }


//     render() {
//         
//         return <Fragment>
//             <Row>
//             <div className="container-fluid" style={{ backgroundColor:"black" , height: "100%", width: "100%", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
//                 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//                 <Typography variant="h4" component="h4" style={{ fontStyle: "italic" , fontFamily:"Monaco" }} className="text-light text-center">
//                     {this.state.quotes[this.state.index].quote}
//                 </Typography>
//                 <br /><br />
//                 <Typography variant="h4" component="h4" style={{ fontStyle: "italic" , fontFamily:"Monaco" }} className="text-light text-center">
//                     -{this.state.quotes[this.state.index].by}
//                 </Typography>
//                 <br /><br /><br /><br />

//                 <br /><br /><br />
//             </div>
//             <br /><br />
//             </Row>
//             {/* <Row style={{width:"100%"}}>
//                 <br /><br />

//             </Row> */}
//             {/* <Footercomp /> */}
//         </Fragment>
//     }

// }

import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import  Badge from "react-bootstrap/Badge"
import Typography from "@material-ui/core/Typography"
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
export default class Menu extends Component {
    state={
        thisshalltoopasscomp:false,
        autumncomp:false,
        deardadcomp:false,
        dearrachelcomp:false,
        dearfriendscomp:false,
        fearcomp:false,
        thehappinessmatracomp:false,
        lifecomp:false,
        myfavwhitesneakercomp:false,
        thequarantinemantracomp:false,
        selflovecomp:false,
        sizecomp:false,
        choicescomp:false,
        turnrightcomp:false,
        icantdoitcomp:false
    }
    render() {
        if(this.state.thisshalltoopasscomp) return <Thisshalltoopasscomp/>
        if(this.state.autumncomp) return <Autumncomp/>
        if(this.state.deardadcomp) return <Deardadcomp/>
        if(this.state.dearrachelcomp) return <Dearrachelcomp/>
        if(this.state.dearfriendscomp) return <Dearfriendscomp/>
        if(this.state.fearcomp) return <Fearcomp/>
        if(this.state.thehappinessmatracomp) return <Thehappinessmantracomp/>
        if(this.state.lifecomp) return <Lifecomp/>
        if(this.state.myfavwhitesneakercomp) return <Myfavwhitesneakercomp/>
        if(this.state.thequarantinemantracomp) return <Thequarantinemantracomp/>
        if(this.state.selflovecomp) return <Selflovecomp/>
        if(this.state.sizecomp) return <Sizecomp/>
        if(this.state.choicescomp) return <Choicescomp/>
        if(this.state.turnrightcomp) return <Turnrightcomp/>
        if(this.state.icantdoitcomp) return <Icantdoitcomp/>
        return <div className="container-fluid">
            <Button size="large" onClick={()=>this.setState({thisshalltoopasscomp:!this.state.thisshalltoopasscomp})} >
                <h5>
                <Badge pill variant="dark">
                    This shall too pass
                </Badge>
                </h5>
            </Button>

            <Button size="large" onClick={()=>this.setState({autumncomp:true})} >
                <h5>
                <Badge pill variant="dark">
                    Autumn
                </Badge>
                </h5>
            </Button>

            <Button size="large" onClick={()=>this.setState({deardadcomp:true})}>
                <h5>
                <Badge pill variant="dark">
                    Dear Dad,
                </Badge>
                </h5>
            </Button>
            
            <Button size="large" onClick={()=>this.setState({dearrachelcomp:true})}>
                <h5>
                <Badge pill variant="dark">
                    Dear Rachel,
                </Badge>
                </h5>
            </Button>
            
            <Button size="large" onClick={()=>this.setState({dearfriends:true})}>
                <h5>
                <Badge pill variant="dark">
                    Dear "Friends"
                </Badge>
                </h5>
            </Button>
            
            <Button size="large" onClick={()=>this.setState({fearcomp:true})}>
                <h5>
                <Badge pill variant="dark">
                    Fear
                </Badge>
                </h5>
            </Button>
            <Button size="large" onClick={()=>this.setState({thehappinessmatracomp:true})}>
                <h5>
                <Badge pill variant="dark">
                    The Happiness Mantra
                </Badge>
                </h5>
            </Button>
            
            <Button size="large" onClick={()=>this.setState({lifecomp:true})}>
                <h5>
                <Badge pill variant="dark">
                    LIFE
                </Badge>
                </h5>
            </Button>
            
            <Button size="large" onClick={()=>this.setState({myfavwhitesneakercomp:true})}>
                <h5>
                <Badge pill variant="dark">
                    My Favorite white sneaker
                </Badge>
                </h5>
            </Button>
            
            <Button size="large" onClick={()=>this.setState({thequarantinemantracomp:true})}>
                <h5>
                <Badge pill variant="dark">
                    The Quarantine Mantra
                </Badge>
                </h5>
            </Button>
            
            <Button size="large" onClick={()=>this.setState({selflovecomp:true})}>
                <h5>
                <Badge pill variant="dark">
                    Self Love
                </Badge>
                </h5>
            </Button>
            
            <Button size="large">
                <h5>
                <Badge pill variant="dark" onClick={()=>this.setState({sizecomp:true})}>
                    Does size defines power?
                </Badge>
                </h5>
            </Button>
            
            <Button size="large" onClick={()=>this.setState({choicescomp:true})}>
                <h5>
                <Badge pill variant="dark">
                    Choices
                </Badge>
                </h5>
            </Button>
            
            <Button size="large">
                <h5>
                <Badge pill variant="dark" onClick={()=>this.setState({turnrightcomp:true})}>
                    Turn Right
                </Badge>
                </h5>
            </Button>
            
            <Button size="large" onClick={()=>this.setState({icantdoitcomp:true})}>
                <h5>
                <Badge pill variant="dark">
                    I can't do it
                </Badge>
                </h5>
            </Button>
            

            
        </div>
    }
}
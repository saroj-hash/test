import React,{Component,Fragment} from "react"
import Typography from "@material-ui/core/Typography"
import Row from "react-bootstrap/Row"
import "bootstrap/dist/css/bootstrap.min.css"
import Saroj from "../assets/saroj.png"
import Aditya from "../assets/aditya5.png"
// import Aditya from "../assets/aditya4.png"
import Button from "react-bootstrap/Button"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import EmailIcon from "@material-ui/icons/Email"
import Footer from "./footercomp"

export default class AboutUs extends Component{
    state = {
        instagram1 : false,
        instagram2 : false,
        facebook1 : false,
        facebook2 : false,
        email1 : false,
        email2 : false,
        div1 : {
            style1 : {border : "1px solid orange"},
            style2 : { color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "1px solid orange"},
            df1 : "Founder",
            df2 : "Project Manager",
            df3 : "Content writer",
            button : "outline-warning",
            className : "float-right",
            linkColor : {color : "orange"}
        },
        div2 : {
            style1 : {border : "1px solid orange"},
            style2 : { color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "1px solid orange"},
            df1 : "Cofounder",
            df2 : "Developper",
            df3 : "Content curator and writer",
            button : "outline-warning",
            className : "float-right",
            linkColor : {color : "orange"}
        }
    }
    changeStyleEnterdiv1 = () => {
        
        let modifiedDiv1 = {
            style1 : {border : "5px solid orange"},
            style2 : { color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "5px solid orange"},
            df1 : "saroj_acharya",
            df2 : "Saroj Acharya",
            df3 : "asaroj888@gmail.com",
            button : "warning",
            className : "btn btn-block",
            linkColor : {color : "black"}
        }
        this.setState({
            instagram1 : true,
            facebook1 : true,
            email1 : true,
            div1 : modifiedDiv1
        })
    }

    changeStyleLeavediv1 = () => {
        
        let modifiedDiv1 = {
            style1 : {border : "1px solid orange"},
            style2 : { color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "1px solid orange"},
            df1 : "Founder",
            df2 : "Project Manager",
            df3 : "Content writer",
            button : "outline-warning",
            className : "float-right",
            linkColor : {color : "orange"}
        }
        this.setState({
            instagram1 : false,
            facebook1 : false,
            email1 : false,
            div1 : modifiedDiv1
        })
    }

    changeStyleEnterDiv2 = () => {
        let modifiedDiv2 = {
            style1 : {border : "5px solid orange"},
            style2 : { color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "5px solid orange"},
            df1 : "_aditya_mahapatra_",
            df2 : "Aditya Narayan",
            df3 : "tadim777@gmail.com",
            button : "warning",
            className : "btn btn-block",
            linkColor : {color : "black"}
        }
        this.setState({
            instagram2 : true,
            facebook2 : true,
            email2 : true,
            div2 : modifiedDiv2
        })
    }

    changeStyleLeaveDiv2 = () => {
        let modifiedDiv2 = {
            style1 : {border : "1px solid orange"},
            style2 : { color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "1px solid orange"},
            df1 : "Cofounder",
            df2 : "Developper",
            df3 : "Content curator and writer",
            button : "outline-warning",
            className : "float-right",
            linkColor : {color : "orange"}
        }
        this.setState({
            instagram2 : false,
            facebook2 : false,
            email2 : false,
            div2 : modifiedDiv2
        })
    }

    

    render(){
        return <Fragment>
            <div style={{ backgroundColor: "black" }} className="container-fluid">
            <div className="offset-md-2 col-md-8 offset-md-2">
            <Typography component="h2" variant="h2" style={{ color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "1px solid orange" }} className="text-center">
                 THE PURPOSE
            </Typography>
            <br/><br/>
            <Typography component="h6" variant="h6" style={{ color: "orange", fontFamily: "Berlin Sans FB"}} className="text-justified">
            Wolfwalkers believe that there is no such dream which a person can't accomplish.
            All it takes is to choose the right path and believe in your journey.<br/><br/>
            This journal will help you to overcome your fear and make you believe that 
            everything you want to have in your life is on the other side of fear.
            You deserve better and you are gonna get it if you are ready to give all 
            that it will take to attain it.<br/><br/>
            If you are un-wiling to fail, you are unlikely to succeed. All your failures and 
            success are based on your right decisions which come from experiences and these 
            experiences can only be acquired by failures.<br/><br/>
            Failure should be a part of your journey and you should embrace it and learn from it.<br/><br/>
            You should have no regrets of not pursuing your dreams. During your geriatric stage, 
            when you look back at your life, you should proudly say, that was the life I wanted 
            to live and I have lived it. Be the brightest light, do things that make you feel 
            alive and worth celebrating.<br/><br/>
            </Typography>
            <br/><br/><br/>
            <Typography component="h2" variant="h2" style={{ color: "orange", fontFamily: "Berlin Sans FB", borderBottom: "1px solid orange" }} className="text-center">
                 MEET THE TEAM
            </Typography>
            <br/><br/>
            <Row>
                <div className="col-md-6">
                    <img className="img img-fluid" src={Saroj}/>
                    <br/><br/>
                </div>
                <div className="col-md-6" style={this.state.div1.style1} onMouseEnter = {this.changeStyleEnterdiv1} onMouseLeave = {this.changeStyleLeavediv1}>
                <Typography component="h2" variant="h2" style={this.state.div1.style2} className="text-center">
                    Saroj
                </Typography>
                <br/><br/>
                <Typography component="h6" variant="h6" style={{ color: "orange", fontFamily: "Berlin Sans FB"}} className="text-justified">
                   {this.state.instagram1?  <InstagramIcon/> :<div/> } &nbsp; {this.state.div1.df1}        
                </Typography>
                <Typography component="h6" variant="h6" style={{ color: "orange", fontFamily: "Berlin Sans FB"}} className="text-justified">
                {this.state.facebook1 ?  <FacebookIcon/> :<div/> } &nbsp; {this.state.div1.df2}        
                </Typography>
                <Typography component="h6" variant="h6" style={{ color: "orange", fontFamily: "Berlin Sans FB"}} className="text-justified">
                {this.state.email1 ?  <EmailIcon/> :<div/> } &nbsp; {this.state.div1.df3}        
                </Typography>
                <br/><br/><br/><br/>
                
                <Button className={this.state.div1.className} variant={this.state.div1.button}>
                <a className="nav-link" style = {this.state.div1.linkColor} href="http://localhost:3000/contactus" target = "_blank">SEND A NOTE</a>
                </Button>
                <br/><br/><br/><br/>
                </div>
                
            </Row>
            <br/><br/><br/><br/>
            <Row>
                <div className="col-md-6" >
                    <img className="img img-fluid" src={Aditya}/>
                    <br/><br/>
                </div>
                <div className="col-md-6" style={this.state.div2.style1} onMouseEnter = {this.changeStyleEnterDiv2} onMouseLeave = {this.changeStyleLeaveDiv2} >
                <Typography component="h2" variant="h2" style={this.state.div2.style2} className="text-center">
                    Aditya
                </Typography>
                <br/><br/>
                <Typography component="h6" variant="h6" style={{ color: "orange", fontFamily: "Berlin Sans FB"}} className="text-justified">
                {this.state.instagram2?  <InstagramIcon/> :<div/> } &nbsp; {this.state.div2.df1}        
                </Typography>
                <Typography component="h6" variant="h6" style={{ color: "orange", fontFamily: "Berlin Sans FB"}} className="text-justified">
                {this.state.facebook2 ?  <FacebookIcon/> :<div/> } &nbsp;  {this.state.div2.df2}       
                </Typography>
                <Typography component="h6" variant="h6" style={{ color: "orange", fontFamily: "Berlin Sans FB"}} className="text-justified">
                {this.state.email2 ?  <EmailIcon/> :<div/> } &nbsp; {this.state.div2.df3}        
                </Typography>
                <br/><br/><br/><br/>
                <Button className={this.state.div2.className} variant={this.state.div2.button} >
                    <a className="nav-link" style = {this.state.div2.linkColor} href="http://localhost:3000/contactus" target = "_blank">SEND A NOTE</a>
                </Button>
                <br/><br/><br/><br/>
                </div>
                
            </Row>
            <br/><br/>
            </div>
            <br/><br/><br/><br/><br/>
            </div>
            <Footer/>
        </Fragment>
    }
}
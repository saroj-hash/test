import React,{Component,Fragment} from "react"
import Continue from "./comp2"
export default class Comp1 extends Component{
    state = {
        continue : false
    }
    render(){ 
        if(this.state.continue) return <Continue/>
        else return <Fragment>
            <h1>
                This shall too pass
            </h1>
            <p>
            Yes! This shall too pass. So what, if you cry your eyes out, this shall too pass. So what, if things will never be the same, this shall too pass. So what, ...
            </p>

            <br/><br/>
            <a href="#" onClick={() => this.setState({continue : true})}>Continue reading</a>
        </Fragment>
    }
} 
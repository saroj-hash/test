import React, { Component, Fragment } from "react"
import Comp1 from "./comp1"
export default class Comp2 extends Component {
    state = {
        comp1: false
    }
    render() {
        if (this.state.comp1) return <Comp1 />
        return <Fragment>
            <p>
                Yes! This shall too pass. So what, if you cry your eyes out, this shall too pass. So what, if things will never be the same, this shall too pass. So what, if you get crippling depression, this shall too pass. So what, if you start to lose yourself and become this person, you have hated from the very beginning, this shall too pass. So what, you start drinking which you have always despised, this shall too pass. So what, if you start choking up on your vomit, this shall too pass. So what, if you get into those nice little white pills that let you off the pain for a moment, this shall too pass. So what, if you OD on those pills that are in your back pocket, which you are popping every hour, yes, this shall too pass. So what, if you find yourself as an embarrassment on your family, this shall too pass. So what, if you start living as a hobo behind a garbage bin and get morbidly rashed with all those good old flea bites, this shall too pass. So what, you are hungry and finally give up on the tiniest self-esteem you are left with and start digging for all those delicious leftovers in the garbage bin, this shall too pass. So what, you get kidney stones by eating crap from the garbage bin, yes this shall too pass, maybe in your urine someday leaving you in excruciating pain. But yes, this shall too pass. So what, if you finally give up and jump in front of the speeding bus which wasn't supposed to stop at your bus bay, leaving your family with absolutely nothing but regrets, this shall too pass.
                Yes!	This shall too pass.
                Well, this most certainly will not! If you don't get your ass off that beautiful couch, which, probably would be reeking of your sweet little behind by now, this most certainly will not.
                Chaos will always stay. However deteriorated may your condition be, you will just have to live with that. You will have to learn, how to make yourself happy again. You will have to work on the recovery of your compromised self-esteem.
                Believe me, when I confer, you will find happiness again. Needless to say, sometimes, the greatest soul also needs cleansing. You will get your first job. You will get a fellowship in your dream university. You will find someone, who completes you. You will get married. You will have beautiful kids. You will grow.
                Well-cooked or not, the world, still, is your oyster. Despite being stuck at its hard outer shell, go find yourself beautiful pearls, that everyone talks about.

                From a fellow miserably heartbroken looser ...

            </p>
            <br/><br/>
            <a href="" onClick = {() => {this.setState({comp1 : true})}}>Go back to home page</a>
        </Fragment>
    }
} 
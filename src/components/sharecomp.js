import React,{Fragment,Component} from "react"
import {
    EmailShareButton,
    FacebookShareButton, 
    LinkedinShareButton,
    LivejournalShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton, 
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    LivejournalIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";

import Row from "react-bootstrap/Row"
export default class ShareComp extends Component{
    render(){
        return <Fragment>
            <Row>
                <EmailShareButton url={this.props.PostUrl}>
                    <EmailIcon size={32} round={true} />
                </EmailShareButton>
                <FacebookShareButton url={this.props.PostUrl}>
                    <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <LinkedinShareButton url={this.props.PostUrl} >
                    <LinkedinIcon size={32} round={true}/>
                </LinkedinShareButton>
                <RedditShareButton url={this.props.PostUrl} >
                    <RedditIcon size={32} round={true}/>
                </RedditShareButton>
                <TelegramShareButton url={this.props.PostUrl} >
                    <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
                <TwitterShareButton url={this.props.PostUrl} >
                    <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton url={this.props.PostUrl} >
                    <WhatsappIcon size={32} round={true}/>
                </WhatsappShareButton>
            </Row>
        </Fragment>
    }
}
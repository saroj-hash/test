import React from "react"
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
export default class Subscribe extends React.Component {
    render() {
        return <div>
           <div className="offset-md-2 col-md-8 offset-md-2" >
                    <h2>
                        <Badge size="lg" variant="dark">
                            <Typography variant="body" component="p" className="text-center">
                                Stay updated &nbsp;
                            <NotificationsActiveRoundedIcon />&nbsp;
                            </Typography>
                        </Badge>
                    </h2>
                    <Typography variant="body" component="p" style={{ fontStyle: "italic" }}>
                        Get the best of <strong>Wolfwalker's Journal</strong> and more
                    </Typography>
                    <br />
                    <FormControl>
                        <span>
                            <TextField variant="outlined" type="email" label="Email" aria-describedby="my-helper-text" />
                            <Tooltip arrow title="Subscribe for free" placement="right">
                                <IconButton>

                                    <Badge variant="dark">
                                        <SubscriptionsRoundedIcon />
                                    </Badge>

                                </IconButton>
                            </Tooltip>
                        </span>
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <br /><br />
                </div>
        </div>
    }
}
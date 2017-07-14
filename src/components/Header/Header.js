import React , {Component} from "react";
import PropTypes from "prop-types";
import { createStyleSheet , withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Home from "material-ui-icons/Home";
import Typography from "material-ui/Typography";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import colors from "./../../colors";
//import { AfterLogin , BeforeLogin } from "./../../components";
import Auth from "./../../Auth/Auth";

const auth = new Auth();
const { login , logout } = auth;


function mapStateToProps (state) {
    const { logged } = state;
    return {
        logged,
        login,
        logout
    };
}

class Header extends Component{

    checkUserStatus(){
        const { classes , login , logout } = this.props;
        console.log(this.props.logged);
        if(this.props.logged===false)
            return (
            <Button onClick={ login } >
                <Typography type = "caption" className = {classes.settings} >&nbsp;Sign Up/Log In</Typography>
            </Button>
            );
        else 
            return (
            <Button onClick = { logout } >
                <Typography type = "caption" className = {classes.settings} >&nbsp;Log Out</Typography>
            </Button>);
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <AppBar position="static" className={classes.header} >
                    <Toolbar className={classes.bar} >
                        <Button onClick = { () => this.props.history.push("/home") } >
                            <Home className={classes.icon} aria-label="home" />
                            <Typography type = "caption" className = {classes.settings} >&nbsp;Home</Typography>
                        </Button>
                        <div className={ classes.flex } ></div>
                        {this.checkUserStatus()}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};

const styleSheet=createStyleSheet("Header",{
    root : {
        width:"100%"
    },
    flex : {
        flex :1,
    } ,
    settings : {
        color          : colors.white,
        fontSize       : 19,
        textTransform  : "capitalize"
    },
    bar : {
        height : 70
    },
    header : {
        backgroundColor : colors.blue
    },
    icon : {
        height: 27,
        width: 27,
        color: colors.white,
    }
});

Header.propTypes={
    classes: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps,null)(withStyles(styleSheet)(Header)));
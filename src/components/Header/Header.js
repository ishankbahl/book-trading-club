import React , {Component} from "react";
import PropTypes from "prop-types";
import { createStyleSheet , withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import colors from "./../../colors";

function mapStateToProps (state) {
    const { logged } = state;
    return {
        logged
    };
}

class Header extends Component{
    constructor(props){
        super(props);
    }

    checkUserStatus(){
        console.log(this.props);
    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <AppBar position="static" className={classes.header} >
                    <Toolbar className={classes.bar} >
                        <Button>
                            <Link to = "/home" className={classes.link} >
                                <Typography type = "caption" className = {classes.settings} >&nbsp;Home</Typography>
                            </Link>
                        </Button>
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
    icon : {
        height  : 27,
        width   : 27,
        color   : colors.white,
    },
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
    link : {
        textDecoration : "none",
        padding        : 0
    }
});

Header.propTypes={
    classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(Header);
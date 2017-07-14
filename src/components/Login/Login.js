import React , { Component } from "react";
import Typography from "material-ui/Typography";
import { createStyleSheet , withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import { FormGroup , FormLabel , FormControl } from "material-ui/Form";
import Button from "material-ui/Button";

class Login extends Component{
    constructor(){
        super();
        this.state = {
            email    : "",
            password : "",
        };
    }

    render(){

        const { classes } = this.props;

        return(
            <div className = { classes.form } >
                <FormLabel htmlFor="login">
                    <Typography type = "display2" >&nbsp;Login</Typography>
                </FormLabel>
                <FormGroup id = "login" >
                    <FormControl>
                        <TextField
                            required
                            id = "email"
                            label = "Email"
                            onChange = { (e) => this.setState({ email : e.target.value }) }
                            className = {classes.input}
                            fullWidth
                            marginForm
                        />
                        <TextField
                            required
                            id = "password"
                            label = "Password"
                            onChange = { (e) => this.setState({ password : e.target.value }) }
                            className = {classes.input}
                            type = "password"
                            fullWidth
                            marginForm
                        />
                    </FormControl>
                </FormGroup>
                <Button raised color = "primary" className = { classes.button } >
                    <Typography type="button" >&nbsp;Login</Typography>
                </Button>
            </div>
        );
    }
}

const styleSheet = createStyleSheet ( "Login" , {
    form : {
        margin : 50
    },
    button : {
        marginTop : 25
    }
} );

export default withStyles(styleSheet)(Login);
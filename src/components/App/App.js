import React , { Component } from "react";
import { Route } from "react-router-dom";
import { Header , Home , SignUp , Login } from "./../../components";
import ComponentWrappers from "./../../ComponentWrappers";

class App extends Component{
    render(){
        return (
            <div>
                <Header />
                <Route exact path = "/home" component = { Home } />
                <Route exact path = "/signup" component = { SignUp } />
                <Route exact path = "/login" component = { Login } />
            </div>
        );
    }
}

export default ComponentWrappers(App);
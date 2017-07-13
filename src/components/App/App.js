import React , { Component } from "react";
import { Route } from "react-router-dom";
import { Header , Home } from "./../../components";
import ComponentWrappers from "./../../ComponentWrappers";

class App extends Component{
    render(){
        return (
            <div>
                <Header />
                <Route exact path="/home" component={ Home } />
            </div>
        );
    }
}

export default ComponentWrappers(App);
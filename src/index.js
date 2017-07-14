import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Auth from "./Auth/Auth";
import { App } from "./components";
import "./index.css";
import reducer from "./reducers";

const auth = new Auth();
const { isAuthenticated } = auth;

const initialState = {
    logged : false,
    email : ""
};

auth.auth0.parseHash((err,authResult)=>{console.log(authResult)});

export const store = createStore ( reducer , initialState );

render(<Provider store={ store } >
        <App />
       </Provider>,document.getElementById("root"));
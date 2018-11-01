import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Login from "./Components/AuthFeature/Login";
import Signup from "./Components/AuthFeature/Signup";
import AdditionalInfo from "./Components/AuthFeature/AdditionalInfo";
import JoinChapter from "./Components/AuthFeature/JoinChapter";

const RouterComponent = () => {
    return(
        <Router>
                <Scene key = "root" hideNavBar>
                    <Scene key = "login" component = { Login } />
                    <Scene key = "signup" component = { Signup } />
                    <Scene key = "additionalinfo" component = { AdditionalInfo }  />
                    <Scene key = "joinchapter" component = { JoinChapter } />
                </Scene>
            </Router>
    );
}

export default RouterComponent;
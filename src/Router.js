import React from "react";
import { Router, Scene, Overlay } from "react-native-router-flux";
import Login from "./Components/AuthFeature/Login";
import Signup from "./Components/AuthFeature/Signup";
import AdditionalInfo from "./Components/AuthFeature/AdditionalInfo";
import JoinChapter from "./Components/AuthFeature/JoinChapter";
import Spinner from "./Components/Common/Spinner"

const RouterComponent = () => {
    return(
        <Router sceneStyle = {{backgroundColor:'transparent'}}>
            <Overlay key = "overlay">
                <Scene key = "root" hideNavBar>
                    <Scene key = "login" component = { Login }  />
                    <Scene key = "signup" component = { Signup }  />
                    <Scene key = "additionalinfo" component = { AdditionalInfo }  />
                    <Scene key = "joinchapter" component = { JoinChapter } initial />
                    <Scene key = "spinner" component = { Spinner } />
                </Scene>
            </Overlay>
        </Router>
    );
}

export default RouterComponent;
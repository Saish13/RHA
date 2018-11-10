import React from "react";
import { Router, Scene, Overlay } from "react-native-router-flux";
import Login from "./Components/AuthFeature/Login";
import Signup from "./Components/AuthFeature/Signup";
import AdditionalInfo from "./Components/AuthFeature/AdditionalInfo";
import JoinChapter from "./Components/AuthFeature/JoinChapter";
import ChapterDetails from "./Components/AuthFeature/ChapterDetails"
import Spinner from "./Components/Common/Spinner"

const RouterComponent = () => {
    return(
        <Router sceneStyle = {{backgroundColor:'transparent'}} >
            <Overlay key = "overlay" >
                <Scene key = "root"  >
                    <Scene key = "login" component = { Login } hideNavBar />
                    <Scene key = "signup" component = { Signup } hideNavBar />
                    <Scene key = "additionalinfo" component = { AdditionalInfo } hideNavBar />
                    <Scene key = "joinchapter" component = { JoinChapter } hideNavBar  />
                    <Scene key = "chapterdetails" component = { ChapterDetails }  initial title = "Join Chapter"  navigationBarStyle = {{backgroundColor:'#378555'}}  />
                    <Scene key = "spinner" component = { Spinner } />
                </Scene>
            </Overlay>
        </Router>
    );
}

export default RouterComponent;
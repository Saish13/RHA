import React, { Component }from "react";
import { StyleSheet, View, Image, StatusBar, ImageBackground, Text } from "react-native";
import Router from "./Router";
import reducers from "./Reducers";
import { firebase } from "./Components/Common/Firebase";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import devToolsEnhancer, { composeWithDevTools } from 'remote-redux-devtools';

export default class App extends Component {
    render() {
        const composeEnhancers = composeWithDevTools({realtime: true, port: 8081});
        const store = createStore(reducers, {}, devToolsEnhancer(composeWithDevTools(applyMiddleware(ReduxThunk))));
        return(
            <Provider store = {store} >
                <View style = {styles.appContainer}>
                    <Image style = {{ width: '100%', height: '100%', position:"absolute"}} source = { require("../assets/images/abstract-art-artificial-131634.jpg")}/>
                    <Router />
                    <StatusBar backgroundColor="#378555" barStyle="light-content"/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex:1,
        justifyContent: 'center',
      
    }
});
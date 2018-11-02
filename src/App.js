import React, { Component }from "react";
import { StyleSheet, View, Image, StatusBar, ImageBackground, Text } from "react-native";
import Router from "./Router";
import { firebase } from "./Components/Common/Firebase"

export default class App extends Component {
    render() {
        return(
            <View style = {styles.appContainer}>
                <Image style = {{ width: '100%', height: '100%', position:"absolute"}} source = { require("../assets/images/abstract-art-artificial-131634.jpg")}/>
                <Router />
                <StatusBar backgroundColor="#378555" barStyle="light-content"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex:1,
        justifyContent: 'center',
      
    }
});
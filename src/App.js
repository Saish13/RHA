import React, { Component }from "react";
import { StyleSheet, View } from "react-native";
import Router from "./Router";

export default class App extends Component {
    render() {
        return(
            <View style = {styles.appContainer}>
                <Router/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex:1,
    }
});
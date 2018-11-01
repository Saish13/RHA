import React, { Component }from "react";
import { View, Text, StyleSheet } from "react-native";

export default class App extends Component {
    render() {
        return(
            <View style = {styles.appContainer}>
                <Text>Hellow World !</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex:1,
    }
});
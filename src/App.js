import React, { Component }from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Input } from "react-native-elements";

export default class App extends Component {
    render() {
        return(
            <View style = {styles.appContainer}>
                <Card>
                    <Text>Hello World !</Text>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex:1,
    }
});
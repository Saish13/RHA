import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const Spinner = () => {
    return(
        <View style = {styles.spinnerContainer}>
            <ActivityIndicator size={100} color="#EFF7FD" />
        </View>
    );
}

const styles = StyleSheet.create({
    spinnerContainer: {
        flex:1,
        justifyContent: 'center',
        alignContent: 'center',
    }
});

export default Spinner;
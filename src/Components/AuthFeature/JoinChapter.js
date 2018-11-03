import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Card, Text } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width /height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class JoinChapter extends Component {

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = parseFloat(position.coords.latitude);
            let lng = parseFloat(position.coords.longitude);
            let initialRegion = {
                latitude: lat,
                longitude: lng,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            }
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 2000, maximumAge: 2000});
    }

    render() {
        return(
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showsUserLocation
                    minZoomLevel = {8}
                    showsCompass = {true}
                    initialRegion={{ 
                        latitude: 18.645481,
                        longitude: 73.795970,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA
                    }}
                >
                <Marker coordinate = {{latitude: 18.647823,longitude: 73.766893 }}/>
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    map: {
        flex: 1,
    }
});

export default JoinChapter;
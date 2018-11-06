import React, { Component } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Card, Text } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { connect } from "react-redux";
import { setUserLocation } from "../../Actions/AuthAction";

const { width, height } = Dimensions.get('window')

const ASPECT_RATIO = width /height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class JoinChapter extends Component {

    constructor() {
        super();
        this.onSetUserLocation = this.onSetUserLocation.bind(this);
    }

    onSetUserLocation (location) {
        this.props.setUserLocation(location);
    }

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
            let location = {
                latitude: lat,
                longitude: lng
            }
            this.onSetUserLocation(location);
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true });
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
                        latitude: this.props.location.latitude,
                        longitude: this.props.location.longitude,
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

const mapDispatchToProps = {
    setUserLocation
}

const mapStateToProps = state => {
    return {
        location: state.auth.userLocation,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinChapter);
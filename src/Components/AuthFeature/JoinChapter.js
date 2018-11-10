import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { connect } from "react-redux";
import { setUserLocation, getAllChapters } from "../../Actions/AuthAction";
import { Spinner } from "../Common/Spinner";
import { getDistance } from "geolib";

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

    componentWillMount() {
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
        

        this.props.getAllChapters();

    }

    componentDidMount() {
        
    }

    render() {
        
        const { chapters } = this.props;
        const { userLocation } =this.props;
        const obj = {
            chp1: {additionalInfo: "abcdef", location: {latitude: 18.567585202075737, longitude: 73.85069847106935}, title: "Khadki Chapter"},
            chp2: {additionalInfo: "abcd", location: {latitude: 18.646733094923036, longitude: 73.76709938049318}, title: "Akurdi Chapter"},
            chp3: {additionalInfo: "abcdefghi", location: {latitude: 18.516237371768458, longitude: 73.85696411132814}, title: "Pune Chapter"}
        }
        const objArray = [obj];

        return(
            
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showsUserLocation
                    minZoomLevel = {8}
                    showsCompass = {true}
                    initialRegion={{ 
                        latitude: parseFloat(userLocation.latitude),
                        longitude: parseFloat(userLocation.longitude),
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA
                    }}
                >
                {
                    chapters !== null &&
                    Object.keys(chapters).map(key=> {
                        console.log(chapters[key].location.latitude)
                        const distance = geolib.getDistance({latitude: this.props.userLocation.latitude, longitude: this.props.userLocation.longitude},
                                        {latitude: chapters[key].location.latitude, longitude: chapters[key].location.longitude},10,3)
                        return(
                            <Marker
                                key = {key}
                                title = {chapters[key].title}
                                coordinate = {{latitude: parseFloat(chapters[key].location.latitude) , longitude: parseFloat(chapters[key].location.longitude)}}>
                                <Callout 
                                    onPress = {() => this.goToChapterDetails(key)}
                                >
                                    <Text style = {styles.textTitle}>{chapters[key].title}</Text>
                                    <Text style = {styles.textDistance}>{(distance/1000).toFixed(2)+ " kms" } </Text>
                                </Callout>
                            </Marker>
                        );
                    }) 
                }
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
    },
    textDistance: {
        textAlign: 'right',
        fontSize: 13
    },  
    textTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        paddingBottom: 10,
    }  
});

const mapDispatchToProps = {
    setUserLocation,
    getAllChapters
}

const mapStateToProps = state => {
    return {
        userLocation: state.auth.userLocation,
        chapters: state.auth.chapters,
        loading: state.auth.loading
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinChapter);
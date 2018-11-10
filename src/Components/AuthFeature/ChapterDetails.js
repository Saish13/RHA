import React, { Component } from "react";
import { Text, Card, Button, Divider, ListItem } from "react-native-elements";
import { View, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { Spinner } from "../Common/Spinner";

class ChapterDetails extends Component {
    render() {
        return(
            <View style= {{flex:1}}>
                <Card  title = "Chapter Name" titleStyle = {{fontSize:30}} dividerStyle= {{width:0}}>

                    <Divider style={{ backgroundColor: 'black', marginTop:15, marginBottom:15 }} />

                    <ListItem  title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea "/>

                    <Divider style={{ backgroundColor: 'black', marginTop:15, marginBottom:15 }} />

                    <ListItem  title = "Members" 
                                badge={{ value: 3, textStyle: { color: 'black' }, containerStyle: { backgroundColor: 'transparent' } }}
                    />
                    <ListItem  title = "Distance"
                                badge={{ value: '3 kms', textStyle: { color: 'black' }, containerStyle: { backgroundColor: 'transparent' } }}
                                containerStyle = {{marginBottom:20}}
                    />

                    <Button title= "Join Chapter" 
                            buttonStyle = {styles.buttonStyle}/>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection:'row',
        flex:1,
        justifyContent: 'center',
        height: Dimensions.get('window').height-30,
        maxHeight: Dimensions.get('window').height-30,
    },
    buttonStyle: {
        
    }
});

const mapDispatchToProps = {
    
}

const mapStateToProps = state => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChapterDetails)
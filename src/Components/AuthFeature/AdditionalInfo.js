import React, { Component } from "react";
import { StyleSheet, View, ProgressBarAndroid } from "react-native";
import { Card, Input, Button, ButtonGroup, Text } from "react-native-elements";

class AdditionalInfo extends Component {
    render() {
        const genderButtons = ['Male','Female']
        const userTypeButtons = ['New User','Member', 'Veteran']
        return(
            <View style = {styles.additionalInfo}>
                <View style = {{flex:1, justifyContent: 'flex-start', top:-6}}>
                    <ProgressBarAndroid  styleAttr="Horizontal" color = "#CE0242" indeterminate={false} progress = {0.4} />
                </View>
                <Card containerStyle = {styles.cardContainer}>
                    <Input
                        placeholder = "Name"
                        leftIcon = {{ type: 'MaterialIcons', name: 'person-outline' }}
                        inputContainerStyle = {styles.inputContainerStyle}
                        containerStyle = {styles.containerStyle}
                        inputStyle = {{height:60}}
                    />
                    <Input
                        keyboardType = "number-pad"
                        placeholder = "Contact Number"
                        leftIcon = {{ type: 'MaterialIcons', name: 'phonelink-ring' }}
                        inputContainerStyle = {styles.inputContainerStyle}
                        containerStyle = {styles.containerStyle}
                        inputStyle = {{height:60}}
                    />
                    <Text style = {{marginLeft: 20,paddingTop:10,paddingBottom:10,fontWeight:'bold'}}> GENDER </Text>
                    <ButtonGroup
                        selectedIndex = {-1}
                        buttons = {genderButtons}
                        containerStyle = {styles.genderButtonStyle}
                    />

                    <Text style = {{marginLeft: 20,paddingBottom:10,fontWeight:'bold'}}> USER TYPE </Text>
                    <ButtonGroup
                        selectedIndex = {0}
                        buttons = {userTypeButtons}
                        containerStyle = {styles.usertypeButtonStyle}
                    />
                    <Button
                        title='Continue'
                        buttonStyle = {styles.buttonStyle}
                    />

                </Card>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    additionalInfo:{
        flex:1,
        justifyContent: 'center',
    },
    inputContainerStyle: {
        marginTop: 15,
        height: 60,
        borderColor: '#252525',
        borderWidth: 1,
        borderRadius: 25,
        alignSelf: 'center',
    },
    containerStyle: {
        paddingBottom: 10,
        marginLeft: 15,
    },
    cardContainer: {
        marginTop:80,
        padding: 20,
        backgroundColor: 'rgba(239,247,253, 0.8)',
        marginBottom:100,
    },
    buttonStyle: {
    },
    genderButtonStyle: {
        borderRadius:15,
        marginBottom: 20
    },
    usertypeButtonStyle: {
        borderRadius: 5,
        marginBottom:25,
        height: 60
    }
});


export default AdditionalInfo;
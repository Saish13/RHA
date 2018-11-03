import React, { Component } from "react";
import { StyleSheet, View, ProgressBarAndroid } from "react-native";
import { Card, Input, Button, ButtonGroup, Text } from "react-native-elements";
import { connect } from "react-redux";
import Spinner from "../Common/Spinner";
import { nameChanged, contactNumberChanged, genderChanged, userTypeChanged, addAdditionalInfo } from "../../Actions/AuthAction";

class AdditionalInfo extends Component {
    
    constructor() {
        super();
        this.onContinueButton = this.onContinueButton.bind(this);
    }
    
    onContinueButton() {
        const { uid, name, contactNumber, gender, userType } = this.props;
        this.props.addAdditionalInfo({uid, name, contactNumber, gender, userType});
    } 

    render() {
        const genderButtons = ['Male','Female']
        const userTypeButtons = ['New User','Member', 'Veteran']

        return(
            <View style = {styles.additionalInfo}>
                {
                    this.props.loading ? <Spinner/>: 
                    <View>
                    <View style = {{flex:0, justifyContent: 'flex-start', top:-23}}>
                        <ProgressBarAndroid  styleAttr="Horizontal" color = "#CE0242" indeterminate={false} progress = {0.4} />
                    </View>
                    <Card containerStyle = {styles.cardContainer}>
                        <Input
                            placeholder = "Full Name"
                            leftIcon = {{ type: 'MaterialIcons', name: 'person-outline' }}
                            inputContainerStyle = {styles.inputContainerStyle}
                            containerStyle = {styles.containerStyle}
                            inputStyle = {{height:60}}
                            onChangeText = {(textInput) => this.props.nameChanged(textInput)}
                            value = {this.props.name}
                        />
                        <Input
                            keyboardType = "number-pad"
                            placeholder = "Contact Number"
                            leftIcon = {{ type: 'MaterialIcons', name: 'phonelink-ring' }}
                            inputContainerStyle = {styles.inputContainerStyle}
                            containerStyle = {styles.containerStyle}
                            inputStyle = {{height:60}}
                            onChangeText = {(textInput) => this.props.contactNumberChanged(textInput)}
                            value = {this.props.contactNumber}
                        />
                        <Text style = {{marginLeft: 20,paddingTop:10,paddingBottom:10,fontWeight:'bold'}}> GENDER </Text>
                        <ButtonGroup
                            buttons = {genderButtons}
                            containerStyle = {styles.genderButtonStyle}
                            onPress = {(selectedIndex) => this.props.genderChanged(selectedIndex)}
                            selectedIndex = {this.props.gender}
                        />

                        <Text style = {{marginLeft: 20,paddingBottom:10,fontWeight:'bold'}}> USER TYPE </Text>
                        <ButtonGroup
                            buttons = {userTypeButtons}
                            containerStyle = {styles.usertypeButtonStyle}
                            onPress = {(selectedIndex) => this.props.userTypeChanged(selectedIndex)}
                            selectedIndex = {this.props.userType}
                        />
                        <Button
                            title='Continue'
                            buttonStyle = {styles.buttonStyle}
                            onPress = {this.onContinueButton}
                        />

                    </Card>
                    </View>
                }
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


const mapDispatchToProps = {
    nameChanged,
    contactNumberChanged,
    genderChanged,
    userTypeChanged,
    addAdditionalInfo
}

const mapStateToProps = state => {
    return {
        uid: state.auth.user.user.uid,
        name: state.auth.name,
        contactNumber: state.auth.contactNumber,
        gender: state.auth.gender,
        userType: state.auth.userType,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdditionalInfo);
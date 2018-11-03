import React, { Component } from "react";
import { View } from "react-native";
import { Card, Input, Button } from "react-native-elements";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { loginEmailChanged, loginPasswordChanged } from "../../Actions/AuthAction";

class Login extends Component {
    render() {
        return(
            <View style = {styles.loginContainer}>
                <Card containerStyle = {styles.cardContainer}>
                    <Input
                        keyboardType = "email-address"
                        placeholder = "Enter your email here"
                        leftIcon = {{ type: 'MaterialIcons', name: 'email' }}
                        inputContainerStyle = {styles.inputContainerStyle}
                        containerStyle = {styles.containerStyle}
                        inputStyle = {{height:60}}
                        onChangeText = {(textInput) => this.props.loginEmailChanged(textInput)}
                        value = {this.props.email}
                    />
                    <Input
                        secureTextEntry
                        placeholder = "Password"
                        leftIcon = {{ type: 'MaterialIcons', name: 'lock-outline' }}
                        inputContainerStyle = {styles.inputContainerStyle}
                        containerStyle = {styles.containerStyle}
                        inputStyle = {{height:60}}
                        onChangeText = {(textInput) => this.props.loginPasswordChanged(textInput)}
                        value = {this.props.password}
                    />

                    <Button
                        title='Login'
                        buttonStyle = {styles.buttonStyle}
                    />

                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        justifyContent: 'center',
    },
    inputContainerStyle: {
        marginTop: 15,
        height: 60,
        borderColor: '#252525',
        borderWidth: 1,
        borderRadius: 25,

    },
    containerStyle: {
        paddingBottom: 10,
        marginLeft: 15,
    },
    cardContainer: {
        marginTop:25,
        padding: 20,
        backgroundColor: 'rgba(239,247,253, 0.8)',
        marginBottom:100,
    },
    buttonStyle: {
        marginTop:15,
        marginBottom:15
    }
});

const mapDispatchToProps = {
    loginEmailChanged,
    loginPasswordChanged
}

const mapStateToProps = state => {
    return {
        email: state.auth.email_login,
        password: state.auth.password_login
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
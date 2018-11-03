import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Input, Button } from "react-native-elements";
import { emailChanged, passwordChanged, confirmPasswordChanged } from "../../Actions/AuthAction";
import { connect } from "react-redux";


class Signup extends Component {
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
                        onChangeText = {(textInput) => this.props.emailChanged(textInput)}
                        value = {this.props.email}
                    />
                    <Input
                        secureTextEntry
                        placeholder = "Password"
                        leftIcon = {{ type: 'MaterialIcons', name: 'lock-outline' }}
                        inputContainerStyle = {styles.inputContainerStyle}
                        containerStyle = {styles.containerStyle}
                        inputStyle = {{height:60}}
                        onChangeText = {(textInput) => this.props.passwordChanged(textInput)}
                        value = {this.props.password}
                    />

                    <Input
                        secureTextEntry
                        placeholder = "Re-Enter Password"
                        leftIcon = {{ type: 'MaterialIcons', name: 'lock-open' }}
                        inputContainerStyle = {styles.inputContainerStyle}
                        containerStyle = {styles.containerStyle}
                        inputStyle = {{height:60}}
                        onChangeText = {(textInput) => this.props.confirmPasswordChanged(textInput)}
                        value = {this.props.confirmPassword}
                    />

                    <Button
                        title='Signup'
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
        marginTop: 15,
        marginBottom:15
    }
});

const mapDispatchToProps = {
    emailChanged,
    passwordChanged,
    confirmPasswordChanged
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        confirmPassword: state.auth.confirmPassword
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
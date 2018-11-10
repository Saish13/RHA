import database, { firebase } from "../Components/Common/Firebase";
import { Actions } from "react-native-router-flux";

export const loginEmailChanged = (textInput) => {
    return {
        type: 'EMAIL_LOGIN_CHANGED',
        payload: textInput
    };
};

export const loginPasswordChanged = (textInput) => {
    return {
        type: 'PASSWORD_LOGIN_CHANGED',
        payload: textInput
    };
};

export const emailChanged = (textInput) => {
    return {
        type: 'EMAIL_CHANGED',
        payload: textInput
    };
};

export const passwordChanged = (textInput) => {
    return {
        type: 'PASSWORD_CHANGED',
        payload: textInput
    };
};

export const confirmPasswordChanged = (textInput) => {
    return {
        type: 'CONFIRM_PASSWORD_CHANGED',
        payload: textInput
    };
};

export const nameChanged = (textInput) => {
    return {
        type: 'NAME_CHANGED',
        payload: textInput
    };
};

export const contactNumberChanged = (textInput) => {
    return {
        type: 'CONTACT_NUMBER_CHANGED',
        payload:textInput
    };
};

export const genderChanged = (selectedIndex) => {
    return {
        type: 'GENDER_CHANGED',
        payload: selectedIndex
    };
};

export const userTypeChanged = (selectedIndex) => {
    return {
        type: 'USER_TYPE_CHANGED',
        payload: selectedIndex
    };
};

export const signupUser = ({email, password, confirmPassword}) => {
    return (dispatch) => {
        if (password === confirmPassword) {
            dispatch({type: 'LOADING'})
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({type: 'SIGNUP_SUCCESS', payload: user});
                Actions.additionalinfo();
            });
        }
        else {
            dispatch({type: 'SIGNUP_FAILURE'});
        }
    };
};

export const addAdditionalInfo = ({uid, name, contactNumber, gender, userType}) => {
    return (dispatch) => {
        console.log(uid)
        dispatch({type: 'LOADING'})
        database.ref('users/'+ uid).set({
            name: name,
            contactNumber: contactNumber,
            gender: gender,
            userType: userType,
            profilePicture: '',
            location: {
                lat: '',
                lng: ''
            }
        })
        .then(snapshot => {
            console.log(snapshot);
            dispatch({type: 'ADDITIONAL_INFO_SUCCESS'})
            Actions.joinchapter();
        })
        .catch(e => console.log(e));
    }
}

export const setUserLocation = (location) => {
    return {
        type: 'SET_USER_LOCATION',
        payload: location
    }
}

export const getAllChapters = () => {
    return(dispatch) => {
        database.ref('/chapters').once('value')
        .then(snapshot => {
            const chapters = snapshot.val();
            dispatch({type:'GET_ALL_CHAPTERS', payload: chapters});
        })
        .catch(e => console.log(e));
        dispatch({type:'LOADED'})
    }
}
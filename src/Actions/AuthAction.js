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
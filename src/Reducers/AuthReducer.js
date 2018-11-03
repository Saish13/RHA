const initialDefaultState = {
    email_login: '',
    password_login: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    contactNumber: '',
    gender: -1,
    userType: 0,
    loading: false,
    user: null,
    error: ''
};

export default (state = initialDefaultState, action) => {
    console.log(action);
    switch(action.type) {
        case 'EMAIL_CHANGED':
            return { ...state, email: action.payload }
        case 'PASSWORD_CHANGED':
            return { ...state, password: action.payload }
        case 'CONFIRM_PASSWORD_CHANGED':
            return { ...state, confirmPassword: action.payload }
        case 'NAME_CHANGED':
            return { ...state, name: action.payload }
        case 'CONTACT_NUMBER_CHANGED':
            return { ...state, contactNumber: action.payload }
        case 'GENDER_CHANGED':
            return { ...state, gender: action.payload }
        case 'USER_TYPE_CHANGED':
            return { ...state, userType: action.payload }
        case 'EMAIL_LOGIN_CHANGED':
            return { ...state, email_login: action.payload }
        case 'PASSWORD_LOGIN_CHANGED':
            return { ...state, password_login: action.payload }
        case 'LOADING':
            return { ...state, loading: true }
        case 'SIGNUP_SUCCESS':
            return { ...state, loading: false, email: '', password: '', confirmPassword: '', user: action.payload }
        case 'SIGNUP_FAILURE':
            return { ...state, loading: false }
        case 'ADDITIONAL_INFO_SUCCESS':
            return { ...state, loading: false, name: '', contactNumber: '', gender: -1, userType: -1 }
        default:
            return state;
    }
}
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyBv08mtHpAjJqH_AkpL4Xf4WNN7Flea4i0",
    authDomain: "rha-app.firebaseapp.com",
    databaseURL: "https://rha-app.firebaseio.com",
    projectId: "rha-app",
    storageBucket: "rha-app.appspot.com",
    messagingSenderId: "760316610405"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default };  
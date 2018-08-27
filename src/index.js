import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import firebase from 'firebase';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyD4X9NAVsYcllzIPWCaSzhG9vO8b-c-QVc",
    authDomain: "todolistreact-489f5.firebaseapp.com",
    databaseURL: "https://todolistreact-489f5.firebaseio.com",
    projectId: "todolistreact-489f5",
    storageBucket: "todolistreact-489f5.appspot.com",
    messagingSenderId: "557655686928"
};
firebase.initializeApp(config);



ReactDOM.render( < App / > , document.getElementById('root'));
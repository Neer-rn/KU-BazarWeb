import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import App from './App';


const firebaseConfig = {
  apiKey: "AIzaSyDRwsaNzZVjoIV3CSnX9YC5IIXjX4SqNYU",

  authDomain: "ku-bazar.firebaseapp.com",

  projectId: "ku-bazar",

  storageBucket: "ku-bazar.appspot.com",

  messagingSenderId: "935709459274",

  appId: "1:935709459274:web:7836ab9eed60b74ea2b7b3",

  measurementId: "G-9859KB9CV1"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


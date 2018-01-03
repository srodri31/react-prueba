import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyDwKrve2UPGFihVi7oZqKW2Fvvie4Wjx8M",
  authDomain: "react-trial-bda56.firebaseapp.com",
  databaseURL: "https://react-trial-bda56.firebaseio.com",
  projectId: "react-trial-bda56",
  storageBucket: "react-trial-bda56.appspot.com",
  messagingSenderId: "87917198937"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

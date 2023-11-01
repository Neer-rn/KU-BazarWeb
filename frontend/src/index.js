import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";


const firebaseConfig = {
  apiKey: "AIzaSyDRwsaNzZVjoIV3CSnX9YC5IIXjX4SqNYU",

  authDomain: "ku-bazar.firebaseapp.com",

  projectId: "ku-bazar",

  storageBucket: "ku-bazar.appspot.com",

  messagingSenderId: "935709459274",

  appId: "1:935709459274:web:7836ab9eed60b74ea2b7b3",

  measurementId: "G-9859KB9CV1"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
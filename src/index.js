import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.json';

import "@fortawesome/fontawesome-free/css/all.css";
import Header from './components/Header'
import Footer from './components/footer';
import AppRouter from './components/Day3/AppRouter';
import AppRouter2 from './components/Day3/AppRouter2';
import Login from './components/Day3/Routes/Login';


//react-bootstrap , fontawesome
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<Login/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

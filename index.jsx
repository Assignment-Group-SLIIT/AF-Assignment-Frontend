import React from 'react'
import { render } from "react-dom";
import App from './App';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css'
AOS.init();

const rootElement = document.getElementById("app");
render(
    <>
        <App />
    </>, rootElement)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from "./Customer/SignUp";
import CustomerView from "./Customer/CustomerView";
import AdminView from "./Admin/AdminView";

ReactDOM.render((
        <BrowserRouter>
            <Routes> {/* The Switch decides which component to show based on the current URL.*/}
                <Route path='*' element={<App/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/customer' element={<CustomerView/>}/>
                <Route path='/admin' element={<AdminView/>}/>
            </Routes>
        </BrowserRouter>
    ), document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

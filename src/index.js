import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';
import Main from "./Main";
import Cranes from "./Pages/Cranes";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import CraneDes from "./Pages/CraneDes";
import Contacts from "./Pages/Contacts";
import RentService from "./Pages/RentService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement: <h1>404</h1>,
    },
    {
        path: '/Cranes',
        element: <Cranes />,
        errorElement: <h1>404</h1>,
    },
    {
        path: '/about',
        element: <About />,
        errorElement: <h1>404</h1>,
    },
    {
        path: '/projects',
        element: <Projects />,
        errorElement: <h1>404</h1>,
    },
    {
        path: '/Cranes/:name',
        element: <CraneDes/>,
        errorElement: <h1>404</h1>,
    },
    {
        path: '/Contacts/',
        element: <Contacts/>,
        errorElement: <h1>404</h1>,
    },
    {
        path: '/RentService/',
        element: <RentService/>,
        errorElement: <h1>404</h1>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);


reportWebVitals();

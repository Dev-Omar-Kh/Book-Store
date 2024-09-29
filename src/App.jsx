import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SiteLayout from './Layouts/SiteLayout';
import Register from './Site/Auth/Register';
import Login from './Site/Auth/Login';
import Home from './Site/Pages/Home/Home';

const routes = createBrowserRouter([

    {path : '/' , element : <SiteLayout /> , children : [

        {path : '/' , element : <Home />}

    ]},

    {path: '/register' , element : <Register />},
    {path: '/login' , element : <Login />},

]);

export default function App() {

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}

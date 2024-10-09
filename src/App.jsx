import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SiteLayout from './Layouts/SiteLayout';
import Register from './Site/Auth/Register';
import Login from './Site/Auth/Login';
import Home from './Site/Pages/Home/Home';
import SingleBook from './Site/Pages/Single-Book/SingleBook';
import Books from './Site/Pages/Books/Books';
import SuggestionPage from './Site/Pages/Suggestion-Page/SuggestionPage';
import Newsletter from './Site/Pages/Newsletter/Newsletter';
import NewsMessages from './Site/Pages/Newsletter/NewsMessages';
import AdminLayout from './Layouts/Admin-Layout/AdminLayout';
import AllUsers from './Admin/Pages/Users/AllUsers';
import Empty from './Components/Admin/Empty/Empty';

const routes = createBrowserRouter([

    // ====== site-routes ====== //

    {path : '/' , element : <SiteLayout /> , children : [

        {path : '/' , element : <Home />},
        {path : '/books' , element : <Books />},
        {path : '/suggestBook' , element : <SuggestionPage />},
        {path : '/single_book/:id' , element : <SingleBook />},

    ]},

    // ====== newsletter-routes ====== //

    {path : '/newsletter' , element : <Newsletter /> , children: [

        {path : '/newsletter', element : <NewsMessages noData={true} />},
        {path : '/newsletter/:id', element : <NewsMessages />}

    ]},

    // ====== authentication-routes ====== //

    {path: '/register' , element : <Register />},
    {path: '/login' , element : <Login />},

    // ====== admin-routes ====== //

    {path: '/admin' , element : <AdminLayout /> , children: [

        {path: '/admin' , element: <Empty />},
        {path: 'users' , element: <AllUsers />},

    ]}

]);

export default function App() {

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}

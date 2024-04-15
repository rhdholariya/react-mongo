import React from 'react';
import { useRoutes } from "react-router-dom";
import { HomePage } from '../screens/Home';
import "../scss/app.scss"

const Routes = () => {
    let element = [
        { path: "/", element: <HomePage /> },
    ];
    return useRoutes(element);
};

export default Routes;

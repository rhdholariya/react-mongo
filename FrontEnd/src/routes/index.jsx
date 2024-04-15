import React from 'react';
import { useRoutes } from "react-router-dom";
import { HomePage } from '../screens/Home';
import "../scss/app.scss"
import CreateNewCategoryTable from "../screens/CreateCategory/CreateNewCategoryTable.jsx";

const Routes = () => {
    let element = [
        { path: "/", element: <HomePage /> },
        { path: "/create-category/:id", element: <CreateNewCategoryTable /> },
    ];
    return useRoutes(element);
};

export default Routes;

import React from 'react';
import { useRoutes } from "react-router-dom";
import { HomePage } from '../screens/Home';
import "../scss/app.scss"
import CreateNewCategoryTable from "../screens/CreateCategory/CreateNewCategoryTable.jsx";
import ManageProductsTable from "../screens/ManageProducts/ManageProductsTable/index.jsx";

const Routes = () => {
    let element = [
        { path: "/", element: <HomePage /> },
        { path: "/create-category/:id", element: <CreateNewCategoryTable /> },
        { path: "/create-products/:id", element: <ManageProductsTable /> },
    ];
    return useRoutes(element);
};

export default Routes;

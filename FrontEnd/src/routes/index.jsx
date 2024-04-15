import React from 'react';
import { useRoutes } from "react-router-dom";
import "../scss/app.scss";

const HomePage = React.lazy(() => import("../screens/Home"));
const ManageProductsTable = React.lazy(() => import("../screens/ManageProducts/ManageProductsTable/index.jsx"));
const CreateNewCategoryTable = React.lazy(() => import("../screens/CreateCategory/CreateNewCategoryTable.jsx"));

const Routes = () => {
    let element = [
        { path: "/", element: <HomePage /> },
        { path: "/brands", element: <HomePage /> },
        { path: "/create-category/:id", element: <CreateNewCategoryTable /> },
        { path: "/create-products/:id", element: <ManageProductsTable /> },
    ];
    return useRoutes(element);
};

export default Routes;

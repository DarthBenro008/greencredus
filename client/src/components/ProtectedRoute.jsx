/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, redirect, ...rest }) => {
    const key = localStorage.getItem("key");

    return (
        <Route
            {...rest}
            render={(props) =>
                key ? <Component {...props} /> : <Redirect to={redirect} />
            }
        />
    );
};

export default ProtectedRoute;

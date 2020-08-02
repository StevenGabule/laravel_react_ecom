import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as jwt from 'jsonwebtoken';

const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }
    try {
        jwt.verify(token, 'IYo5mJHDjpWLiYiht5U7USHfkwAufl30QhrE7pjmcg5kW3KhFHLBjqPADZYV9GNn');
        return true;
    } catch (err) {
        console.log(err);
        localStorage.removeItem('token');
        return false;
    }
}
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/login' }} />
                )
            }
        />
    );
};

export default PrivateRoute;

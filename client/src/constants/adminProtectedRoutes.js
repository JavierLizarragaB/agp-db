import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Axios from 'axios';

function AdminProtectedRoute({ component: Component, ...rest}) {

    const [isLoading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        Axios.post('./api/verify_role?token=' + localStorage.getItem("token")).then((response) => {
            setIsLogged(response.data['login']);
            setIsAuth(response.data['auth']);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    } 

    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth && isLogged) {
                    return <Component />;
                } else if (isLogged && !!isAuth) {
                    return(
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    );
                } else {
                    return(
                        <Redirect to={{ pathname: "/log-in" }} />
                    );
                }
            }}
        />
    );
}

export default AdminProtectedRoute;
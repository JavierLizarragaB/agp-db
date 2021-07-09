import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Axios from 'axios';

function ProtectedRoute({ component: Component, ...rest}) {

    const [isLoading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        Axios.post('./api/verify_login?token=' + localStorage.getItem("token")).then((response) => {
            setIsLogged(response.data['login']);
            if (response.data['auth']){
                localStorage.setItem("showUserPanel", true);
            } 
            if (response.data['module']){
                
                localStorage.setItem("showOnlyAgenda", true);
            }
            console.log("here")
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <div className="App">Loading...</div>;
    } 
    
    return (
        <Route
            {...rest}
            async render={() => {
                if (isLogged) {
                    return <Component />;
                } else {
                    return(
                        <Redirect to={{ pathname: "/log-in"}} />
                    );
                }
            }}
        />
    );
}

export default ProtectedRoute;
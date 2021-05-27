import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../img/agp-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    render() {
        return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="250" class="d-inline-block align-top" alt="" />
                        <div id="menu-left">
                            <Link className="nav-item" to={'../pag-inicio'}>
                            Inicio
                            </Link>{' '}
                            <Link className="nav-item" to={''}>
                            Cerrar Sesión
                            </Link>{' '}
                        </div>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02"></div>
                    </a>
                </nav>
            </div>
        </>
        );
    }
}

export default NavBar;
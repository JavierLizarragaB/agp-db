import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../../img/papanico.png';


export default class Inicio extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="250" class="d-inline-block align-top" alt="" />
                        <div id="menu-left">
                            <Link className="navbar-brand" to={'../log-in'}>
                            Inicio de Sesión
                            </Link>{' '}
                        </div>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02"></div>
                    </a>
                </nav>
            </div>
        );
    }
}

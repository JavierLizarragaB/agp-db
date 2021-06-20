import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import logo from '../img/agp-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

    let history = useHistory();

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="250" class="d-inline-block align-top" alt="" />
                    <div id="menu-left">
                        <Link className="nav-item" onClick={()=>{history.push('/pag-inicio');}}>
                        Inicio
                        </Link>{' '}
                        <Link className="nav-item" onClick={()=>{history.push('/directorio-paciente');}}>
                        Pacientes
                        </Link>{' '}
                        <Link className="nav-item" onClick={()=>{history.push('/log-in');}}>
                        Cerrar Sesión
                        </Link>{' '}
                    </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02"></div>
                </a>
            </nav>
        </div>
    );
}

export default NavBar;
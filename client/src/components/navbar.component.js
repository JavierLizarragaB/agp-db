import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import logo from '../img/agp-logo.png';
import { Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {

    let history = useHistory();
    
    const logOut = () => {
        localStorage.removeItem('token');
        history.push('/log-in');
    }


    return (
        
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">

                <div class="logo-imagen"><img src={logo} width="250" class="d-inline-block align-top" alt="" /></div>

                <a class="navbar-brand" href="#">
                    
                    <div id="menu-left">
                        
                        <ul>
                            <a><Link className="nav-item" onClick={()=>{history.push('/pag-inicio');}}>
                            Inicio
                            </Link>{' '}</a>
                            <a><Link className="nav-item" onClick={()=>{history.push('/directorio-paciente');}}>
                            Pacientes
                            </Link>{' '}</a>
                            <a><Link className="nav-item" onClick={()=>{history.push('/panel-usuarios');}}>
                            Panel Usuarios
                            </Link>{' '}</a>
                            <a><Link className="nav-item" onClick={logOut}>
                            Cerrar Sesión
                            </Link>{' '}</a>
                        </ul>
                    </div>
                </a>
            </nav>
        </div>
    );
}

export default NavBar;
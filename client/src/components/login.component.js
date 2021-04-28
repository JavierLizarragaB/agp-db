import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from '../img/papanico.png';
import mapa from '../img/agp-mapa.png';
import loc from '../img/loc.png';
import tel from '../img/tel.png';
import hora from '../img/hora.png';
import Axios from 'axios';

export const Login = () => {
    const [user, getUser] = useState('');
    const [passwrd, getPasswrd] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('./api/log-in', {
            user,
            passwrd,
        }).then((response) => {
            console.log(response);

            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus('Sesion iniciada por: ' + response.data);
            }
        });
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to={'/log-in'}>
                        Inicio de Sesión
                    </Link>{' '}
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02"></div>
                </div>
            </nav>

            <div className="outer">
                <div>
                    <img className="logoAGP" src={logo} />
                </div>
                <div className="inner">
                    <form>
                        <label>{loginStatus}</label>
                        <div className="form-group">
                            <label>
                                <b>Correo</b>
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                onChange={(e) => {
                                    getUser(e.target.value);
                                }}
                                placeholder="Correo"
                                autoFocus
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                <b>Contraseña</b>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={(e) => {
                                    getPasswrd(e.target.value);
                                }}
                                placeholder="Contraseña"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" required />
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    Recuerdame
                                </label>
                            </div>
                        </div>

                        <button onClick={handleSubmit} className="btn btn-custom btn-lg btn-block">
                            <b>Ingresar</b>
                        </button>
                        <p className="forgot-password text-right">
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </p>
                    </form>
                </div>
            </div>

            <footer className="foot">
                <div className="row">
                    <div className="col-lg-4">
                        <img className="mapita" src={mapa} />
                    </div>
                    <div className="col-lg-4">
                        <img className="ubi" src={loc} />
                        <div className="text">Olivares, Luis Encinas, 83138 Hermosillo, Son</div>

                        <img className="tel" src={tel} />

                        <div className="text">
                            <span> TELÉFONO </span> 662 216 4883
                        </div>
                    </div>
                    <div className="col-lg-4 text">
                        <img className="hora" src={hora} />

                        <div className="row">
                            <div className="col-lg-12">
                                <span> HORARIO </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">Lunes - Viernes</div>
                            <div className="col-lg-6">8:00 - 13:00</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">Sábado</div>
                            <div className="col-lg-6">Cerrado</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">Domingo</div>
                            <div className="col-lg-6">Cerrado</div>
                        </div>
                    </div>
                </div>
                <div className="copy">&copy; 2021 - Agrupación George Papanicolau</div>
            </footer>
        </div>
    );
};

export default Login;

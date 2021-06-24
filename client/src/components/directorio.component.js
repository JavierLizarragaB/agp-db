import React, { Component, useState, useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar.component';
import Axios from 'axios';
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';

class Directorio extends Component {


    state = {
            redirect: false
        }
        redirectHandler = () => {
            this.setState({ redirect: true })
            this.renderRedirect();
        }
        renderRedirect = () => {
            if (this.state.redirect) {
                return <Redirect to='/Crear-Paciente' />
            }
        }

    render() {
        return (
        <>
            <div>
                <NavBar />
                <div className="col-lg-12 text-center mt-5 row">
                    <div className="col-md-4 offset-md-4 mt-5 pt-3">
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Buscar Paciente" aria-label="Nombre del Paciente" />
                        </div>
                    </div>
                </div>
                
                <>
                    <Link onClick={this.redirectHandler}>REGISTRAR NUEVO PACIENTE</Link>
                    {this.renderRedirect()}
                </>

                <br />

                <div className="row">
                    
                </div>
            </div>
        </>
        );
    }
}

export default Directorio;
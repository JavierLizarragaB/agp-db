import React, { Component } from "react";
import logo from '../img/papanico.png';

export const Form = () => {
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="250" class="d-inline-block align-top" alt="" />
                    </a>
                </nav>
            </div>
            <div>
                [INFO DEL PACIENTE]
            </div>
            <div>
                <button className="btn btn-custom2 col-md-10 btn-txt active" type="button" data-toggle="collapse" data-target="#info-gen" aria-expanded="false" aria-controls="collapseExample">Información General</button>
                <div id="info-gen" className="collapse info-text">
                    <div className="card card-body">
                        Formulario de Info General
                    </div>
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-custom2 col-md-10 btn-txt active" data-toggle="collapse" data-target="#est">Estudios</button>
                <div id="est" className="collapse est-text">
                    Estudios
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-custom2 col-md-10 btn-txt active" data-toggle="collapse" data-target="#med">Medicamentos</button>
                <div id="med" className="collapse med-text">
                    Formulario de Info General
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-custom2 col-md-10 btn-txt active" data-toggle="collapse" data-target="#citas">Citas</button>
                <div id="citas" className="collapse citas-text">
                    Citas
                </div>
            </div>
        </div>
    )
};

export default Form;
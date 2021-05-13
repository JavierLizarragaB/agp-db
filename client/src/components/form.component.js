import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/papanico.png';

function Form() {
    const [open, setOpen] = useState(false);

    return (
        <>
        <div className="nav-sec">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="250" class="d-inline-block align-top" alt="" />
                </a>
            </nav>
        </div>

        <div className="info-pat">
            [INFO DEL PACIENTE]
        </div>

        <div
            onClick={() => setOpen(!open)}
            aria-controls="info-collapse-text"
            aria-expanded={open}
            className="col-md-10 btn-text active btn btn-custom2 text-left"
        >
            Formulario de Info General
        </div>
        <Collapse in={open}>
            <div id="info-collapse-text" className="info-text">
            <form className="info-form">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="email" className="form-control form-pat" id="inputCN" placeholder="Entidad de Nacimiento" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="password" className="form-control form-pat" id="inputCN" placeholder="Ciudad de Nacimiento" />
                    </div>
                </div>
                <div>Domicilio Permanente</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="email" className="form-control form-pat" id="inputCDP" placeholder="Calle" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="password" className="form-control form-pat" id="inputNDP" placeholder="Número" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputColDP" placeholder="Colonia" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocalDP" placeholder="Localidad" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMunDP" placeholder="Municipio"/>
                    </div>
                    <div className="form-group col-md-2">
                    <input className="form-control form-pat" id="inputCPDP" placeholder="C.P." />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel1DP" placeholder="Telefóno (1)" />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2DP" placeholder="Telefóno (2)" />
                    </div>
                </div>

                <div>Domicilio temporal</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="email" className="form-control form-pat" id="inputCalle" placeholder="Calle" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="password" className="form-control form-pat" id="inputNum" placeholder="Número" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCol" placeholder="Colonia" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocal" placeholder="Localidad" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMun" placeholder="Municipio"/>
                    </div>
                    <div className="form-group col-md-2">
                    <input className="form-control form-pat" id="inputCP" placeholder="C.P." />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel1" placeholder="Telefóno (1)" />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2" placeholder="Telefóno (2)" />
                    </div>
                </div>
                
                <div>Familia Responsable</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="email" className="form-control form-pat" id="inputCalleFR" placeholder="Calle" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="password" className="form-control form-pat" id="inputNumFR" placeholder="Número" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputColFR" placeholder="Colonia" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocalFR" placeholder="Localidad" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMunFR" placeholder="Municipio"/>
                    </div>
                    <div className="form-group col-md-2">
                    <input className="form-control form-pat"id="inputCPFR" placeholder="C.P." />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel1FR" placeholder="Telefóno (1)" />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2FR" placeholder="Telefóno (2)" />
                    </div>
                </div>
                <div>Parentesco</div>
                <div>
                    <input type="text" className="form-control form-pat col-md-4" id="inputParent" placeholder="Parentesco"/>
                </div>
                <div>
                    <button /*onClick={handleSubmit}*/ className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
                        <b>Enviar</b>
                    </button>
                </div>
            </form>
            </div>
        </Collapse>

        {/* <div
        onClick={() => setOpen(!open)}
        aria-controls="med-collapse-text"
        aria-expanded={open}
        className="col-md-10 btn-text btn btn-custom2 text-left"
        >
            Medicamentos
        </div>
        <Collapse in={open}>
        <div id="med-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
        </div>
        </Collapse>*/}
        </> 
    );
}

export default Form;
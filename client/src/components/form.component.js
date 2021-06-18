import React, { Component, useState, useContext} from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormContext} from '../context/FormContext'

import NavBar from './navbar.component';
import male from '../img/male.png';
import female from '../img/female.png';
import SegundaIteracion from "./segunda-iteracion.component";
import TerceraIteracion from './tercera-iteracion.component';
import CuartaIteracion from './cuarta-iteracion.component';
import QuintaIteracion from './quinta-iteracion.component';
import SextaIteracion from './sexta-iteracion.component';
import SeptimaIteracion from './septima-iteracion.component';
import OctavaIteracion from './octava-iteracion.component';
import axios from "axios";


function Form() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    // Load context
    const {formState, updatePatientData, updateGeneralInfo} = useContext(FormContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("./api/forms", {
            formState
        }).then((response) => {
            console.log(response);
            
            if(response.data.message) {
                setMessage(response.data.message);
                setOpen(false);
            } else {
                setMessage("Ha sucedido algo :(");
            }
        });
    };
    

    return (
        <>

        <NavBar />

        <div className="info-pat">
            [INFO DEL PACIENTE]
            <div className="row">
                    <div className="col-lg-4">
                        <img className="tel" src={male} />
                    </div>
                    <div className="col-lg-3">
                        <div className="patient-text-br">Hugo López López</div>
                        <div className="patient-text">00/00/0000 &ensp;&ensp;&ensp;&ensp; 28 años</div>
                        <br></br>
                        <div className="patient-text-br">Sangre:</div>
                        <div className="patient-text">A+</div>
                        <br></br>
                        <div className="patient-text-br">Contacto de Emergencia:</div>
                        <div className="patient-text">6621 581515 &ensp; Mario López</div>
                        <br></br>
                        <div className="patient-text-br">Acude con Acompañante:</div>
                        <div className="form-row">
                            
                            <div className="patient-text-br">Sí</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            &ensp;&ensp;
                            <div className="patient-text-br">No</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="patient-text-br">DX MÉDICO</div>
                        <div className="box">&ensp;</div>
                       
                        <br></br>
                        <div className="patient-text-br">Albergue:</div>
                        <div className="form-row">
                            <div className="patient-text-br">Sí</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            &ensp;&ensp;
                            <div className="patient-text-br">No</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br></br>
                        <div className="patient-text-br">Quimioterapia:</div>
                        <div className="form-row">
                            <div className="patient-text-br">Sí</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            &ensp;&ensp;
                            <div className="patient-text-br">No</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>

        <p>{message}</p>

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
            <form className="info-form form-text-supra col-md-12">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCN" placeholder="Entidad de Nacimiento" onChange={(e) => {
                            updatePatientData("birth_city",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCN" placeholder="Ciudad de Nacimiento" onChange={(e) => {
                            updatePatientData("birth_state",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                </div>
                <div>Domicilio Permanente</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCDP" placeholder="Calle" onChange={(e) => {
                            updatePatientData("permanent_street",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputNDP" placeholder="Número" onChange={(e) => {
                            updatePatientData("permanent_num",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputColDP" placeholder="Colonia" onChange={(e) => {
                            updatePatientData("permanent_suburb",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocalDP" placeholder="Localidad" onChange={(e) => {
                            updatePatientData("permanent_locality",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMunDP" placeholder="Municipio" onChange={(e) => {
                            updatePatientData("permanent_municipality",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-2">
                    <input className="form-control form-pat" id="inputCPDP" placeholder="C.P." onChange={(e) => {
                        updatePatientData("permanent_zip_code",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel1DP" placeholder="Telefóno (1)" onChange={(e) => {
                        updatePatientData("permanent_phone",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2DP" placeholder="Telefóno (2)" onChange={(e) => {
                        updatePatientData("permanent_phone2",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                <br />
                
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" placeholder="Correo Electrónico" onChange={(e) => {
                        updatePatientData("email",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-2">
                        <input type="text" className="form-control form-pat" placeholder="Ingresos" onChange={(e) => {
                        updatePatientData("income",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control form-pat" placeholder="Servicio Médico" onChange={(e) => {
                        updatePatientData("medical_service",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control form-pat" placeholder="Escolaridad" onChange={(e) => {
                        updatePatientData("scholarship",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control form-pat" placeholder="Ocupación" onChange={(e) => {
                        updatePatientData("ocupation",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control form-pat" placeholder="Religión" onChange={(e) => {
                        updatePatientData("religion",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control form-pat" placeholder="Estado Civil" onChange={(e) => {
                        updatePatientData("civil_state",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-3">Realización Historial Clínico</div>
                    <div className="form-group col-md-2">
                        <input type="date" className="form-control form-pat" onChange={(e) => {
                        updatePatientData("clinic_record_date",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                
                <div>Domicilio Temporal</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCalle" placeholder="Calle" onChange={(e) => {
                        updatePatientData("temp_street",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputNum" placeholder="Número" onChange={(e) => {
                        updatePatientData("temp_num",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCol" placeholder="Colonia" onChange={(e) => {
                        updatePatientData("temp_suburb",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocal" placeholder="Localidad" onChange={(e) => {
                        updatePatientData("temp_locality",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMun" placeholder="Municipio" onChange={(e) => {
                        updatePatientData("temp_municipality",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-2">
                        <input className="form-control form-pat" id="inputCP" placeholder="C.P." onChange={(e) => {
                        updatePatientData("temp_zip_code",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputTel1" placeholder="Telefóno (1)" onChange={(e) => {
                        updatePatientData("temp_phone",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2" placeholder="Telefóno (2)" onChange={(e) => {
                        updatePatientData("temp_phone2",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                
                <div>Familia Responsable</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCalleFR" placeholder="Calle" onChange={(e) => {
                        updatePatientData("responsable_street",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputNumFR" placeholder="Número" onChange={(e) => {
                        updatePatientData("responsable_num",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputColFR" placeholder="Colonia" onChange={(e) => {
                        updatePatientData("responsable_suburb",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocalFR" placeholder="Localidad" onChange={(e) => {
                        updatePatientData("responsable_locality",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMunFR" placeholder="Municipio" onChange={(e) => {
                        updatePatientData("responsable_municipality",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-2">
                    <input className="form-control form-pat"id="inputCPFR" placeholder="C.P." onChange={(e) => {
                        updatePatientData("responsable_zip_code",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel1FR" placeholder="Telefóno (1)" onChange={(e) => {
                        updatePatientData("responsable_phone",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2FR" placeholder="Telefóno (2)" onChange={(e) => {
                        updatePatientData("responsable_phone2",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                <div>Parentesco</div>
                <div>
                    <input type="text" className="form-control form-pat col-md-4" id="inputParent" placeholder="Parentesco" onChange={(e) => {
                        updatePatientData("responsable_relationship",e.target.value);
                        console.log(formState);
                    }} />
                </div>
                <br></br><br></br>
                
                {/* Segunda Iteracion */}

                <SegundaIteracion />
                <br />

                {/* Tercera Iteracion */}

                <TerceraIteracion />
                <br />
                
                {/* Cuarta iteracion */}
                
                <CuartaIteracion />
                <br />

                {/* Quinta Iteracion */}

                <QuintaIteracion />
                <br />

                {/* Sexta Iteracion */}

                <SextaIteracion />
                <br />

                {/* Septima Iteracion */}

                <SeptimaIteracion />
                <br />

                {/* Octava Iteracion */}
                <OctavaIteracion />
                <br />

                {/* boton de enviar */}
                <div>
                    <button onClick={handleSubmit} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
                        <b>Enviar</b>
                    </button>
                </div>

            </form>
            </div>
        </Collapse>

        {/* <div



        <div
            onClick={() => setOpen(!open)}
            aria-controls="info-collapse-text"
            aria-expanded={open}
            className="col-md-10 btn-text active btn btn-custom2 text-left"
        >
            Interrogatorio por Aparatos y Sistemas
        </div>
        <Collapse in={open}>
            <div id="info-collapse-text" className="info-text">
            <form className="info-form">
                
            </form>
            </div>
        </Collapse> */}

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
import React, { Component, useState, useContext} from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormContext} from '../context/FormContext'

import NavBar from './navbar.component';
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
    const {formState, updateGeneralInfo} = useContext(FormContext);

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
                            updateGeneralInfo("birth_city",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCN" placeholder="Ciudad de Nacimiento" onChange={(e) => {
                            updateGeneralInfo("birth_state",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                </div>
                <div>Domicilio Permanente</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCDP" placeholder="Calle" onChange={(e) => {
                            updateGeneralInfo("street",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputNDP" placeholder="Número" onChange={(e) => {
                            updateGeneralInfo("number",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputColDP" placeholder="Colonia" onChange={(e) => {
                            updateGeneralInfo("neighborhood",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocalDP" placeholder="Localidad" onChange={(e) => {
                            updateGeneralInfo("town",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMunDP" placeholder="Municipio" onChange={(e) => {
                            updateGeneralInfo("municipality",e.target.value);
                            console.log(formState);
                        }} />
                    </div>
                    <div className="form-group col-md-2">
                    <input className="form-control form-pat" id="inputCPDP" placeholder="C.P." onChange={(e) => {
                        updateGeneralInfo("postcode",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel1DP" placeholder="Telefóno (1)" onChange={(e) => {
                        updateGeneralInfo("phone",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2DP" placeholder="Telefóno (2)" onChange={(e) => {
                        updateGeneralInfo("phone2",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                <br />
                
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" placeholder="Correo Electrónico" onChange={(e) => {
                        updateGeneralInfo("email",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-2">
                        <input type="text" className="form-control form-pat" placeholder="Ingresos" onChange={(e) => {
                        updateGeneralInfo("income",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control form-pat" placeholder="Servicio Médico" onChange={(e) => {
                        updateGeneralInfo("medical_service",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control form-pat" placeholder="Escolaridad" onChange={(e) => {
                        updateGeneralInfo("scholarship",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control form-pat" placeholder="Ocupación" onChange={(e) => {
                        updateGeneralInfo("occupation",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control form-pat" placeholder="Religión" onChange={(e) => {
                        updateGeneralInfo("religion",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-3">
                        <input type="text" className="form-control form-pat" placeholder="Estado Civil" onChange={(e) => {
                        updateGeneralInfo("civil_state",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-3">Realización Historial Clínico</div>
                    <div className="form-group col-md-2">
                        <input type="date" className="form-control form-pat" onChange={(e) => {
                        updateGeneralInfo("medical_background_date",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                
                <div>Domicilio Temporal</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCalle" placeholder="Calle" onChange={(e) => {
                        updateGeneralInfo("temp_street",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputNum" placeholder="Número" onChange={(e) => {
                        updateGeneralInfo("temp_number",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCol" placeholder="Colonia" onChange={(e) => {
                        updateGeneralInfo("temp_neighborhood",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocal" placeholder="Localidad" onChange={(e) => {
                        updateGeneralInfo("temp_town",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMun" placeholder="Municipio" onChange={(e) => {
                        updateGeneralInfo("temp_municipality",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-2">
                        <input className="form-control form-pat" id="inputCP" placeholder="C.P." onChange={(e) => {
                        updateGeneralInfo("temp_postcode",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputTel1" placeholder="Telefóno (1)" onChange={(e) => {
                        updateGeneralInfo("temp_phone",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2" placeholder="Telefóno (2)" onChange={(e) => {
                        updateGeneralInfo("temp_phone2",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                
                <div>Familia Responsable</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCalleFR" placeholder="Calle" onChange={(e) => {
                        updateGeneralInfo("fam_street",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputNumFR" placeholder="Número" onChange={(e) => {
                        updateGeneralInfo("fam_number",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputColFR" placeholder="Colonia" onChange={(e) => {
                        updateGeneralInfo("fam_neighborhood",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocalFR" placeholder="Localidad" onChange={(e) => {
                        updateGeneralInfo("fam_town",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMunFR" placeholder="Municipio" onChange={(e) => {
                        updateGeneralInfo("fam_municipality",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-2">
                    <input className="form-control form-pat"id="inputCPFR" placeholder="C.P." onChange={(e) => {
                        updateGeneralInfo("fam_postcode",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel1FR" placeholder="Telefóno (1)" onChange={(e) => {
                        updateGeneralInfo("fam_phone",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2FR" placeholder="Telefóno (2)" onChange={(e) => {
                        updateGeneralInfo("fam_phone2",e.target.value);
                        console.log(formState);
                    }} />
                    </div>
                </div>
                <div>Parentesco</div>
                <div>
                    <input type="text" className="form-control form-pat col-md-4" id="inputParent" placeholder="Parentesco" onChange={(e) => {
                        updateGeneralInfo("fam_relationship",e.target.value);
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
import React, { Component, useState, useContext} from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormContext} from '../context/FormContext'

import NavBar from './navbar.component';
import Masculino from '../img/male.png';
import Femenino from '../img/female.png';
import axios from "axios";


function CrearPaciente() {
    //para abrir el formulario general
    const [open, setOpen] = useState(false);

    //para abrir los 3 textos
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    //para la que esta adentro de formulario general (abrir iteracion 1)
    const [open4, setOpen4] = useState(false);

    const [message, setMessage] = useState("");

    // Load context
    const {formState, updateFormState} = useContext(FormContext);

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
    
    const jsonpaciente = {"_id":{"$oid":"60cacc5ced0179c75db08186"},
                        "folio":"2",
                        "nombre":"Gigi Rodriguez",
                        "edad":"9",
                        "sexo":"Femenino",
                        "fecha_nacimiento":"01/01/2001",
                        "dx_medico":"existir",
                        "sangre":"A+",
                        "contacto_emergencia_nombre":"Nickolas Rodriguez Ochoa",
                        "contacto_emergencia_num":"123456",
                        "companion":false,
                        "albergue":false,
                        "quimio":false}

    let icon = jsonpaciente.sexo == "Femenino" ? Femenino : Masculino;
    let albergue = jsonpaciente.albergue == true ? true : false;
    let companion = jsonpaciente.companion == true ? true : false;
    let quimio = jsonpaciente.quimio == true ? true : false;

    
    return (
        <>

        <NavBar />

        <p>{message}</p>

        
            <div id="info-collapse-text" className="info-text">

                <div id="form1" className="formulario">

                    <h1>REGISTRO DE NUEVO PACIENTE</h1>
                    <br></br><br></br>

                    <form className="info-form form-text-supra col-md-12">
                        <div className="form-row">
                            <div className="form-group col-md-4">Nombre del Paciente</div>
                            <div className="form-group col-md-4">Fecha de Nacimiento</div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <input type="text" className="form-control form-pat" id="inputCN" placeholder="Nombre Completo" required="true" onChange={(e) => {
                                    updateFormState("patient_data", "birth_city",e.target.value);
                                    console.log(formState);
                                }} />
                            </div>

                            <div className="form-group col-md-4">
                                <input type="date" className="form-control form-pat" id="inputCN" required="true" onChange={(e) => {
                                    updateFormState("patient_data", "birth_state",e.target.value);
                                    console.log(formState);
                                }} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">Sexo</div>
                            <div className="form-group col-md-4">Tipo de Sangre</div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <select className="form-control form-pat" id="inputCDP" placeholder="Sexo" required="true" onChange={(e) => {
                                    updateFormState("patient_data", "permanent_street",e.target.value);
                                    console.log(formState);
                                }}>
                                    <option>Masculino</option>
                                    <option>Femenino</option>
                                    <option>Otro</option>
                                    </select>
                            </div>

                            <div className="form-group col-md-4">
                                <input type="text" className="form-control form-pat" id="inputCDP" placeholder="(Ej. O+, A-, etc.)" required="true" onChange={(e) => {
                                    updateFormState("patient_data", "permanent_street",e.target.value);
                                    console.log(formState);
                                }} />
                            </div>
    
                        </div>
                        <br />
                        
                        <div className="form-row">
                            <div className="form-group col-md-4">Nombre del Contacto de Emergencia</div>
                            <div className="form-group col-md-4">Número del Contacto de Emergencia</div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <input type="text" className="form-control form-pat" id="inputCN" placeholder="Nombre Completo" required="true" onChange={(e) => {
                                    updateFormState("patient_data", "birth_city",e.target.value);
                                    console.log(formState);
                                }} />
                            </div>

                            <div className="form-group col-md-4">
                                <input type="text" className="form-control form-pat" id="inputCN" placeholder="Teléfono" required="true" onChange={(e) => {
                                    updateFormState("patient_data", "birth_state",e.target.value);
                                    console.log(formState);
                                }} />
                            </div>
                        </div>

                        <div>DX Médico</div>
                        <div className="form-row">
                            <div className="form-group col-md-12 info text">
                                <textarea className="form-control form-pat" rows="6" required="true"
                                // onChange={(e) => {mycontext.updateHygienePassPhysAct("passtime",e.target.value);}} 
                                ></textarea>
                            </div>
    
                        </div>


                        <div className="form-row">
                            <div className="form-group col-md-3 form-text">
                                Acude con Acompañante
                            </div>
                            <div>
                                <div>Si</div>
                                <div>No</div>           
                            </div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat"></input>
                                <input type="checkbox" className="form-control form-pat"></input>
                            </div>

                            <div className="form-group col-md-2 form-text">
                                Albergue
                            </div>
                            <div>
                                <div>Si</div>
                                <div>No</div>           
                            </div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat"></input>
                                <input type="checkbox" className="form-control form-pat"></input>
                            </div>

                            <div className="form-group col-md-2 form-text">
                                Quimioterapia
                            </div>
                            <div>
                                <div>Si</div>
                                <div>No</div>           
                            </div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat"></input>
                                <input type="checkbox" className="form-control form-pat"></input>
                            </div>

                            
                        </div>
                        
                    </form>
                </div>    
            
        {/* boton de enviar */}
        <div>
            <button onClick={handleSubmit} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
                <b>Guardar Datos</b>
            </button>
        </div>
    </div>
        </> 
    );
}

export default CrearPaciente;
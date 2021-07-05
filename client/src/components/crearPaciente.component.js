import React, { Component, useState, useContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormContext} from '../context/FormContext'
import { useHistory } from 'react-router';

import NavBar from './navbar.component';
import axios from "axios";


function CrearPaciente() {

    let history = useHistory();

    const [message, setMessage] = useState("");

    // Load context
    const {formState, updateFormState, setPatientFolio, handleCheckboxGroup} = useContext(FormContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("./api/paciente", {
            formState
        }).then((response) => {
            console.log(response);
            
            if(response.status == 201) {
                console.log("Succes:",response.status);
                setMessage("¡Paciente registrado!");
                console.log("El folio es:",response.data._id);
                setPatientFolio(response.data._id);
                history.push('/datos-paciente');
            } else {
                console.log("Error:",response.data.message);
                setMessage(response.data.message);
            }
        });
    };

    
    return (
        <>

        <NavBar />

        <p>{message}</p>

        
            <div id="info-collapse-text" className="info-text">

                <div id="generalForm" className="formulario">

                    <h1>REGISTRO DE NUEVO PACIENTE</h1>
                    <br></br><br></br>

                    <form className="info-form form-text-supra col-md-12">
                        <div className="form-row">
                            <div className="form-group col-md-4">Nombre del Paciente</div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <input type="text" className="form-control form-pat" id="inputNC" placeholder="Nombre Completo" required="true" onChange={(e) => {
                                    updateFormState("general_info", "name",e.target.value);
                                    console.log(formState);
                                }} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">Edad del Paciente</div>
                            <div className="form-group col-md-4">Fecha de Nacimiento</div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <input type="number" className="form-control form-pat" id="inputED" placeholder="Edad" required="true" onChange={(e) => {
                                    updateFormState("general_info", "age",e.target.value);
                                    console.log(formState);
                                }} />
                            </div>

                            <div className="form-group col-md-4">
                                <input type="date" className="form-control form-pat" id="inputFN" required="true" onChange={(e) => {
                                    updateFormState("general_info", "birth_date",e.target.value);
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
                                <select className="form-control form-pat" id="inputS" placeholder="Sexo" required="true" onChange={(e) => {
                                    updateFormState("general_info", "sex",e.target.value);
                                    console.log(formState);
                                }}>
                                    <option>Seleccione una opcion</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro">Otro</option>
                                    </select>
                            </div>

                            <div className="form-group col-md-4">
                                <input type="text" className="form-control form-pat" id="inputTS" placeholder="(Ej. O+, A-, etc.)" required="true" onChange={(e) => {
                                    updateFormState("general_info", "blood_type",e.target.value);
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
                                <input type="text" className="form-control form-pat" id="inputCENom" placeholder="Nombre Completo" required="true" onChange={(e) => {
                                    updateFormState("general_info", "emergency_contact_name",e.target.value);
                                    console.log(formState);
                                }} />
                            </div>

                            <div className="form-group col-md-4">
                                <input type="text" className="form-control form-pat" id="inputCENum" placeholder="Teléfono" required="true" onChange={(e) => {
                                    updateFormState("general_info", "emergency_contact_num",e.target.value);
                                    console.log(formState);
                                }} />
                            </div>
                        </div>

                        <div>DX Médico</div>
                        <div className="form-row">
                            <div className="form-group col-md-12 info text">
                                <textarea className="form-control form-pat" rows="6" required="true"
                                onChange={(e) => {updateFormState("general_info", "medical_dx",e.target.value);
                                console.log(formState);}} 
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
                                <input type="checkbox" className="form-control form-pat" name="general-cb-1" id="general-cb-1-1" value="1" onChange={(e) => {
                                    handleCheckboxGroup(e.target.name,e.target.id,"general_info", "companion");
                                    console.log(formState);
                                }}></input>
                                <input type="checkbox" className="form-control form-pat" name="general-cb-1" id="general-cb-1-2" value="" onChange={(e) => {
                                    handleCheckboxGroup(e.target.name,e.target.id,"general_info", "companion");
                                    console.log(formState);
                                }}></input>
                            </div>

                            <div className="form-group col-md-2 form-text">
                                Albergue
                            </div>
                            <div>
                                <div>Si</div>
                                <div>No</div>           
                            </div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="general-cb-2" id="general-cb-2-1" value="1" onChange={(e) => {
                                    handleCheckboxGroup(e.target.name,e.target.id,"general_info", "shelter");
                                    console.log(formState);
                                }}></input>
                                <input type="checkbox" className="form-control form-pat" name="general-cb-2" id="general-cb-2-2" value="" onChange={(e) => {
                                    handleCheckboxGroup(e.target.name,e.target.id,"general_info", "shelter");
                                    console.log(formState);
                                }}></input>
                            </div>

                            <div className="form-group col-md-2 form-text">
                                Quimioterapia
                            </div>
                            <div>
                                <div>Si</div>
                                <div>No</div>           
                            </div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="general-cb-3" id="general-cb-3-1" value="1" onChange={(e) => {
                                    handleCheckboxGroup(e.target.name,e.target.id,"general_info", "quimio");
                                    console.log(formState);
                                }}></input>
                                <input type="checkbox" className="form-control form-pat" name="general-cb-3" id="general-cb-3-2" value="" onChange={(e) => {
                                    handleCheckboxGroup(e.target.name,e.target.id,"general_info", "quimio");
                                    console.log(formState);
                                }}></input>
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
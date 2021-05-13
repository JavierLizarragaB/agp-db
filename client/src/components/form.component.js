import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/papanico.png';
import axios from "axios";

function Form() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    /* Datos iniciales */
    const [birth_state, setBirth_state] = useState("");
    const [birth_city, setBirth_city] = useState("");

    /* Domicilio permamenente */
    const [calle, setCalle] = useState("");
    const [num, setNum] = useState("");
    const [colonia, setColonia] = useState("");
    const [localidad, setLocalidad] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [cp, setCp] = useState("");
    const [tel, setTel] = useState("");
    const [tel2, setTel2] = useState("");

    /* Domicilio temporal */
    const [calle_temp, setCalle_temp] = useState("");
    const [num_temp, setNum_temp] = useState("");
    const [colonia_temp, setColonia_temp] = useState("");
    const [localidad_temp, setLocalidad_temp] = useState("");
    const [municipio_temp, setMunicipio_temp] = useState("");
    const [cp_temp, setCp_temp] = useState("");
    const [tel_temp, setTel_temp] = useState("");
    const [tel2_temp, setTel2_temp] = useState("");

    /* Familia Responsable */
    const [nombre_responsable, setNombre_responsable] = useState("");
    const [calle_responsable, setCalle_responsable] = useState("");
    const [num_responsable, setNum_responsable] = useState("");
    const [colonia_responsable, setColonia_responsable] = useState("");
    const [localidad_responsable, setLocalidad_responsable] = useState("");
    const [municipio_responsable, setMunicipio_responsable] = useState("");
    const [cp_responsable, setCp_responsable] = useState("");
    const [tel_responsable, setTel_responsable] = useState("");
    const [tel2_responsable, setTel2_responsable] = useState("");

    /* Parentesco */
    const [parentesco_responsable, setParentesco_responsable] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("./api/forms", {
            birth_state,
            birth_city,
            calle,
            num, 
            colonia,
            localidad, 
            municipio,
            cp,
            tel,
            tel2,
            calle_temp,
            num_temp,
            colonia_temp,
            localidad_temp,
            municipio_temp,
            cp_temp,
            tel_temp,
            tel2_temp,
            nombre_responsable,
            calle_responsable,
            num_responsable,
            colonia_responsable,
            localidad_responsable,
            municipio_responsable,
            cp_responsable,
            tel_responsable,
            tel2_responsable,
            parentesco_responsable
        }).then((response) => {
            console.log(response);
            
            if(response.data.message) {
                setMessage(response.data.message);
            } else {
                setMessage("¡Datos guardados con éxito!");
                setOpen(false);
            }
        });
    };
    
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

        {message}

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
                        <input type="text" className="form-control form-pat" id="inputCN" placeholder="Entidad de Nacimiento" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCN" placeholder="Ciudad de Nacimiento" onChange={(e) => {
                            setBirth_city(e.target.value);
                        }} />
                    </div>
                </div>
                <div>Domicilio Permanente</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCDP" placeholder="Calle" onChange={(e) => {
                            setCalle(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputNDP" placeholder="Número" onChange={(e) => {
                            setNum(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputColDP" placeholder="Colonia" onChange={(e) => {
                            setColonia(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocalDP" placeholder="Localidad" onChange={(e) => {
                            setLocalidad(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMunDP" placeholder="Municipio" onChange={(e) => {
                            setMunicipio(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-2">
                    <input className="form-control form-pat" id="inputCPDP" placeholder="C.P." onChange={(e) => {
                        setCp(e.target.value);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel1DP" placeholder="Telefóno (1)" onChange={(e) => {
                        setTel(e.target.value);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2DP" placeholder="Telefóno (2)" onChange={(e) => {
                        setTel2(e.target.value);
                    }} />
                    </div>
                </div>

                <div>Domicilio temporal</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCalle" placeholder="Calle" onChange={(e) => {
                            setCalle_temp(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputNum" placeholder="Número" onChange={(e) => {
                            setNum_temp(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCol" placeholder="Colonia" onChange={(e) => {
                            setColonia_temp(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocal" placeholder="Localidad" onChange={(e) => {
                            setLocalidad_temp(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMun" placeholder="Municipio" onChange={(e) => {
                            setMunicipio_temp(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-2">
                        <input className="form-control form-pat" id="inputCP" placeholder="C.P." onChange={(e) => {
                            setCp_temp(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputTel1" placeholder="Telefóno (1)" onChange={(e) => {
                            setTel_temp(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2" placeholder="Telefóno (2)" onChange={(e) => {
                        setTel2_temp(e.target.value);
                    }} />
                    </div>
                </div>
                
                <div>Familia Responsable</div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputCalleFR" placeholder="Calle" onChange={(e) => {
                            setCalle_responsable(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputNumFR" placeholder="Número" onChange={(e) => {
                            setNum_responsable(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputColFR" placeholder="Colonia" onChange={(e) => {
                            setColonia_responsable(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputLocalFR" placeholder="Localidad" onChange={(e) => {
                            setLocalidad_responsable(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="text" className="form-control form-pat" id="inputMunFR" placeholder="Municipio" onChange={(e) => {
                            setMunicipio_responsable(e.target.value);
                        }} />
                    </div>
                    <div className="form-group col-md-2">
                    <input className="form-control form-pat"id="inputCPFR" placeholder="C.P." onChange={(e) => {
                        setCp_responsable(e.target.value);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel1FR" placeholder="Telefóno (1)" onChange={(e) => {
                        setTel_responsable(e.target.value);
                    }} />
                    </div>
                    <div className="form-group col-md-4">
                    <input type="text" className="form-control form-pat" id="inputTel2FR" placeholder="Telefóno (2)" onChange={(e) => {
                        setTel2_responsable(e.target.value);
                    }} />
                    </div>
                </div>
                <div>Parentesco</div>
                <div>
                    <input type="text" className="form-control form-pat col-md-4" id="inputParent" placeholder="Parentesco" onChange={(e) => {
                        setParentesco_responsable(e.target.value);
                    }} />
                </div>
                <div>
                    <button onClick={handleSubmit} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
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
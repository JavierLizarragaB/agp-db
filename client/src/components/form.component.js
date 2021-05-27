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
                setOpen(false);
            } else {
                setMessage("Ha sucedido algo :(");
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
                <br></br><br></br>

                {/* inicio de tercera iteración */}
                <b><div>PIEL</div></b>
                <i><div>CAMBIOS EN LA COLORACIÓN</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">PALIDEZ</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ERUPCIONES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">MANCHAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <br></br><br></br>

                <div className="form-row">
                    <div className="form-group col-md-4">PRURITO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">SEQUEDAD</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">AUMENTOS DE VOLUMEN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS DE PELO Y UÑAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">NODULOS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>


                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                            setParentesco_responsable(e.target.value);
                        }} />
                    </div>
                <br></br><br></br>

                <b><div>SISTEMA OFTAMOLÓGICO</div></b>
                <i><div>CAMBIOS EN LA VISIÓN</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">DIOPLÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR OCULAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">MANCHAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">FOTOFOBIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">SEQUEDAD</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">AMAUROSIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">FOTOPSIAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">MIODESOPSIAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <br></br><br></br>
                <i><div>USO DE LENTES</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">MIOPÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ASTIGMATISMO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>


                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                            setParentesco_responsable(e.target.value);
                        }} />
                    </div>
                <br></br><br></br>

                <b><div>SISTEMA OTORRINOLARINGÓLOGO</div></b>
                <i><div>CAMBIOS EN LA AUDICIÓN</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">OTALGÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ALGIACUSIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">PRESBIACUSIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ANACUSIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">TINNITUS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ACUFENOS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">HIPERCUSIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <br></br><br></br>

                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR DE OÍDO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <i><div>USO DE LENTES</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">VÉRTIGO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">SALIDA DE LÍQUIDO DEL OÍDO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN EL OLFATO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">SALIDA DE LÍQUIDO DE LA NARIZ</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR EN LA NARIZ</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>


                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                            setParentesco_responsable(e.target.value);
                        }} />
                    </div>
                    <br></br><br></br>


                <b><div>BOCA Y GARGANTA</div></b>
                <i><div>DIENTES</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">CARIES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">AGENESIA DENTAL</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PRÓTESIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <i><div>ENCÍAS</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">GINGIVORREA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">GINGIVORRAGIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ULCERACIONES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <i><div>LENGUA</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">COLORACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">TAMAÑO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PRESENCIA DE PLACA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ULCERACIONES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <i><div>PROBLEMAS PARA HABLAR</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">DISFONÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">AFONÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">SED</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR AL COMER O HABLAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">MAL ALIENTO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">EXCESO DE SALIVACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                            setParentesco_responsable(e.target.value);
                        }} />
                    </div>
                    <br></br><br></br>

                    <b><div>APARATO DIGESTIVO</div></b>
                    <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN EL APETITO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">NÁUSEAS O VÓMITO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DISTENSIÓN ABDOMINAL</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <i><div>ESÓFAGO</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">GASTRALCIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ACIDEZ</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">LLENURA POSTRANDIAL</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <i><div>CAMBIOS EN EVACUACIONES</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">TENESMO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PUJOS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ENCOPRESIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR ANAL</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CONSTIPACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">RECTORRAGÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">HEMATOQUECIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                
                <i><div>HÍGADO Y VÍAS BILIARES</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">ICTERCIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PRURITO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">FIEBRE</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ASCITIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CÓLICO BILIAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CÓLICO HEPÁTICO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ACOLIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <i><div>PÁNCREAS</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">ESTEATORREA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DIARREA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">SIALORREA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR DE ABDOMEN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR DE ESPALDA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                            setParentesco_responsable(e.target.value);
                        }} />
                    </div>
                <br></br><br></br>

                <b><div>APARATO RESPIRATORIO</div></b>
                <div className="form-row">
                    <div className="form-group col-md-4">TOS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR TORÁCICO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOHEMOPOTISIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">VÓMICA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CIANOSIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">FÁTIGA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PROBLEMAS PARA RESPIRAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN RESPIRACIÓN A LA DEAMBULACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                            setParentesco_responsable(e.target.value);
                        }} />
                    </div>
                <br></br><br></br>

		        <b><div>APARATO CARDIOVASCULAR</div></b>

                <div className="form-row">
                    <div className="form-group col-md-4">DISNEA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ORTOPNEA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">LIPOTIMIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">SINCOPE</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">EDEMA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CIANOSIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR TORÁCICO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PALPITACIONES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                            setParentesco_responsable(e.target.value);
                        }} />
                    </div>
                <br></br><br></br>

		        <b><div>APARATO GENITOURINARIO</div></b>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS AL MICCIONAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR AL MICCIONAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DIFICULTAD AL MICIONAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN EL CHORRO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ALTERACIONES DE LA MENSTRUACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DSPAREUNIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN EL LIBIDO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                            setParentesco_responsable(e.target.value);
                        }} />
                    </div>
                <br></br><br></br>

		        <b><div>SISTEMA MUSCULO-ESQUELÉTICO</div></b>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR MUSCULAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR ARTICULAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">RGIDEZ ARTICULAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">NÓDULOS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR ÓSEO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN LA DEAMBULACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" onChange={(e) => {
                            setBirth_state(e.target.value);
                        }} />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                            setParentesco_responsable(e.target.value);
                        }} />
                    </div>
                <br></br><br></br>

                {/* boton de enviar */}
                <div>
                    <button onClick={handleSubmit} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
                        <b>Enviar</b>
                    </button>
                </div>

            </form>
            </div>
        </Collapse>




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
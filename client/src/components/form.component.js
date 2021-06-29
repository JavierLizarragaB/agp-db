import React, { Component, useState, useContext, useEffect} from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormContext} from '../context/FormContext'
import moment from 'moment';
import NavBar from './navbar.component';
import Masculino from '../img/male.png';
import Femenino from '../img/female.png';
import SegundaIteracion from "./segunda-iteracion.component";
import TerceraIteracion from './tercera-iteracion.component';
import CuartaIteracion from './cuarta-iteracion.component';
import QuintaIteracion from './quinta-iteracion.component';
import SextaIteracion from './sexta-iteracion.component';
import SeptimaIteracion from './septima-iteracion.component';
import OctavaIteracion from './octava-iteracion.component';
import TablaHorario from "./tablaHorario";
import axios from "axios";


function Form() {
    //para citas
    const [citas, setCitas] = useState([]);

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

    const handleSubmitStudies = (e) => {
        e.preventDefault();
        axios.post("./api/studies", {
            studies: formState.patient_data.studies
        }).then((response) => {
            console.log(response);
            
            if(response.data.message) {
                setMessage(response.data.message);
                setOpen1(false);
            } else {
                setMessage("Ha sucedido algo :(");
            }
        });
    };

    const handleSubmitMedicine = (e) => {
        e.preventDefault();
        axios.post("./api/medicine", {
            medicine: formState.patient_data.medicine
        }).then((response) => {
            console.log(response);
            
            if(response.data.message) {
                setMessage(response.data.message);
                setOpen2(false);
            } else {
                setMessage("Ha sucedido algo :(");
            }
        });
    };

    const handelSubmitAppointment = (e) => {
        e.preventDefault();
        var appointments_json = {
            appointments: formState.patient_data.appointments,
            appointments_time: formState.patient_data.appointments_time,
            appointment_description: formState.patient_data.appointment_description,
            patient_folio: formState.patient_data.folio,
        }
        console.log(appointments_json)
        axios.post("./api/appointments", 
            appointments_json
        ).then((response) => {
            console.log(response);

            if(response.data.message) {
                setMessage(response.data.message);
                setOpen2(false);
            } else {
                setMessage("Ha sucedido algo :o");
            }
        });
    };
    
    const getCitas = () => {
        axios.get('./api/citas').then((response) => {
            setCitas(response.data);
            console.log(response.data);
        });
    };

    useEffect(() => {
        getCitas();
    }, []);

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

        <div className="info-pat">
            <div className="col-md-12 row">
                    <div className="col-lg-4">
                        <img width="250px" src={icon} />
                    </div>
                    <div className="col-lg-3">
                        <div className="patient-text-br"> {jsonpaciente.nombre} </div>
                        <div className="patient-text">Nacimiento: {jsonpaciente.fecha_nacimiento} - Años: {jsonpaciente.edad}</div>
                        <br></br>
                        <div className="patient-text-br">Sangre:</div>
                        <div className="patient-text">{jsonpaciente.sangre}</div>
                        <br></br>
                        <div className="patient-text-br">Contacto de Emergencia:</div>
                        <div className="patient-text">{jsonpaciente.contacto_emergencia_num} - {jsonpaciente.contacto_emergencia_nombre}</div>
                        <br></br>
                        <div className="patient-text-br">Acude con Acompañante:</div>
                        <div className="form-row">
                            
                            <div className="patient-text-br">Sí</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={companion}/>
                            </div>
                            &ensp;&ensp;
                            <div className="patient-text-br">No</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={!companion}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="patient-text-br">DX MÉDICO</div>
                        <div className="box">&ensp;{jsonpaciente.dx_medico}</div>
                        
                        <br></br>
                        <div className="patient-text-br">Albergue:</div>
                        <div className="form-row">
                            <div className="patient-text-br">Sí</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={albergue}/>
                            </div>
                            &ensp;&ensp;
                            <div className="patient-text-br">No</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={!albergue}/>
                            </div>
                        </div>
                        <br></br>
                        <div className="patient-text-br">Quimioterapia:</div>
                        <div className="form-row">
                            <div className="patient-text-br">Sí</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={quimio}/>
                            </div>
                            &ensp;&ensp;
                            <div className="patient-text-br">No</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" checked={!quimio}/>
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
            DATOS DEL PACIENTE
        </div>
        <Collapse in={open}>
            <div id="info-collapse-text" className="info-text">

                    <div
                    onClick={() => setOpen4(!open4)}
                    aria-controls="form1"
                    aria-expanded={open4}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    INFORMACIÓN GENERAL
                    </div>
                    <Collapse in={open4}>
                        <div id="form1" className="formulario">

                            <form className="info-form form-text-supra col-md-12">
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputEN" placeholder="Entidad de Nacimiento" onChange={(e) => {
                                            updateFormState("patient_data", "birth_state",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCN" placeholder="Ciudad de Nacimiento" onChange={(e) => {
                                            updateFormState("patient_data", "birth_city",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                </div>
                                <div>Domicilio Permanente</div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCDP" placeholder="Calle" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_street",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNDP" placeholder="Número" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_num",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputColDP" placeholder="Colonia" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_suburb",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputLocalDP" placeholder="Localidad" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_locality",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputMunDP" placeholder="Municipio" onChange={(e) => {
                                            updateFormState("patient_data", "permanent_municipality",e.target.value);
                                            console.log(formState);
                                        }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                    <input className="form-control form-pat" id="inputCPDP" placeholder="C.P." onChange={(e) => {
                                        updateFormState("patient_data", "permanent_zip_code",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel1DP" placeholder="Telefóno (1)" onChange={(e) => {
                                        updateFormState("patient_data", "permanent_phone",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel2DP" placeholder="Telefóno (2)" onChange={(e) => {
                                        updateFormState("patient_data", "permanent_phone2",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                <br />
                                
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" placeholder="Correo Electrónico" onChange={(e) => {
                                        updateFormState("patient_data", "email",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input type="text" className="form-control form-pat" placeholder="Ingresos" onChange={(e) => {
                                        updateFormState("patient_data", "income",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" placeholder="Servicio Médico" onChange={(e) => {
                                        updateFormState("patient_data", "medical_service",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" placeholder="Escolaridad" onChange={(e) => {
                                        updateFormState("patient_data", "scholarship",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" placeholder="Ocupación" onChange={(e) => {
                                        updateFormState("patient_data", "ocupation",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" placeholder="Religión" onChange={(e) => {
                                        updateFormState("patient_data", "religion",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <input type="text" className="form-control form-pat" placeholder="Estado Civil" onChange={(e) => {
                                        updateFormState("patient_data", "civil_state",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group col-md-3">Realización Historial Clínico</div>
                                    <div className="form-group col-md-2">
                                        <input type="date" className="form-control form-pat" onChange={(e) => {
                                        updateFormState("patient_data", "clinic_record_date",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                
                                <div>Domicilio Temporal</div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCalle" placeholder="Calle" onChange={(e) => {
                                        updateFormState("patient_data", "temp_street",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNum" placeholder="Número" onChange={(e) => {
                                        updateFormState("patient_data", "temp_num",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCol" placeholder="Colonia" onChange={(e) => {
                                        updateFormState("patient_data", "temp_suburb",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputLocal" placeholder="Localidad" onChange={(e) => {
                                        updateFormState("patient_data", "temp_locality",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputMun" placeholder="Municipio" onChange={(e) => {
                                        updateFormState("patient_data", "temp_municipality",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                        <input className="form-control form-pat" id="inputCP" placeholder="C.P." onChange={(e) => {
                                        updateFormState("patient_data", "temp_zip_code",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputTel1" placeholder="Telefóno (1)" onChange={(e) => {
                                        updateFormState("patient_data", "temp_phone",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel2" placeholder="Telefóno (2)" onChange={(e) => {
                                        updateFormState("patient_data", "temp_phone2",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                
                                <div>Familia Responsable</div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputCalleFR" placeholder="Calle" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_street",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputNumFR" placeholder="Número" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_num",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputColFR" placeholder="Colonia" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_suburb",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputLocalFR" placeholder="Localidad" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_locality",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <input type="text" className="form-control form-pat" id="inputMunFR" placeholder="Municipio" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_municipality",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-2">
                                    <input className="form-control form-pat"id="inputCPFR" placeholder="C.P." onChange={(e) => {
                                        updateFormState("patient_data", "responsable_zip_code",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel1FR" placeholder="Telefóno (1)" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_phone",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                    <div className="form-group col-md-4">
                                    <input type="text" className="form-control form-pat" id="inputTel2FR" placeholder="Telefóno (2)" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_phone2",e.target.value);
                                        console.log(formState);
                                    }} />
                                    </div>
                                </div>
                                <div>Parentesco</div>
                                <div>
                                    <input type="text" className="form-control form-pat col-md-4" id="inputParent" placeholder="Parentesco" onChange={(e) => {
                                        updateFormState("patient_data", "responsable_relationship",e.target.value);
                                        console.log(formState);
                                    }} />
                                </div>
                            </form>
                            <br/>
                        </div>
                    </Collapse>

                
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
                        <b>Guardar Datos de Paciente</b>
                    </button>
                </div>
            </div>
        </Collapse>
        
        {/* Cajas de texto BACKEND CONECTARLAS */}
        <div
        onClick={() => setOpen1(!open1)}
        aria-controls="est-collapse-text"
        aria-expanded={open1}
        className="col-md-10 btn-text btn btn-custom2 text-left"
        >
            ESTUDIOS
        </div>
        <Collapse in={open1}>
        <div id="est-collapse-text">
            <div className="col-md-6"/>
                <div className="form-group col-md-12 info-text">
                    <textarea className="form-control form-pat" rows="6"
                    onChange={(e) => {updateFormState("patient_data", "studies", e.target.value);}} 
                    ></textarea>
                    {/* boton de enviar */}
                    <div>
                        <button onClick={handleSubmitStudies} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
                            <b>Guardar Estudios</b>
                        </button>
                    </div>
                </div>
            </div>
        </Collapse>

        <div
        onClick={() => setOpen2(!open2)}
        aria-controls="med-collapse-text"
        aria-expanded={open2}
        className="col-md-10 btn-text btn btn-custom2 text-left"
        >
            MEDICAMENTOS
        </div>
        <Collapse in={open2}>
        <div id="med-collapse-text">
            <div className="col-md-6"/>
                <div className="form-group col-md-12 info-text">
                    <textarea className="form-control form-pat" rows="6"
                    onChange={(e) => {updateFormState("patient_data", "medicine",e.target.value);}} 
                    ></textarea>
                    {/* boton de enviar */}
                    <div>
                        <button onClick={handleSubmitMedicine} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
                            <b>Guardar Medicamentos</b>
                        </button>
                    </div>
                </div>
            </div>
        </Collapse>

        <div
        onClick={() => setOpen3(!open3)}
        aria-controls="cit-collapse-text"
        aria-expanded={open3}
        className="col-md-10 btn-text btn btn-custom2 text-left"
        >
            CITAS
        </div>
        <Collapse in={open3}>
        <div id="cit-collapse-text">
            <div className="col-md-6"/>
                <div className="form-group col-md-12 info-text">
                    
                    <p className="cita-text">Selecciona aquí la fecha para tu cita: </p>
                        <div className="form-group col-md-4" >
                                    
                                    <input style={{textAlign: "center"}} type="date" className="form-control form-pat" onChange={(e) => {
                                    updateFormState("patient_data", "appointments",e.target.value);
                                    console.log(formState);
                                    }} />
                                    
                                </div>
                    <p className="cita-text">Selecciona aquí la hora para tu cita: </p>
                        <div className="form-group col-md-4" >
                                    
                                    <input style={{textAlign: "center"}} type="time" className="form-control form-pat" onChange={(e) => {
                                    updateFormState("patient_data", "appointments_time",e.target.value);
                                    console.log(formState);
                                    }} />
                                    
                                </div>
                    <p className="cita-text">Ingresa aquí la descripción de la cita: </p>
                    <div className="col-md-12 row">
                            
                            
                        
                            <textarea className="form-control col-md-6 form-pat" rows="4"
                                onChange={(e) => {updateFormState("patient_data", "appointment_description",e.target.value);console.log(formState);}} 
                            ></textarea>
                            <div className="horario col-md-4">
                                {/* <TablaHorario/> */}
                                <table className="table table-hover">
                                    <th className="thead-custom">
                                        Agenda
                                    </th>
                                    <tbody>
                                        <table className="table table-hover">
                                            <thead className="thead-custom">
                                                <tr>
                                                    <th>Fecha</th>
                                                    <th>Hora</th>
                                                    <th>Descripción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {citas.map((citas) => (
                                                    <tr key={citas._id.$_oid}>
                                                        <td>
                                                            {moment.unix(citas.fecha.$date/999.95).format("MM/DD/YYYY")}
                                                        </td>
                                                        <td>
                                                            {citas.hora} 
                                                        </td>
                                                        <td>
                                                            {citas.descripcion}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </tbody>
                                </table>
                                
                            </div>
                            
                        <br></br><br></br>
                    </div>
                    <div>
                        {/* boton de enviar */}
                    <div>
                        <button onClick={handelSubmitAppointment} className="btn btn-custom btn-md btn-block col-md-2 btn-pat">
                            <b>Guardar Cita</b>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
                
        </Collapse>
        </> 
    );
}

export default Form;
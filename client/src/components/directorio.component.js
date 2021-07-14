import React, { Component, useState, useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar.component';
import Axios from 'axios';
import { Redirect, useHistory } from "react-router";
import { Link } from 'react-router-dom';
import {FormContext} from '../context/FormContext'

export const Directorio = () => {

    const defaultName = "Ultimos Pacientes Agregados";    
    const [tableName, setTableName] = useState(defaultName);
    const [busquedaHecha, setBusquedaHecha] = useState(false);
    const [message, setMessage] = useState("");
    const [patients, setPatients] = useState([]);
    let history = useHistory();

    // Load context
    const {setPatientFolio, resetFormState} = useContext(FormContext);
    
    const getPatients = () => {
        Axios.get('./api/directorio').then((response) => {
            setPatients(response.data);
        });
    };

    useEffect(() => {
        getPatients();
        resetFormState();
    }, []);

    const enterPatient = (e) => {
        if (e.key === 'Enter') {
            setBusquedaHecha(true);
            Axios.get('./api/buscar-paciente', {params: {patientName: e.target.value}}).then((response) => {
                if (response.data.message) {
                    setMessage(response.data.message);
                } else {
                    setPatients(response.data);
                    setMessage("");
                    setTableName("Resultados de Búsqueda");
                }
            });
        }
    };

        return (
        <>
            <div>
                <NavBar />

                <p className="alertita-en-rojo">{message}</p>

                <div className="col-lg-12 text-center mt-5">
                    <div className="col-md-4 offset-md-4 mt-5 pt-3">
                            <div className="input-group mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Buscar Paciente" 
                                    aria-label="Nombre del Paciente"
                                    onKeyPress={enterPatient}
                                />
                            </div>
                    </div>
                </div>

                <div className="col-md-12">
                    {busquedaHecha &&
                    <div className="col-md-12">
                        <Link className="btn-dir-alt" onClick={() => {
                            setBusquedaHecha(false);
                            getPatients();
                            setMessage("");
                            setTableName(defaultName);
                            }}>LIMPIAR BÚSQUEDA</Link>
                    </div>}
                </div>
                <br />
                
                <div className="col-md-12">
                    <Link className="btn-dir" onClick={()=>{history.push('/crear-paciente');}}>REGISTRAR NUEVO PACIENTE</Link>
                </div>

                <br />
                <br />

                <div className="col-md-12">
                <div className="col-md-8 cont-dir">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-custom">
                            <tr>
                                <th>{tableName}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr className="simplehover" key={patient._id.$_oid} onClick={()=>{
                                        setPatientFolio(patient._id);
                                        history.push('/historial-formulario');
                                        }}>
                                    <td>
                                        {patient.nombre} 
                                        &nbsp;
                                        {patient.apellido_paterno} 
                                        &nbsp;
                                        {patient.apellido_materno}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </>
        );
};

export default Directorio;
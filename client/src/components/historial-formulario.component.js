import React, { Component, useState, useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar.component';
import Axios from 'axios';
import { Redirect, useHistory } from "react-router";
import { Link } from 'react-router-dom';

import {FormContext} from '../context/FormContext'

export const HistorialFormulario = () => {

    //Context
    const {formState} = useContext(FormContext);

    //Page history
    const [formHistory, setFormHistory] = useState([]);
    let history = useHistory();

    //Current state
    const initial_state = {
        tableTitle: "El paciente aún no tiene datos guardados",
        hasForms: false
    }
    const [state, setState] = useState(initial_state);

    const getFormHistory = () => {
        Axios.get('./api/historial-formulario/'+formState.patient_folio).then((response) => {
            var versions = response.data
            if(versions.length > 0) {
                setState({
                    tableTitle: "Historial de formularios",
                    hasForms: true
                });
                setFormHistory(response.data);
            }
        });
    };

    useEffect(() => {
        getFormHistory();
    }, []);

        return (
        <>
            <div>
                <NavBar />

                <div className="col-md-12">
                <div className="col-md-8 cont-dir">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-custom">
                            <tr>
                                <th>{state.tableTitle}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formHistory.map((version) => (
                                <tr>
                                    <td>
                                        Fecha de modificación:
                                        &nbsp;
                                        {version.fecha_formulario}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            
            {!state.hasForms ?
                <div className="col-md-12">
                    <Link className="btn-dir" onClick={()=>{history.push('/datos-paciente');}}>CREAR FORMULARIO</Link>
                </div> : ''}
        </>
        );
};

export default HistorialFormulario;
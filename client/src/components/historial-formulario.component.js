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

    const [formHistory, setFormHistory] = useState([]);
    let history = useHistory();

    const getFormHistory = () => {
        Axios.get('./api/historial-formulario/'+formState.patient_folio).then((response) => {
            setFormHistory(response.data);
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
                                <th>Historial de formularios</th>
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
        </>
        );
};

export default HistorialFormulario;
import React, { Component, useState, useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar.component';
import Axios from 'axios';
import { Redirect, useHistory } from "react-router";
import { Link } from 'react-router-dom';

export const Directorio = () => {

    const [patients, setPatients] = useState([]);
    let history = useHistory();

    const getPatients = () => {
        Axios.get('./api/directorio').then((response) => {
            setPatients(response.data);
        });
    };

    useEffect(() => {
        getPatients();
    }, []);

        return (
        <>
            <div>
                <NavBar />
                <div className="col-lg-12 text-center mt-5 row">
                    <div className="col-md-4 offset-md-4 mt-5 pt-3">
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Buscar Paciente" aria-label="Nombre del Paciente" />
                        </div>
                    </div>
                </div>
                
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
                                <th>Pacientes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient) => (
                                <tr key={patient._id.$_oid}>
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
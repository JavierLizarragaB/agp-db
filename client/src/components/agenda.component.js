import React, { Component, useState, useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import moment from 'moment';

export const Agenda = () => {
    //para citas
    const [citas, setCitas] = useState([]);

    const getCitas = () => {
        axios.get('./api/citas').then((response) => {
            setCitas(response.data);
            console.log(response.data);
        });
    };

    useEffect(() => {
        getCitas();
    }, []);

    return(
        <>
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
        </>
    );
};

export default Agenda;
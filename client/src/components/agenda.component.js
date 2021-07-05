import React, { Component, useState, useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import moment from 'moment';

export const Agenda = (filter, filter_type) => {
    //para citas
    const [citas, setCitas] = useState([]);

    const getCitas = () => {
        
        if (filter_type=="folio") {    
            axios.get('./api/citas_paciente/' + filter ).then((response) => {
                setCitas(response.data);
                console.log(response.data);
            });
        } else if (filter_type=="fecha") {
            axios.get('./api/citas_dia/' + filter ).then((response) => {
                setCitas(response.data);
                console.log(response.data);
            });
        } else {
            console.log('filter');
            console.log(filter);
            console.log(filter_type);
        }
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
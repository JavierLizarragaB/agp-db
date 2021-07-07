import React, { Component, useState, useContext, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import moment from 'moment';
import NavBar from "../navbar.component";
import Carrusel from "../carrusel.component";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


export const PagInicio = () => {

    const [date, setDate] = useState(new Date());
    const [fecha, setFecha] = useState(moment(date).format('YYYY-MM-DD'));
    const [citas, setCitas] = useState([]);
    const[mensajeTablaVacia, setMensajeTablaVacia] = useState(new Boolean);

    const onChange = date => {
        setDate(date);
        setFecha(moment(date).format('YYYY-MM-DD'));
    };

    const getCitas = () => {
        
        axios.get('./api/citas_dia/' + fecha ).then((response) => {
            if (response.data.message){
                setMensajeTablaVacia(true);
            } else {
                setMensajeTablaVacia(false);
                setCitas(response.data);
            }
        });
    };

    useEffect(() => {
        getCitas();
    }, [date]);

    if(mensajeTablaVacia == false){
    return (
        <div>
            <NavBar/>
            <div/>
            <Carrusel/>
            <br />
            <div className="row col-md-12">
                <div className="col-md-2" />
                <div className="calendario col-md-4">
                    <Calendar onChange={onChange} value={date} />
                </div>
                <div className=" col-md-4">
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
                </div>
            </div>
        </div>
    )}else{
        return (
            <div>
                <NavBar/>
                <div/>
                <Carrusel/>
                <br />
                <div className="row col-md-12">
                    <div className="col-md-2" />
                    <div className="calendario col-md-4">
                        <Calendar onChange={onChange} value={date} />
                    </div>
                    <div className=" col-md-4">
                    <>
                        <table className="table table-hover">
                            <th className="thead-custom">
                                Agenda
                                </th>
                                <tbody>
                                <table className="table table-hover">
                                    <thead className="thead-custom">
                                        <tr>
                                            <th>No hay citas programadas este día</th>
                                        </tr>
                                    </thead>
                                </table>
                            </tbody>
                        </table>
                    </>
                    </div>
                </div>
            </div>
        )}
};
export default PagInicio;
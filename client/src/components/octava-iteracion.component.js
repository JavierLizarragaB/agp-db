import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FormContext} from '../context/FormContext';

class OctavaIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open: false,
        };
    }
    render() {
        const mycontext = this.context;

        return (
            <>
                <div
                    onClick={() => this.setState({open: !(this.state.open)})}
                    aria-controls="form1"
                    aria-expanded={this.state.open}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    OTROS
                </div>
                <Collapse in={this.state.open}>
                    <div id="form1" className="formulario">
                        <br/>
                        <div className="form-row col-md-12">
                            <div className="form-text col-md-4">¿Cómo se enteró de la Agrupación George Papanicolau?</div>
                            <div className="col-md-1" />
                            <div className="col-md-3">Familiares y/o Amigos</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-1">Institución</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <div className="form-row col-md-12">
                            <div className="col-md-5" />
                            <div className="col-md-3">Medios de comunicación</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-1">Otro</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-4">¿Ha solicitado apoyo antes?</div>
                            <div className="col-md-2"/>
                            <div>Si</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1" />
                            <div>No</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6" />
                            <div className="col-md-2">¿De qué tipo?</div>
                            <div className="form-group col-md-2">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    mycontext.updateOthers("notes_support_background",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-4">Observaciones:</div>
                            <div className="form-group col-md-8">
                                <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                    mycontext.updateOthers("observations",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-4">Plan Social:</div>
                            <div className="form-group col-md-8">
                                <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                    mycontext.updateOthers("social_plan",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="col-md-7" />
                            <div className="form-text col-md-5">Tabla de Clasificación</div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-4">Clasificación Socioeconómica</div>
                            <table className="table table-borderless table-custom">
                                <thead>
                                    <tr>
                                        <th className="centable">3</th>
                                        <th />
                                        <th className="centable">2</th>
                                        <th />
                                        <th className="centable">1</th>
                                    </tr>
                                </thead>
                                <tbody className="table-custom-two">
                                    <tr className="table-custom-two">
                                        <input type="number" className="form-control form-pat col-md-12" placeholder="$" />
                                        <td />
                                        <input type="number" className="form-control form-pat col-md-12" placeholder="$" />
                                        <td />
                                        <input type="number" className="form-control form-pat col-md-12" placeholder="$" />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-4">Trabajador Social:</div>
                            <div className="form group col-md-8">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    mycontext.updateOthers("social_worker",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-4">Animales Dentro o Fuera de la Casa:</div>
                            <div className="form group col-md-4">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    mycontext.updateOthers("animals",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="col-md-1" />
                            <div className="col-md-1">Vacunados</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Garrapatas</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="">Enfermedades Transmitidas por Animales</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />
                        <br />

                        <div className="form-row col-md-12">
                            <div className="col-md-4 form-text">Cartilla de Vacunación:</div>
                            <div className="form-group col-md-8">
                                <textarea className="form-control form-pat" rows="5" onChange={(e) => {
                                    mycontext.updateOthers("vaccination_card",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </>
        )
    }
}

OctavaIteracion.contextType = FormContext;

export default OctavaIteracion;
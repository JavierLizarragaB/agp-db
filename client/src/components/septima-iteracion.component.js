import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FormContext} from '../context/FormContext';

class SeptimaIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open1: false,
	        open2: false,
            open3: false
        };
    }
    render() {
        const mycontext = this.context;

        return (
            <>
                <div
                    onClick={() => this.setState({open1: !(this.state.open1)})}
                    aria-controls="form1"
                    aria-expanded={this.state.open1}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    HIGIENE
                </div>
                <Collapse in={this.state.open1}>
                    <div id="form1" className="formulario">
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-3">¿Cuántas veces a la semana se baña?</div>
                            <div className="col-md-1"/>
                            <div className="form-group col-md-8">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    mycontext.updateFormState("hygiene_pass_physact","shower_frequency",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-3">¿Cuántas veces se cepilla los dientes?</div>
                            <div className="col-md-1"/>
                            <div className="form-group col-md-8">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    mycontext.updateFormState("hygiene_pass_physact","toothbrushing_frequency",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-3">Higiene del Hogar:</div>
                            <div className="col-md-1"/>
                            <div className="form-group col-md-8">
                                <textarea className="form-control form-pat" rows="4" onChange={(e) => {
                                    mycontext.updateFormState("hygiene_pass_physact","home_hygiene",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />
                    </div>
                </Collapse>

                <div
                    onClick={() => this.setState({open2: !(this.state.open2)})}
                    aria-controls="form2"
                    aria-expanded={this.state.open2}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    ACTIVIDAD FÍSICA
                </div>
                <Collapse in={this.state.open2}>
                    <div id="form2" className="formulario">
                        <div className="form-row col-md-12">
                            <div className="form-text col-md-3">Actividad Física</div>
                            <div className="col-md-1"/>
                            <div className="form-group col-md-8">
                                <textarea className="form-control form-pat" rows="6" onChange={(e) => {
                                    mycontext.updateFormState("hygiene_pass_physact","phys_activity",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />
                    </div>
                </Collapse>

                <div
                    onClick={() => this.setState({open3: !(this.state.open3)})}
                    aria-controls="form3"
                    aria-expanded={this.state.open3}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    PASATIEMPO
                </div>
                <Collapse in={this.state.open3}>
                    <div id="form3" className="formulario">
                        <div className="form-row col-md-12">
                            <div className="form-text col-md-3">Pasatiempo</div>
                            <div className="col-md-1"/>
                            <div className="form-group col-md-8">
                                <textarea className="form-control form-pat" rows="6" onChange={(e) => {
                                    mycontext.updateFormState("hygiene_pass_physact","passtime",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                    </div>
             </Collapse>
            </>
        )
    }
}

SeptimaIteracion.contextType = FormContext;

export default SeptimaIteracion;
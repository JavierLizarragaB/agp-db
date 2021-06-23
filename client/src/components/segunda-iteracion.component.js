import React, { Component} from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FormContext} from '../context/FormContext';




class SegundaIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open: false     
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
                    ANTECEDENTES PERSONALES PATOLÓGICOS
                </div>
                <Collapse in={this.state.open}>
                    <div id="form1" className="formulario">
                    
                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Enfermedades cronicodegenrativas (Enfermedad, Tiempo desde el diagnóstico, Tratamiento, Complicaciones, Apego al Tratamiento)
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="5" onChange={(e) => {
                                mycontext.updateFormState("patient_data","diseases_chronicdeg",e.target.value);
                                console.log(mycontext.formState);
                            }} ></textarea>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Enfermedades Infectocontagiosas
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="3"></textarea>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Cirugías
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat"></input>
                            <input type="checkbox" className="form-control form-pat"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-text">Especificar:</div>
                            <textarea className="form-control form-pat" rows="4" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Carcel
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat"></input>
                            <input type="checkbox" className="form-control form-pat"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Transfusiones Sanguíneas
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat"></input>
                            <input type="checkbox" className="form-control form-pat"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Alergias
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat"></input>
                            <input type="checkbox" className="form-control form-pat"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Traumatismo
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat"></input>
                            <input type="checkbox" className="form-control form-pat"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-text">Especificar:</div>
                            <textarea className="form-control form-pat" rows="4" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Alcoholismo
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat"></input>
                            <input type="checkbox" className="form-control form-pat"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-text">Edad de Inicio:</div>
                            <textarea className="form-control form-pat" rows="1" />

                            <div className="form-text">Cantidad:</div>
                            <textarea className="form-control form-pat" rows="1" />

                            <div className="form-text">Frecuencia:</div>
                            <textarea className="form-control form-pat" rows="3" />

                            <div className="form-text">Último consumo:</div>
                            <textarea className="form-control form-pat" rows="1" />
                        </div>

                    </div>

                    <div className="form-row">
                        
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Tabaquismo
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat"></input>
                            <input type="checkbox" className="form-control form-pat"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-text">Edad de Inicio:</div>
                            <textarea className="form-control form-pat" rows="1" />

                            <div className="form-text">Cantidad:</div>
                            <textarea className="form-control form-pat" rows="1" />

                            <div className="form-text">Frecuencia:</div>
                            <textarea className="form-control form-pat" rows="3" />

                            <div className="form-text">Último consumo:</div>
                            <textarea className="form-control form-pat" rows="1" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4 form-text">
                            Toxicomanías
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat"></input>
                            <input type="checkbox" className="form-control form-pat"></input>
                        </div>

                        <div className="form-group col-md-6">
                            <div className="form-text">Edad de Inicio:</div>
                            <textarea className="form-control form-pat" rows="1" />

                            <div className="form-text">Cantidad:</div>
                            <textarea className="form-control form-pat" rows="1" />

                            <div className="form-text">Frecuencia:</div>
                            <textarea className="form-control form-pat" rows="3" />

                            <div className="form-text">Último consumo:</div>
                            <textarea className="form-control form-pat" rows="1" />
                        </div>
                    </div>

                    <div className="form-subtitle">En caso de ser hombre:</div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div>Inicio de vida sexual</div>
                        </div>
                        <div className="form-group col-md-3">
                            <textarea className="form-control form-pat" rows="1" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div>Número de parejas sexuales</div>
                        </div>
                        <div className="form-group col-md-4">
                            <textarea className="form-control form-pat" rows="1" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div>Enfermedades de transmisión sexual</div>
                        </div>
                        <div className="form-group col-md-5">
                            <textarea className="form-control form-pat" rows="3" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <div>Métodos anticonceptivos</div>
                        </div>
                        <div className="form-group col-md-5">
                            <textarea className="form-control form-pat" rows="3" />
                        </div>
                    </div>

                    <div className="form-subtitle">En caso de ser mujer, antecedentes ginecobstétricos:</div>
                    <div className="form-row">
                        <div className="form-group col-md-1">Menarca</div>
                        <div className="form-group col-md-2">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div className="form-group col-md-1">Edad</div>
                        <div className="form-group col-md-1">
                            <textarea className="form-control form-pat" rows="1" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-1">Ritmo</div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="3" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">Edad de Inicio de Vida Sexual</div>
                        <div className="form-group col-md-1">
                            <textarea className="form-control form-pat" rows="1" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">Parejas de Alto Riesgo</div>
                        <div>Si</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>No</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Enfermedades de Transmisión Sexual</div>
                        <div className="form-group col-md-5">
                            <textarea className="form-control form-pat" rows="3" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Gestas</div>
                        <div>1</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>2</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>3</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>4+</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>N/A</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Partos</div>
                        <div>1</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>2</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>3</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>4+</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>N/A</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Cesáreas</div>
                        <div>1</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>2</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>3</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>4+</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>N/A</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Abortos</div>
                        <div>1</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>2</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>3</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>4+</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>N/A</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Fecha del último parto</div>
                        <div className="form-group col-md-2">
                            <input type="date" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Edad del primer embarazo</div>
                        <div className="form-group col-md-1">
                            <input type="text" className="form-control form-pat" rows="1" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Métodos de planificación familiar</div>
                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="1" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Fecha de última regla</div>
                        <div className="form-group col-md-2">
                            <input type="date" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Menopausia</div>
                        <div>Si</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>No</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Antecedentes de Terapia de Reemplazo Hormonal</div>
                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Lactancia Materna</div>
                        <div>Si</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>No</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Fecha del último papanicolau</div>
                        <div className="form-group col-md-2">
                            <input type="date" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Resultados de último papanicolau</div>
                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Fecha de prueba de híbridos</div>
                        <div className="form-group col-md-2">
                            <input type="date" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Resultado de prueba de híbridos</div>
                        <div>Positivo</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                        <div>Negativo</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Fecha de última mamografía</div>
                        <div className="form-group col-md-2">
                            <input type="date" className="form-control form-pat" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">Resultados de última mamografía</div>
                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="4" />
                        </div>
                    </div>
                </div>
                </Collapse>
            </>
        )
    }
}

SegundaIteracion.contextType = FormContext;

export default SegundaIteracion;
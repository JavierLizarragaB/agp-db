import React, { Component, useState, useContext } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormContext} from '../context/FormContext';



class CuartaIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open1: false,
            open2: false,
            open3: false,
            open4: false
        };
    }

    render() {
        const myContext = this.context;

        return (
        <>
            <div
                onClick={() => this.setState({open1: !(this.state.open1)})}
                aria-controls="form1"
                aria-expanded={this.state.open1}
                className="col-md-12 btn-text active btn btn-custom2 text-left">
                ESTRUCTURA FAMILIAR
            </div>
            <Collapse in={this.state.open1}>
                <div id="form1" className="formulario">

                    <table className="table table-hover ">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Edad</th>
                                <th>Parentesco</th>
                                <th>Estado Civil</th>
                                <th>Ocupación</th>
                                <th>Ingresos</th>
                            </tr>
                        </thead>
                        <tbody className="table-custom-two">
                            <tr className="table-custom-two">
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "first_member_name",e.target.value);
                                    console.log(myContext.formState);
                                }} /></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "first_member_age",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "first_member_relationship",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "first_member_civil_state",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "first_member_ocupation",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "first_member_income",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                            </tr>
                            <tr>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "second_member_name",e.target.value);
                                    console.log(myContext.formState);
                                }} /></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "second_member_age",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "second_member_relationship",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "second_member_civil_state",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "second_member_ocupation",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "second_member_income",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                            </tr>
                            <tr className="table-custom-two">
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "third_member_name",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "third_member_age",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "third_member_relationship",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "third_member_civil_state",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "third_member_ocupation",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "third_member_income",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                            </tr>
                            <tr>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fourth_member_name",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fourth_member_age",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fourth_member_relationship",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fourth_member_civil_state",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fourth_member_ocupation",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fourth_member_income",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                            </tr>
                            <tr className="table-custom-two">
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fifth_member_name",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fifth_member_age",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fifth_member_relationship",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fifth_member_civil_state",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fifth_member_ocupation",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "fifth_member_income",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                            </tr>
                            <tr>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "sixth_member_name",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "sixth_member_age",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "sixth_member_relationship",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "sixth_member_civil_state",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "sixth_member_ocupation",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td><input type="text" className="form-control table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "sixth_member_income",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                            </tr>
                            <tr className="table-custom-two">
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "seventh_member_name",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "seventh_member_age",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "seventh_member_relationship",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "seventh_member_civil_state",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "seventh_member_ocupation",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                                <td className="td-input"><input type="text" className="form-control form-pat table-input" onChange={(e) => {
                                    myContext.updateFormState("family_data", "seventh_member_income",e.target.value);
                                    console.log(myContext.formState);
                                }}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Collapse>
            <div
                onClick={() => this.setState({open2: !(this.state.open2)})}
                aria-controls="form2"
                aria-expanded={this.state.open2}
                className="col-md-12 btn-text active btn btn-custom2 text-left">
                ANTECEDENTES FAMILIARES
            </div>
            <Collapse in={this.state.open2}>
                <div id="form2" className="formulario">
                    <br />
                    <div className="form-text">Abuelo Paterno</div>
                    <div className="form-row">
                            <div className="col-md-1">Vivo</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="true" onChange={(e) => {
                                    myContext.updateFormState("family_data", "paternal_grandfather_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Finado</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="false" onChange={(e) => {
                                    myContext.updateFormState("family_data", "paternal_grandfather_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-2">Enfermedades</div>
                            <div className="form-group col-md-6">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    myContext.updateFormState("family_data", "paternal_grandfather_diseases", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">Causa de Defunción</div>
                        <div className="form-group col-md-10">
                            <textarea className="form-control form-pat" rows="3"  onChange={(e) => {
                                    myContext.updateFormState("family_data", "paternal_grandfather_cause_of_death", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>

                    <div className="form-text">Abuela Paterna</div>
                    <div className="form-row">
                            <div className="col-md-1">Vivo</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat"  value="true" onChange={(e) => {
                                    myContext.updateFormState("family_data", "paternal_grandmother_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Finado</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat"  value="false" onChange={(e) => {
                                    myContext.updateFormState("family_data", "paternal_grandmother_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-2">Enfermedades</div>
                            <div className="form-group col-md-6">
                                <textarea className="form-control form-pat" rows="1"  onChange={(e) => {
                                    myContext.updateFormState("family_data", "paternal_grandmother_diseases", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">Causa de Defunción</div>
                        <div className="form-group col-md-10">
                            <textarea className="form-control form-pat" rows="3"  onChange={(e) => {
                                    myContext.updateFormState("family_data", "paternal_grandmother_cause_of_death", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>

                    <div className="form-text">Abuelo Materno</div>
                    <div className="form-row">
                            <div className="col-md-1">Vivo</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat"  value="true" onChange={(e) => {
                                    myContext.updateFormState("family_data", "maternal_grandfather_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Finado</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat"  value="false" onChange={(e) => {
                                    myContext.updateFormState("family_data", "maternal_grandfather_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-2">Enfermedades</div>
                            <div className="form-group col-md-6">
                                <textarea className="form-control form-pat" rows="1"  onChange={(e) => {
                                    myContext.updateFormState("family_data", "maternal_grandfather_diseases", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">Causa de Defunción</div>
                        <div className="form-group col-md-10">
                            <textarea className="form-control form-pat" rows="3"  onChange={(e) => {
                                    myContext.updateFormState("family_data", "maternal_grandfather_cause_of_death", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>

                    <div className="form-text">Abuela Materna</div>
                    <div className="form-row">
                            <div className="col-md-1">Vivo</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="true" onChange={(e) => {
                                    myContext.updateFormState("family_data", "maternal_grandmother_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Finado</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="true" onChange={(e) => {
                                    myContext.updateFormState("family_data", "maternal_grandmother_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-2">Enfermedades</div>
                            <div className="form-group col-md-6">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    myContext.updateFormState("family_data", "maternal_grandmother_diseases", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">Causa de Defunción</div>
                        <div className="form-group col-md-10">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                    myContext.updateFormState("family_data", "maternal_grandmother_cause_of_death", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>

                    <div className="form-text">Padre</div>
                    <div className="form-row">
                            <div className="col-md-1">Vivo</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="true" onChange={(e) => {
                                    myContext.updateFormState("family_data", "father_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Finado</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="false" onChange={(e) => {
                                    myContext.updateFormState("family_data", "father_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-2">Enfermedades</div>
                            <div className="form-group col-md-6">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    myContext.updateFormState("family_data", "father_diseases", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">Causa de Defunción</div>
                        <div className="form-group col-md-10">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                    myContext.updateFormState("family_data", "father_cause_of_death", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>

                    <div className="form-text">Madre</div>
                    <div className="form-row">
                            <div className="col-md-1">Vivo</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="true" onChange={(e) => {
                                    myContext.updateFormState("family_data", "mother_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Finado</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="false" onChange={(e) => {
                                    myContext.updateFormState("family_data", "mother_living", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-2">Enfermedades</div>
                            <div className="form-group col-md-6">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    myContext.updateFormState("family_data", "mother_diseases", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">Causa de Defunción</div>
                        <div className="form-group col-md-10">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                    myContext.updateFormState("family_data", "mother_cause_of_death", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>

                    <div className="form-text">Hermano/as</div>
                    
                    <div className="form-row">
                    <div className="col-md-2">¿Cuántos?</div>
                            <div className="form-group col-md-1">
                                <input type="number" className="form-control form-pat" min="0" />
                            </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-2">Enfermedades</div>
                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="1" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">Causa de Defunción</div>
                        <div className="form-group col-md-10">
                            <textarea className="form-control form-pat" rows="3" />
                        </div>
                    </div>

                    <div className="form-text">Hijos/as</div>
                    
                    <div className="form-row">
                    <div className="col-md-2">¿Cuántos?</div>
                            <div className="form-group col-md-1">
                                <input type="number" className="form-control form-pat" min="0" />
                            </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-2">Enfermedades</div>
                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="1" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2">Causa de Defunción</div>
                        <div className="form-group col-md-10">
                            <textarea className="form-control form-pat" rows="3" />
                        </div>
                    </div>
                </div>
            </Collapse>

            <div
                onClick={() => this.setState({open3: !(this.state.open3)})}
                aria-controls="form3"
                aria-expanded={this.state.open3}
                className="col-md-12 btn-text active btn btn-custom2 text-left">
                NÚMERO DE ENFERMOS EN EL NÚCLEO FAMILIAR
            </div>
            <Collapse in={this.state.open3}>
                <div id="form3" className="formulario">
                    <br />

                    <div className="form-row">
                    <div className="col-md-3">Uno (Incluye al paciente)</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="1" onChange={(e) => {
                                    myContext.updateFormState("family_data", "number_sicks", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Dos</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="2" onChange={(e) => {
                                    myContext.updateFormState("family_data", "number_sicks", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-3">Tres ó el portador principal del ingreso familiar</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" value="3" onChange={(e) => {
                                    myContext.updateFormState("family_data", "number_sicks", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                    </div>
                </div>
            </Collapse>

            <div
                onClick={() => this.setState({open4: !(this.state.open4)})}
                aria-controls="form4"
                aria-expanded={this.state.open4}
                className="col-md-12 btn-text active btn btn-custom2 text-left">
                USO DE SUSTANCIAS TÓXICAS
            </div>
            <Collapse in={this.state.open4}>
                <div id="form4" className="formulario">
                    <br />

                    <div className="form-row">
                        <div className="form-text col-md-4">Alguna de las personas con las que vive consume sustancias tóxicas:</div>
                        <div className="col-md-1"/>
                        <div className="col-md-1">Si</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="true" onChange={(e) => {
                                    myContext.updateFormState("family_data", "household_member_substance", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">No</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="false" onChange={(e) => {
                                    myContext.updateFormState("family_data", "household_member_substance", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>
                    <br />

                    <div className="form-row">
                        <div className="form-text col-md-3">Sustancias Tóxicas:</div>
                        <div className="col-md-1"/>
                        <div className="col-md-1">Alcohol</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="alcohol" onChange={(e) => {
                                    myContext.updateFormState("family_data", "substance_consumed", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Resistol</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="resistol" onChange={(e) => {
                                    myContext.updateFormState("family_data", "substance_consumed", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Cocaína</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="cocaína" onChange={(e) => {
                                    myContext.updateFormState("family_data", "substance_consumed", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Tabaco</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="tabaco" onChange={(e) => {
                                    myContext.updateFormState("family_data", "substance_consumed", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4"/>
                        <div className="col-md-1">Marihuana</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="marihuana" onChange={(e) => {
                                    myContext.updateFormState("family_data", "substance_consumed", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Pastillas</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="pastillas" onChange={(e) => {
                                    myContext.updateFormState("family_data", "substance_consumed", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Cristal</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="cristal" onChange={(e) => {
                                    myContext.updateFormState("family_data", "substance_consumed", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6" />
                        <div className="col-md-1">Otro</div>
                        <div className="form-group col-md-3">
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    myContext.updateFormState("family_data", "substance_consumed", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>
                    <br />

                    <div className="form-row">
                        <div className="form-text col-md-3">¿Quién las consume?:</div>
                        <div className="col-md-1"/>
                        <div className="col-md-1">Papá</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="Papá" onChange={(e) => {
                                    myContext.updateFormState("family_data", "substance_consumed", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Mamá</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="Mamá" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Tutor</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="Tutor" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Hijo(a)</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="Hijo(a)" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4"/>
                        <div className="col-md-3">Cónyuge y/o Esposo(a)</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="Cónyuge/Esposo(a)" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Tío(a)</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="Tío(a)" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Abuelo(a)</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="Abuelo(a)" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-6" />
                        <div className="col-md-1">Otro</div>
                        <div className="form-group col-md-3">
                            <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>
                    <br />
                    
                    <div className="form-row">
                        <div className="form-text col-md-3">¿Con qué frecuenca?</div>
                        <div className="col-md-1"/>
                        <div className="col-md-1">Diario</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="Diario" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">3er Día</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="3er Día" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Semanal</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="Semanal" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                        <div className="col-md-1">Esporádico</div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" value="Esporádico" onChange={(e) => {
                                    myContext.updateFormState("family_data", "consuming_member", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                        </div>
                    </div>
                </div>
            </Collapse>
        </>
        );
    }
}

CuartaIteracion.contextType = FormContext;

export default CuartaIteracion;
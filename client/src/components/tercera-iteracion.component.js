import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormContext} from '../context/FormContext';

class TerceraIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open: false     
        };
    }
    render() {
        const myContext = this.context;
        return (
            <>
                <div
                    onClick={() => this.setState({open: !(this.state.open)})}
                    aria-controls="form1"
                    aria-expanded={this.state.open}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    INTERROGATORIO POR APARATOS Y SISTEMAS
                </div>
                <Collapse in={this.state.open}>
                    <div id="form1" className="formulario">
                            
                    <b><div>PIEL</div></b>
                    <i><div>CAMBIOS EN LA COLORACIÓN</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">PALIDEZ</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_paleness");
                                console.log(myContext.formState);
                            }}/>

                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ICTERICIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_icterus");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">CIANOSIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_cyanosis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <br></br><br></br>

                    <div className="form-row">
                        <div className="form-group col-md-4">ERUPCIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_eruptions");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">MANCHAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_spots");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">PRURITO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_pruritus");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">SEQUEDAD</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","dryness");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">AUMENTOS DE VOLUMEN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-8" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_volume_increase");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS DE PELO Y UÑAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-9" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_nails_hair");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">NODULOS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-10" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_nodules");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>


                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","skin_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA OFTAMOLÓGICO</div></b>
                    <i><div>CAMBIOS EN LA VISIÓN</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">DIOPLÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_diplopia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR OCULAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_eye_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">FOTOFOBIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_photophobia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">AMAUROSIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_amaurosis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">FOTOPSIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_photopsies");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">MIODESOPSIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_myodesopsias");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ESCTOMAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_scotomas");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">HEMERALOPÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-8" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_hemeralopia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">NICTALOPÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-9" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_nyctalopia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <br></br><br></br>
                    <i><div>USO DE LENTES</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">MIOPÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-10" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_myopia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ASTIGMATISMO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-11" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","astigmatism");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>


                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","ophthalmic_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA OTORRINOLARINGÓLOGO</div></b>
                    <i><div>CAMBIOS EN LA AUDICIÓN</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">OTALGÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_otalgia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ALGIACUSIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_algiacusis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">PRESBIACUSIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_presbycusis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ANACUSIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_anacusis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">TINNITUS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_tinnitus");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ACUFENOS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_ear_ringing");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">HIPERCUSIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_hearing_loss");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <br></br><br></br>

                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR DE OÍDO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-8" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_ear_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <i><div>USO DE LENTES</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">VÉRTIGO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-9" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_vertigo");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">SALIDA DE LÍQUIDO DEL OÍDO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-10" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_fluid_leaking_ear");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN EL OLFATO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-11" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_smelling_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">SALIDA DE LÍQUIDO DE LA NARIZ</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-12" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_fluid_leaking_nose");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR EN LA NARIZ</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-13" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_nose_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>


                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","ent_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <br></br><br></br>


                    <b><div>BOCA Y GARGANTA</div></b>
                    <i><div>DIENTES</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">CARIES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_cavities");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">AGENESIA DENTAL</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_dental_agenesis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PRÓTESIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_prothesis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <i><div>ENCÍAS</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">GINGIVORREA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat"id="patient_data cb 22-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_gingivorrhea");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">GINGIVORRAGIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_gingivorrhagia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ULCERACIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_gums_ulcerations");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <i><div>LENGUA</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">COLORACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-8" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_colorations");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">TAMAÑO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-9" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_size");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PRESENCIA DE PLACA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-10" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_plaque_presence");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ULCERACIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-11" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_tongue_ulcerations");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <i><div>PROBLEMAS PARA HABLAR</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">DISFONÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-12" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_dysphonia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">AFONÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-13" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_aphonia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">SED</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-14" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_thirst");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR AL COMER O HABLAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-15" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_speaking_eating_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">MAL ALIENTO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-16" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_bad_breath");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">EXCESO DE SALIVACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-17" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_excess_salivation");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","mouth_throat_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                        <br></br><br></br>

                        <b><div>APARATO DIGESTIVO</div></b>
                        <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN EL APETITO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_apettite_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">NÁUSEAS O VÓMITO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_sickness_vomit");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DISTENSIÓN ABDOMINAL</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_distention");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <i><div>ESÓFAGO</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">GASTRALGIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_gastralgia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ACIDEZ</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_acidity");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">LLENURA POSTRANDIAL</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_postrandial_fullnes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <i><div>CAMBIOS EN EVACUACIONES</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">TENESMO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_tenesmus");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PUJOS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-8" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_bids");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ENCOPRESIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-9" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_encopresis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR ANAL</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-10" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_anal_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CONSTIPACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-11" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_constipation");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">RECTORRAGÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-12" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_rectal_bleeding");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">HEMATOQUECIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-13" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_hematochezia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    
                    <i><div>HÍGADO Y VÍAS BILIARES</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">ICTERICIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-14" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_jaundice");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PRURITO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-15" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_pruritus");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">FIEBRE</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-16" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_fever");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ASCITIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-17" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_ascites");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CÓLICO BILIAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-18" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_biliary_colic");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CÓLICO HEPÁTICO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-19" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_hepatic_colic");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ACOLIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-20" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_acholia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <i><div>PÁNCREAS</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">ESTEATORREA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-21" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_steatorrhea");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DIARREA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-22" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_diarrhea");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">SIALORREA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-23" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_hypersalivation");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR DE ABDOMEN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-24" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_abdominal_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR DE ESPALDA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-25" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_back_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","digestive_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>APARATO RESPIRATORIO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">TOS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_cough");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR TORÁCICO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_chest_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOHEMOPOTISIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_hemoptysis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">VÓMICA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_vomiting_cough");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CIANOSIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_cyanosis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">FÁTIGA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_fatigue");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PROBLEMAS PARA RESPIRAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_breathing_problems");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN RESPIRACIÓN A LA DEAMBULACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-8" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_breathing_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","respiratory_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>APARATO CARDIOVASCULAR</div></b>

                    <div className="form-row">
                        <div className="form-group col-md-4">DISNEA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_dyspnoea");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ORTOPNEA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_orthopnea");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">LIPOTIMIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_lipothymia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">SINCOPE</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_syncope");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">EDEMA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_edema");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CIANOSIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_cyanosis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR TORÁCICO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_chest_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PALPITACIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-8" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_palpitations");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","cardiovascular_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>APARATO GENITOURINARIO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS AL MICCIONAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_urinating_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR AL MICCIONAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_urinating_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DIFICULTAD AL MICCIONAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_urinating_difficulty");//placeholder
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN EL CHORRO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_jet_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ALTERACIONES DE LA MENSTRUACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_menstruation_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DSPAREUNIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_dyspareunia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN EL LIBIDO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_libido_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","genitourinary_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA MUSCULO-ESQUELÉTICO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR MUSCULAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_muscle_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR ARTICULAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_joint_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">RIGIDEZ ARTICULAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_joint_stiffness");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">NÓDULOS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_nodules");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR ÓSEO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_bone_pain");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN LA DEAMBULACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_ambulation_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","musculoskeletal_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA HEMATOLÓGICO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">DEBILIDAD</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_weakness");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS DE COLORACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_color_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">HEMORRAGIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_bleeding");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PETEQUIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_petechiae");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">EQUIMOSIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_ecchymosis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">HEMATOMAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_bruises");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ADENOPATÍAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_lymphadenopathy");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","respiratory_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA NERVIOSO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">CEFALEA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_headache");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CONVULSIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-2" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_seizures");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN LA MEMORIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_memory_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN LA FUNCIÓN DE ESFÍNTERES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_sphincters_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PÉRDIDA DE SENSACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_loss_of_feeling");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PÉRDIDA DE MOVIMIENTO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_loss_of_movement");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PÉRDIDA DE EQUILIBRIO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_loss_of_balance");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">TRANSTORNOS DE LENGUAJE</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-8" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_language_disorders");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN LA MARCHA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-9" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_gait_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">TEMBLORES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-10" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_tremors");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PARÁLISIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-11" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_paralysis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PARESTESIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-12" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_parasthesia");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PARESIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-13" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_paresis");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","nervous_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA PSÍQUICO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">ANGUSTIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-1" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_distress");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DEPRESIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-3" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_depression");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN EL INTERÉS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-4" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_interest_changes");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">SENTIMIENTOS DE CULPA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-5" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_guilt");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">IDEAS SUICIDAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-6" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_suicidal_thoughts");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ALUCINACIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-7" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_hallucinations");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DELIRIO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-8" onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_delirium");
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","psychic_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>EXPLORACIÓN FÍSICA</div></b>
                    <br></br>
                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" onChange={(e) => {
                                myContext.updateFormState("patient_data","physical_observations", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SEGUIMIENTO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            CAMBIOS EN EL TRATAMIENTO
                        </div>
                        <div>
                            <div>Si</div>
                            <div>No</div>           
                        </div>
                        <div className="form-group col-md-1">
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb x" id="patient_data cb x-1" value="true" onChange={(e) => {
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","follow_up_treatment_changes");
                                console.log(myContext.formState);
                            }}></input>
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb x" id="patient_data cb x-2" value="false" onChange={(e) => {
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","follow_up_treatment_changes");
                                console.log(myContext.formState);
                            }}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="2" onChange={(e) => {
                                myContext.updateFormState("patient_data","follow_up_treatment_changes_notes", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>

                        <div className="form-group col-md-4">
                            SÍNTOMAS ACTUALES
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","follow_up_actual_symptoms", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>

                        <div className="form-group col-md-5">
                            EFECTOS QUE SE HAN EXPERIMENTADO DESDE LA ADMINISTRACIÓN DEL MEDICAMENTO
                        </div>
                        <div className="form-group col-md-7">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","follow_up_last_medication_efects", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>

                        <div className="form-group col-md-4">
                            SEGUIMIENTO POR PARTE DE PSICOLOGÍA
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","follow_up_psychology_follow_up", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>

                        <div className="form-group col-md-4">
                            DIAGNÓSTICO ACTUAL
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                myContext.updateFormState("patient_data","follow_up_actual_diagnostic", e.target.value);
                                console.log(myContext.formState);
                            }}/>
                        </div>
                    </div>
                    </div>
                </Collapse>
            </>
        )
    }
}

TerceraIteracion.contextType = FormContext;

export default TerceraIteracion;
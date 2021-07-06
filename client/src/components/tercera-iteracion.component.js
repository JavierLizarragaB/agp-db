import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormContext} from '../context/FormContext';

class TerceraIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open: false,
            first: true
        };
    }
    render() {
        const myContext = this.context;
        
        if(this.state.first && myContext.formState.finished){
            myContext.setCheckboxGroup("patient_data cb x", myContext.formState.patient_data.follow_up_treatment_changes);

            this.state.first = false;
        }

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
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-1" checked={myContext.formState.patient_data.skin_paleness} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_paleness");
                            }}/>

                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ICTERICIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-2" checked={myContext.formState.patient_data.skin_icterus} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_icterus");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">CIANOSIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-3" checked={myContext.formState.patient_data.skin_cyanosis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_cyanosis");
                            }}/>
                        </div>
                    </div>

                    <br></br><br></br>

                    <div className="form-row">
                        <div className="form-group col-md-4">ERUPCIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-4" checked={myContext.formState.patient_data.skin_eruptions} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_eruptions");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">MANCHAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-5" checked={myContext.formState.patient_data.skin_spots} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_spots");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">PRURITO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-6" checked={myContext.formState.patient_data.skin_pruritus} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_pruritus");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">SEQUEDAD</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-7" checked={myContext.formState.patient_data.skin_dryness} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_dryness");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">AUMENTOS DE VOLUMEN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-8" checked={myContext.formState.patient_data.skin_volume_increase} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_volume_increase");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS DE PELO Y UÑAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-9" checked={myContext.formState.patient_data.skin_nails_hair} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_nails_hair");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">NODULOS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 19-10" checked={myContext.formState.patient_data.skin_nodules} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","skin_nodules");
                            }}/>
                        </div>
                    </div>


                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent1" placeholder="Observaciones" value={myContext.formState.patient_data.skin_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","skin_observations", e.target.value);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA OFTAMOLÓGICO</div></b>
                    <i><div>CAMBIOS EN LA VISIÓN</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">DIOPLÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-1" checked={myContext.formState.patient_data.ophthalmic_diplopia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_diplopia");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR OCULAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-2" checked={myContext.formState.patient_data.ophthalmic_eye_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_eye_pain");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">FOTOFOBIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-3" checked={myContext.formState.patient_data.ophthalmic_photophobia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_photophobia");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">AMAUROSIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-4" checked={myContext.formState.patient_data.ophthalmic_amaurosis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_amaurosis");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">FOTOPSIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-5" checked={myContext.formState.patient_data.ophthalmic_photopsies} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_photopsies");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">MIODESOPSIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-6" checked={myContext.formState.patient_data.ophthalmic_myodesopsias} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_myodesopsias");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ESCTOMAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-7" checked={myContext.formState.patient_data.ophthalmic_scotomas} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_scotomas");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">HEMERALOPÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-8" checked={myContext.formState.patient_data.ophthalmic_hemeralopia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_hemeralopia");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">NICTALOPÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-9" checked={myContext.formState.patient_data.ophthalmic_nyctalopia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_nyctalopia");
                            }}/>
                        </div>
                    </div>

                    <br></br><br></br>
                    <i><div>USO DE LENTES</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">MIOPÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-10" checked={myContext.formState.patient_data.ophthalmic_myopia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_myopia");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ASTIGMATISMO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 20-11" checked={myContext.formState.patient_data.ophthalmic_astigmatism} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ophthalmic_astigmatism");
                            }}/>
                        </div>
                    </div>


                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent2" placeholder="Observaciones" value={myContext.formState.patient_data.ophthalmic_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","ophthalmic_observations", e.target.value);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA OTORRINOLARINGÓLOGO</div></b>
                    <i><div>CAMBIOS EN LA AUDICIÓN</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">OTALGÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-1" checked={myContext.formState.patient_data.ent_otalgia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_otalgia");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ALGIACUSIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-2" checked={myContext.formState.patient_data.ent_algiacusis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_algiacusis");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">PRESBIACUSIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-3" checked={myContext.formState.patient_data.ent_presbycusis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_presbycusis");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ANACUSIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-4" checked={myContext.formState.patient_data.ent_anacusis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_anacusis");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">TINNITUS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-5" checked={myContext.formState.patient_data.ent_tinnitus} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_tinnitus");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">ACUFENOS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-6" checked={myContext.formState.patient_data.ent_ear_ringing} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_ear_ringing");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">HIPERCUSIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-7" checked={myContext.formState.patient_data.ent_hearing_loss} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_hearing_loss");
                            }}/>
                        </div>
                    </div>
                    <br></br><br></br>

                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR DE OÍDO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-8" checked={myContext.formState.patient_data.ent_ear_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_ear_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">VÉRTIGO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-9" checked={myContext.formState.patient_data.ent_vertigo} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_vertigo");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">SALIDA DE LÍQUIDO DEL OÍDO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-10" checked={myContext.formState.patient_data.ent_fluid_leaking_ear} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_fluid_leaking_ear");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN EL OLFATO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-11" checked={myContext.formState.patient_data.ent_smelling_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_smelling_changes");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">SALIDA DE LÍQUIDO DE LA NARIZ</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-12" checked={myContext.formState.patient_data.ent_fluid_leaking_nose} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_fluid_leaking_nose");
                            }}/>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR EN LA NARIZ</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 21-13" checked={myContext.formState.patient_data.ent_nose_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","ent_nose_pain");
                            }}/>
                        </div>
                    </div>


                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent3" placeholder="Observaciones" value={myContext.formState.patient_data.ent_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","ent_observations", e.target.value);
                            }}/>
                        </div>
                        <br></br><br></br>


                    <b><div>BOCA Y GARGANTA</div></b>
                    <i><div>DIENTES</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">CARIES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-1" checked={myContext.formState.patient_data.mouth_throat_cavities} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_cavities");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">AGENESIA DENTAL</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-2" checked={myContext.formState.patient_data.mouth_throat_dental_agenesis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_dental_agenesis");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PRÓTESIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-3" checked={myContext.formState.patient_data.mouth_throat_prothesis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_prothesis");
                            }}/>
                        </div>
                    </div>
                    <i><div>ENCÍAS</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">GINGIVORREA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-4" checked={myContext.formState.patient_data.mouth_throat_gingivorrhea} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_gingivorrhea");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">GINGIVORRAGIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-5" checked={myContext.formState.patient_data.mouth_throat_gingivorrhagia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_gingivorrhagia");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-6" checked={myContext.formState.patient_data.mouth_throat_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ULCERACIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-7" checked={myContext.formState.patient_data.mouth_throat_gums_ulcerations} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_gums_ulcerations");
                            }}/>
                        </div>
                    </div>

                    <i><div>LENGUA</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">COLORACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-8" checked={myContext.formState.patient_data.mouth_throat_colorations} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_colorations");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">TAMAÑO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-9" checked={myContext.formState.patient_data.mouth_throat_size} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_size");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PRESENCIA DE PLACA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-10" checked={myContext.formState.patient_data.mouth_throat_plaque_presence} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_plaque_presence");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ULCERACIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-11" checked={myContext.formState.patient_data.mouth_throat_tongue_ulcerations} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_tongue_ulcerations");
                            }}/>
                        </div>
                    </div>

                    <i><div>PROBLEMAS PARA HABLAR</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">DISFONÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-12" checked={myContext.formState.patient_data.mouth_throat_dysphonia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_dysphonia");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">AFONÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-13" checked={myContext.formState.patient_data.mouth_throat_aphonia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_aphonia");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">SED</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-14" checked={myContext.formState.patient_data.mouth_throat_thirst} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_thirst");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR AL COMER O HABLAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-15" checked={myContext.formState.patient_data.mouth_throat_speaking_eating_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_speaking_eating_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">MAL ALIENTO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-16" checked={myContext.formState.patient_data.mouth_throat_bad_breath} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_bad_breath");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">EXCESO DE SALIVACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 22-17" checked={myContext.formState.patient_data.mouth_throat_excess_salivation} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","mouth_throat_excess_salivation");
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent4" placeholder="Observaciones" value={myContext.formState.patient_data.mouth_throat_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","mouth_throat_observations", e.target.value);
                            }}/>
                        </div>
                        <br></br><br></br>

                        <b><div>APARATO DIGESTIVO</div></b>
                        <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN EL APETITO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-1" checked={myContext.formState.patient_data.digestive_apettite_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_apettite_changes");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">NÁUSEAS O VÓMITO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-2" checked={myContext.formState.patient_data.digestive_sickness_vomit} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_sickness_vomit");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DISTENSIÓN ABDOMINAL</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-3" checked={myContext.formState.patient_data.digestive_abdominal_distention} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_distention");
                            }}/>
                        </div>
                    </div>

                    <i><div>ESÓFAGO</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">GASTRALGIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-4" checked={myContext.formState.patient_data.digestive_abdominal_gastralgia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_gastralgia");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ACIDEZ</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-5" checked={myContext.formState.patient_data.digestive_abdominal_acidity} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_acidity");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">LLENURA POSTRANDIAL</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-6" checked={myContext.formState.patient_data.digestive_abdominal_postrandial_fullness} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_postrandial_fullness");
                            }}/>
                        </div>
                    </div>

                    <i><div>CAMBIOS EN EVACUACIONES</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">TENESMO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-7" checked={myContext.formState.patient_data.digestive_abdominal_tenesmus} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_tenesmus");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PUJOS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-8" checked={myContext.formState.patient_data.digestive_abdominal_bids} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_bids");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ENCOPRESIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-9" checked={myContext.formState.patient_data.digestive_abdominal_encopresis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_encopresis");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR ANAL</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-10" checked={myContext.formState.patient_data.digestive_abdominal_anal_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_anal_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CONSTIPACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-11" checked={myContext.formState.patient_data.digestive_abdominal_constipation} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_constipation");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">RECTORRAGÍA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-12" checked={myContext.formState.patient_data.digestive_abdominal_rectal_bleeding} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_rectal_bleeding");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">HEMATOQUECIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-13" checked={myContext.formState.patient_data.digestive_abdominal_hematochezia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_hematochezia");
                            }}/>
                        </div>
                    </div>

                    
                    <i><div>HÍGADO Y VÍAS BILIARES</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">ICTERICIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-14" checked={myContext.formState.patient_data.digestive_abdominal_jaundice} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_jaundice");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PRURITO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-15" checked={myContext.formState.patient_data.digestive_abdominal_pruritus} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_pruritus");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">FIEBRE</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-16" checked={myContext.formState.patient_data.digestive_abdominal_fever} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_fever");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ASCITIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-17" checked={myContext.formState.patient_data.digestive_abdominal_ascites} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_ascites");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CÓLICO BILIAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-18" checked={myContext.formState.patient_data.digestive_abdominal_biliary_colic} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_biliary_colic");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CÓLICO HEPÁTICO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-19" checked={myContext.formState.patient_data.digestive_abdominal_hepatic_colic} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_hepatic_colic");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ACOLIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-20" checked={myContext.formState.patient_data.digestive_abdominal_acholia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_acholia");
                            }}/>
                        </div>
                    </div>

                    <i><div>PÁNCREAS</div></i><br></br>
                    <div className="form-row">
                        <div className="form-group col-md-4">ESTEATORREA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-21" checked={myContext.formState.patient_data.digestive_abdominal_steatorrhea} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_steatorrhea");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DIARREA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-22" checked={myContext.formState.patient_data.digestive_abdominal_diarrhea} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_diarrhea");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">SIALORREA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-23" checked={myContext.formState.patient_data.digestive_abdominal_hypersalivation} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_hypersalivation");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR DE ABDOMEN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-24" checked={myContext.formState.patient_data.digestive_abdominal_abdominal_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_abdominal_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR DE ESPALDA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 23-25" checked={myContext.formState.patient_data.digestive_abdominal_back_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","digestive_abdominal_back_pain");
                            }}/>
                        </div>
                    </div>
                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent5" placeholder="Observaciones" value={myContext.formState.patient_data.digestive_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","digestive_observations", e.target.value);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>APARATO RESPIRATORIO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">TOS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-1" checked={myContext.formState.patient_data.respiratory_cough} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_cough");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR TORÁCICO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-2" checked={myContext.formState.patient_data.respiratory_chest_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_chest_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOHEMOPOTISIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-3" checked={myContext.formState.patient_data.respiratory_hemoptysis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_hemoptysis");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">VÓMICA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-4" checked={myContext.formState.patient_data.respiratory_vomiting_cough} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_vomiting_cough");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CIANOSIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-5" checked={myContext.formState.patient_data.respiratory_cyanosis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_cyanosis");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">FÁTIGA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-6" checked={myContext.formState.patient_data.respiratory_fatigue} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_fatigue");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PROBLEMAS PARA RESPIRAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-7" checked={myContext.formState.patient_data.respiratory_breathing_problems} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_breathing_problems");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN RESPIRACIÓN A LA DEAMBULACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 24-8" checked={myContext.formState.patient_data.respiratory_breathing_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","respiratory_breathing_changes");
                            }}/>
                        </div>
                    </div>
                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent6" placeholder="Observaciones" value={myContext.formState.patient_data.respiratory_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","respiratory_observations", e.target.value);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>APARATO CARDIOVASCULAR</div></b>

                    <div className="form-row">
                        <div className="form-group col-md-4">DISNEA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-1" checked={myContext.formState.patient_data.cardiovascular_dyspnoea} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_dyspnoea");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ORTOPNEA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-2" checked={myContext.formState.patient_data.cardiovascular_orthopnea} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_orthopnea");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">LIPOTIMIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-3" checked={myContext.formState.patient_data.cardiovascular_lipothymia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_lipothymia");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">SINCOPE</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-4" checked={myContext.formState.patient_data.cardiovascular_syncope} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_syncope");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">EDEMA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-5" checked={myContext.formState.patient_data.cardiovascular_edema} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_edema");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CIANOSIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-6" checked={myContext.formState.patient_data.cardiovascular_cyanosis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_cyanosis");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR TORÁCICO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-7" checked={myContext.formState.patient_data.cardiovascular_chest_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_chest_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PALPITACIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 25-8" checked={myContext.formState.patient_data.cardiovascular_palpitations} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","cardiovascular_palpitations");
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent7" placeholder="Observaciones" value={myContext.formState.patient_data.cardiovascular_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","cardiovascular_observations", e.target.value);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>APARATO GENITOURINARIO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS AL MICCIONAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-1" checked={myContext.formState.patient_data.genitourinary_urinating_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_urinating_changes");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR AL MICCIONAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-2" checked={myContext.formState.patient_data.genitourinary_urinating_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_urinating_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DIFICULTAD AL MICCIONAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-3" checked={myContext.formState.patient_data.genitourinary_urinating_difficulty} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_urinating_difficulty");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN EL CHORRO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-4" checked={myContext.formState.patient_data.genitourinary_jet_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_jet_changes");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ALTERACIONES DE LA MENSTRUACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-5" checked={myContext.formState.patient_data.genitourinary_menstruation_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_menstruation_changes");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DISPAREUNIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-6" checked={myContext.formState.patient_data.genitourinary_dyspareunia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_dyspareunia");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN EL LIBIDO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 26-7" checked={myContext.formState.patient_data.genitourinary_libido_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","genitourinary_libido_changes");
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent8" placeholder="Observaciones" value={myContext.formState.patient_data.genitourinary_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","genitourinary_observations", e.target.value);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA MUSCULO-ESQUELÉTICO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR MUSCULAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-1" checked={myContext.formState.patient_data.musculoskeletal_muscle_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_muscle_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR ARTICULAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-2" checked={myContext.formState.patient_data.musculoskeletal_joint_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_joint_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">RIGIDEZ ARTICULAR</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-3" checked={myContext.formState.patient_data.musculoskeletal_joint_stiffness} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_joint_stiffness");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">NÓDULOS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-4" checked={myContext.formState.patient_data.musculoskeletal_nodules} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_nodules");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DOLOR ÓSEO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-5" checked={myContext.formState.patient_data.musculoskeletal_bone_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_bone_pain");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN LA DEAMBULACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 27-6" checked={myContext.formState.patient_data.musculoskeletal_ambulation_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","musculoskeletal_ambulation_changes");
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent9" placeholder="Observaciones" value={myContext.formState.patient_data.musculoskeletal_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","musculoskeletal_observations", e.target.value);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA HEMATOLÓGICO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">DEBILIDAD</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-1" checked={myContext.formState.patient_data.hematological_weakness} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_weakness");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS DE COLORACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-2" checked={myContext.formState.patient_data.hematological_color_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_color_changes");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">HEMORRAGIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-3" checked={myContext.formState.patient_data.hematological_bleeding} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_bleeding");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PETEQUIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-4" checked={myContext.formState.patient_data.hematological_petechiae} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_petechiae");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">EQUIMOSIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-5" checked={myContext.formState.patient_data.hematological_ecchymosis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_ecchymosis");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">HEMATOMAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-6" checked={myContext.formState.patient_data.hematological_bruises} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_bruises");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ADENOPATÍAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 28-7" checked={myContext.formState.patient_data.hematological_lymphadenopathy} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","hematological_lymphadenopathy");
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent10" placeholder="Observaciones" value={myContext.formState.patient_data.hematological_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","hematological_observations", e.target.value);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA NERVIOSO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">CEFALEA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-1" checked={myContext.formState.patient_data.nervous_headache} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_headache");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CONVULSIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-2" checked={myContext.formState.patient_data.nervous_seizures} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_seizures");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN LA MEMORIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-3" checked={myContext.formState.patient_data.nervous_memory_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_memory_changes");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN LA FUNCIÓN DE ESFÍNTERES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-4" checked={myContext.formState.patient_data.nervous_sphincters_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_sphincters_changes");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PÉRDIDA DE SENSACIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-5" checked={myContext.formState.patient_data.nervous_loss_of_feeling} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_loss_of_feeling");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PÉRDIDA DE MOVIMIENTO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-6" checked={myContext.formState.patient_data.nervous_loss_of_movement} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_loss_of_movement");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PÉRDIDA DE EQUILIBRIO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-7" checked={myContext.formState.patient_data.nervous_loss_of_balance} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_loss_of_balance");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">TRANSTORNOS DE LENGUAJE</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-8" checked={myContext.formState.patient_data.nervous_language_disorders} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_language_disorders");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN LA MARCHA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-9" checked={myContext.formState.patient_data.nervous_gait_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_gait_changes");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">TEMBLORES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-10" checked={myContext.formState.patient_data.nervous_tremors} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_tremors");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PARÁLISIS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-11" checked={myContext.formState.patient_data.digestive_abdominal_back_pain} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_paralysis");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PARESTESIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-12" checked={myContext.formState.patient_data.nervous_parasthesia} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_parasthesia");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">PARESIAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 29-13" checked={myContext.formState.patient_data.nervous_paresis} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","nervous_paresis");
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent11" placeholder="Observaciones" value={myContext.formState.patient_data.nervous_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","nervous_observations", e.target.value);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>SISTEMA PSÍQUICO</div></b>
                    <div className="form-row">
                        <div className="form-group col-md-4">ANGUSTIA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-1" checked={myContext.formState.patient_data.psychic_distress} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_distress");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DEPRESIÓN</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-3" checked={myContext.formState.patient_data.psychic_depression} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_depression");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">CAMBIOS EN EL INTERÉS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-4" checked={myContext.formState.patient_data.psychic_interest_changes} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_interest_changes");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">SENTIMIENTOS DE CULPA</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-5" checked={myContext.formState.patient_data.psychic_guilt} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_guilt");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">IDEAS SUICIDAS</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-6"checked={myContext.formState.patient_data.psychic_suicidal_thoughts} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_suicidal_thoughts");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">ALUCINACIONES</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-7" checked={myContext.formState.patient_data.psychic_hallucinations} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_hallucinations");
                            }}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">DELIRIO</div>
                        <div className="form-group col-md-4">
                            <input type="checkbox" className="form-control form-pat" id="patient_data cb 30-8" checked={myContext.formState.patient_data.psychic_delirium} onChange={(e) => {
                                myContext.handleBooleanCheckbox(e.target.id,"patient_data","psychic_delirium");
                            }}/>
                        </div>
                    </div>

                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent12" placeholder="Observaciones" value={myContext.formState.patient_data.psychic_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","psychic_observations", e.target.value);
                            }}/>
                        </div>
                    <br></br><br></br>

                    <b><div>EXPLORACIÓN FÍSICA</div></b>
                    <br></br>
                    <div>OBSERVACIONES</div>
                        <div>
                            <input type="text" className="form-control form-pat col-md-8" id="inputParent13" placeholder="Observaciones" value={myContext.formState.patient_data.physical_observations} onChange={(e) => {
                                myContext.updateFormState("patient_data","physical_observations", e.target.value);
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
                            }}></input>
                            <input type="checkbox" className="form-control form-pat" name="patient_data cb x" id="patient_data cb x-2" value="false" onChange={(e) => {
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"patient_data","follow_up_treatment_changes");
                            }}></input>
                        </div>

                        <div className="form-group col-md-6">
                            <textarea className="form-control form-pat" rows="2" value={myContext.formState.patient_data.follow_up_treatment_changes_notes} onChange={(e) => {
                                myContext.updateFormState("patient_data","follow_up_treatment_changes_notes", e.target.value);

                            }}/>
                        </div>

                        <div className="form-group col-md-4">
                            SÍNTOMAS ACTUALES
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="3" value={myContext.formState.patient_data.follow_up_actual_symptoms} onChange={(e) => {
                                myContext.updateFormState("patient_data","follow_up_actual_symptoms", e.target.value);
                            }}/>
                        </div>

                        <div className="form-group col-md-5">
                            EFECTOS QUE SE HAN EXPERIMENTADO DESDE LA ADMINISTRACIÓN DEL MEDICAMENTO
                        </div>
                        <div className="form-group col-md-7">
                            <textarea className="form-control form-pat" rows="3" value={myContext.formState.patient_data.follow_up_last_medication_efects} onChange={(e) => {
                                myContext.updateFormState("patient_data","follow_up_last_medication_efects", e.target.value);
                            }}/>
                        </div>

                        <div className="form-group col-md-4">
                            SEGUIMIENTO POR PARTE DE PSICOLOGÍA
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="3" value={myContext.formState.patient_data.follow_up_psychology_follow_up} onChange={(e) => {
                                myContext.updateFormState("patient_data","follow_up_psychology_follow_up", e.target.value);
                            }}/>
                        </div>

                        <div className="form-group col-md-4">
                            DIAGNÓSTICO ACTUAL
                        </div>
                        <div className="form-group col-md-8">
                            <textarea className="form-control form-pat" rows="3" value={myContext.formState.patient_data.follow_up_actual_diagnostic} onChange={(e) => {
                                myContext.updateFormState("patient_data","follow_up_actual_diagnostic", e.target.value);
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
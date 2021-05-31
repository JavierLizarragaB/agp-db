import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class TerceraIteracion extends Component {

    render() {
        return (
            <>
                <div className="form-title">Interrogatorio por aparatos y Sistemas</div>
                <b><div>PIEL</div></b>
                <i><div>CAMBIOS EN LA COLORACIÓN</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">PALIDEZ</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ICTERICIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">CIANOSIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <br></br><br></br>

                <div className="form-row">
                    <div className="form-group col-md-4">ERUPCIONES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">MANCHAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">PRURITO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">SEQUEDAD</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">AUMENTOS DE VOLUMEN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS DE PELO Y UÑAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">NODULOS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>


                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                <br></br><br></br>

                <b><div>SISTEMA OFTAMOLÓGICO</div></b>
                <i><div>CAMBIOS EN LA VISIÓN</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">DIOPLÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR OCULAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">FOTOFOBIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">AMAUROSIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">FOTOPSIAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">MIODESOPSIAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ESCTOMAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">HEMERALOPÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">NICTALOPÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <br></br><br></br>
                <i><div>USO DE LENTES</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">MIOPÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ASTIGMATISMO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>


                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                <br></br><br></br>

                <b><div>SISTEMA OTORRINOLARINGÓLOGO</div></b>
                <i><div>CAMBIOS EN LA AUDICIÓN</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">OTALGÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ALGIACUSIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">PRESBIACUSIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ANACUSIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">TINNITUS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">ACUFENOS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">HIPERCUSIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <br></br><br></br>

                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR DE OÍDO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <i><div>USO DE LENTES</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">VÉRTIGO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">SALIDA DE LÍQUIDO DEL OÍDO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN EL OLFATO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">SALIDA DE LÍQUIDO DE LA NARIZ</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR EN LA NARIZ</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>


                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                    <br></br><br></br>


                <b><div>BOCA Y GARGANTA</div></b>
                <i><div>DIENTES</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">CARIES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">AGENESIA DENTAL</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PRÓTESIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <i><div>ENCÍAS</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">GINGIVORREA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">GINGIVORRAGIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ULCERACIONES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <i><div>LENGUA</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">COLORACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">TAMAÑO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PRESENCIA DE PLACA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ULCERACIONES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <i><div>PROBLEMAS PARA HABLAR</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">DISFONÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">AFONÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">SED</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR AL COMER O HABLAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">MAL ALIENTO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">EXCESO DE SALIVACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                    <br></br><br></br>

                    <b><div>APARATO DIGESTIVO</div></b>
                    <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN EL APETITO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">NÁUSEAS O VÓMITO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DISTENSIÓN ABDOMINAL</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <i><div>ESÓFAGO</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">GASTRALCIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ACIDEZ</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">LLENURA POSTRANDIAL</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <i><div>CAMBIOS EN EVACUACIONES</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">TENESMO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PUJOS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ENCOPRESIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR ANAL</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CONSTIPACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">RECTORRAGÍA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">HEMATOQUECIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                
                <i><div>HÍGADO Y VÍAS BILIARES</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">ICTERCIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PRURITO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">FIEBRE</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ASCITIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CÓLICO BILIAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CÓLICO HEPÁTICO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ACOLIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <i><div>PÁNCREAS</div></i><br></br>
                <div className="form-row">
                    <div className="form-group col-md-4">ESTEATORREA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DIARREA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">SIALORREA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR DE ABDOMEN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR DE ESPALDA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                <br></br><br></br>

                <b><div>APARATO RESPIRATORIO</div></b>
                <div className="form-row">
                    <div className="form-group col-md-4">TOS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR TORÁCICO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOHEMOPOTISIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">VÓMICA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CIANOSIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">FÁTIGA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PROBLEMAS PARA RESPIRAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN RESPIRACIÓN A LA DEAMBULACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                <br></br><br></br>

		        <b><div>APARATO CARDIOVASCULAR</div></b>

                <div className="form-row">
                    <div className="form-group col-md-4">DISNEA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ORTOPNEA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">LIPOTIMIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">SINCOPE</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">EDEMA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CIANOSIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR TORÁCICO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PALPITACIONES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                <br></br><br></br>

		        <b><div>APARATO GENITOURINARIO</div></b>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS AL MICCIONAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR AL MICCIONAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DIFICULTAD AL MICCIONAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN EL CHORRO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ALTERACIONES DE LA MENSTRUACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DSPAREUNIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN EL LIBIDO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                <br></br><br></br>

		        <b><div>SISTEMA MUSCULO-ESQUELÉTICO</div></b>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR MUSCULAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR ARTICULAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">RIGIDEZ ARTICULAR</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">NÓDULOS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DOLOR ÓSEO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN LA DEAMBULACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                <br></br><br></br>

                <b><div>SISTEMA HEMATOLÓGICO</div></b>
                <div className="form-row">
                    <div className="form-group col-md-4">DEBILIDAD</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS DE COLORACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">HEMORRAGIAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PETEQUIAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">EQUIMOSIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">HEMATOMAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ADENOPATÍAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                <br></br><br></br>

                <b><div>SISTEMA NERVIOSO</div></b>
                <div className="form-row">
                    <div className="form-group col-md-4">CEFALEA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CONVULSIONES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN LA MEMORIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN LA FUNCIÓN DE ESFÍNTERES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PÉRDIDA DE SENSACIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PÉRDIDA DE MOVIMIENTO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PÉRDIDA DE EQUILIBRIO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">TRANSTORNOS DE LENGUAJE</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN LA MARCHA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">TEMBLORES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PARÁLISIS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PARESTESIAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">PARESIAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                <br></br><br></br>

                <b><div>SISTEMA PSÍQUICO</div></b>
                <div className="form-row">
                    <div className="form-group col-md-4">ANGUSTIA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DEPRESIÓN</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">CAMBIOS EN EL INTERÉS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">SENTIMIENTOS DE CULPA</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">IDEAS SUICIDAS</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">ALUCINACIONES</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">DELIRIO</div>
                    <div className="form-group col-md-4">
                        <input type="checkbox" className="form-control form-pat" id="inputCN" />
                    </div>
                </div>

                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
                    </div>
                <br></br><br></br>

                <b><div>EXPLORACIÓN FÍSICA</div></b>
                <br></br>
                <div>OBSERVACIONES</div>
                    <div>
                        <input type="text" className="form-control form-pat col-md-8" id="inputParent" placeholder="Observaciones" />
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
                        <input type="checkbox" className="form-control form-pat"></input>
                        <input type="checkbox" className="form-control form-pat"></input>
                    </div>

                    <div className="form-group col-md-6">
                        <textarea className="form-control form-pat" rows="2" />
                    </div>

                    <div className="form-group col-md-4">
                        SÍNTOMAS ACTUALES
                    </div>
                    <div className="form-group col-md-8">
                        <textarea className="form-control form-pat" rows="3"></textarea>
                    </div>

                    <div className="form-group col-md-5">
                        EFECTOS QUE SE HAN EXPERIMENTADO DESDE LA ADMINISTRACIÓN DEL MEDICAMENTO
                    </div>
                    <div className="form-group col-md-7">
                        <textarea className="form-control form-pat" rows="3"></textarea>
                    </div>

                    <div className="form-group col-md-4">
                        SEGUIMIENTO POR PARTE DE PSICOLOGÍA
                    </div>
                    <div className="form-group col-md-8">
                        <textarea className="form-control form-pat" rows="3"></textarea>
                    </div>

                    <div className="form-group col-md-4">
                        DIAGNÓSTICO ACTUAL
                    </div>
                    <div className="form-group col-md-8">
                        <textarea className="form-control form-pat" rows="3"></textarea>
                    </div>
                </div>
            </>
        )
    }
}

export default TerceraIteracion;
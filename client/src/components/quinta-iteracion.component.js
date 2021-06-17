import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class QuintaIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open1: false,
	        open2: false,
            open3: false,
            open4: false,
            open5: false,
        };
    }
    render() {
        return (
            <>
                <div
                    onClick={() => this.setState({open1: !(this.state.open1)})}
                    aria-controls="form1"
                    aria-expanded={this.state.open1}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    TIPO DE VIVIENDA
                </div>
                <Collapse in={this.state.open1}>
                    <div id="form1" className="formulario">
                        <br />

                        <div className="form-row col-md-12">
                            <div className="col-md-2">Propia (Pagado)</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Rentada</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Prestada</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-6">
                            <div className="form-text" >Servicios (Agua, Luz, Drenaje Teléfono, Etc)</div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">0 a 2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">4 o Más</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-6">
                            <div className="form-text" >Material de Consutrucción</div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-2">Lámina de Cartón</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-3">Madera, Lámina de Asbesto</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-2">Cemento o Ladrillo</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-6">
                            <div className="form-text" >Distribución</div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">Cocina</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Sala</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Comedor</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Recámara</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">NO.</div>
                            <div className="form-group col-md-1">
                                <textarea className="form-control form-pat" rows="1" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">Otros</div>
                                <div className="form-group col-md-1">
                                    <input type="checkbox" className="form-control form-pat" />
                                </div>
                                <div className="form-group col-md-3">
                                    <textarea className="form-control form-pat" rows="1" />
                                </div>
                        </div>
                        <br />

                        <div className="form-row col-md-6">
                            <div className="form-text" >Número de personas por cuarto</div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">1 a 2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">4 o Más</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-6">
                            <div className="form-text" >Zona de Ubicación</div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">Rural</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Suburbana</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Urbana</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-6">
                            <div className="form-text" >Exposición a Biomasas</div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">Polvo</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Humo de Leña</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Otros</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="form-group col-md-4">
                                <textarea className="form-control form-pat" rows="1" />
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
                    DISPONIBILIDAD DE BIENES EN EL HOGAR
                </div>
                <Collapse in={this.state.open2}>
                    <div id="form2" className="formulario">
                        <br />

                        <div className="form-row col-md-6">
                            <div className="form-text" >Electrodomésticos</div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">0 a 2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">3 a 4</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">5 o Más</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">Abaníco</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Cooler</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-4">Aire Acondicionado o Mini Split</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />
                    </div>
                </Collapse>

                <div
                    onClick={() => this.setState({open3: !(this.state.open3)})}
                    aria-controls="form1"
                    aria-expanded={this.state.open3}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    MEDIO DE TRANSPORTE FAMILIAR
                </div>
                <Collapse in={this.state.open3}>
                    <div id="form3" className="formulario">
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">Camión</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-3">Bicicleta o Motocicleta</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-1">Automovil</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">Marca</div>
                            <div className="form-group col-md-2">
                                <textarea className="form-control form-pat" rows="1"/>
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-1">Modelo</div>
                            <div className="form-group col-md-2">
                                <textarea className="form-control form-pat" rows="1"/>
                            </div>
                        </div>
                        <br />

                        <div className="form-text">Área Geográfica</div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-3">Del Municipio y su Zona Conurbana</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                            <div className="col-md-3">Otros Municipio y Entidades Federativas</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <br />
                    </div>
                </Collapse>

                <div
                    onClick={() => this.setState({open4: !(this.state.open4)})}
                    aria-controls="form4"
                    aria-expanded={this.state.open4}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    NÚMERO DE ENFERMOS EN EL NÚCLEO FAMILIAR
                </div>
                <Collapse in={this.state.open4}>
                    <div id="form4" className="formulario">
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-3">Uno (Incluye al Paciente)</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />           
                            </div>
                            <div className="col-md-2" />
                            <div className="col-md-1">Dos</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-3">Tres ó el Portador Principal del Ingreso Familiar</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" />           
                            </div>
                        </div>
                        <br />
                    </div>
                </Collapse>

                <div
                    onClick={() => this.setState({open5: !(this.state.open5)})}
                    aria-controls="form5"
                    aria-expanded={this.state.open5}
                    className="col-md-12 btn-text active btn btn-custom2 text-left">
                    EGRESOS
                </div>
                <Collapse in={this.state.open5}>
                    <div id="form5" className="formulario">
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Energía Eléctrica</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Agua</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Gas</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Teléfono</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Alimentación</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Renta</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Transporte (o Gasolina)</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Educación</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Vestido</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Diversión</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="form-group col-md-3">Otros</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$" />           
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-3" />
                            <div className="form-group col-md-1 form-text">Total</div>
                            <div className="form-group col-md-2">
                                <input type="number" className="form-control form-pat" placeholder="$"/>           
                            </div>
                        </div>
                    </div>
                </Collapse>
            </>
        )
    }
}

export default QuintaIteracion;

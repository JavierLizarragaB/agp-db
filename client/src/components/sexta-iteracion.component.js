import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FormContext} from '../context/FormContext';

class SextaIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open1: false,
	        open2: false,
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
                    ALIMENTACIÓN
                </div>
                <Collapse in={this.state.open1}>
                    <div id="form1" className="formulario">
                        <br />

                        <div className="form-row col-md-12">
                            <div className=" form-text col-md-3">¿Cómo lo considera?</div>
                            <div className="col-md-1">Buena</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-1" id="diet-cb-1-1" value="Buena" 
                                    onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","perceived_quality");
                                }}/>
                            </div>
                            <div className="col-md-1">Regular</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-1" id="diet-cb-1-2" value="Regular" 
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","perceived_quality");
                                }}/>
                            </div>
                            <div className="col-md-1">Mala</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-1" id="diet-cb-1-3" value="Mala" 
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","perceived_quality");
                                }}/>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-3">Número de Comidas al Día:</div>
                            <div className="form-group col-md-2">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    mycontext.updateFormState("diet","meals_per_day",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-2">Preparación de los Alimentos:</div>
                            <div className="col-md-1" />
                            <div className="form-group col-md-6">
                                <textarea className="form-control form-pat" rows="3" onChange={(e) => {
                                    mycontext.updateFormState("diet","food_preparation",e.target.value);
                                }} ></textarea>
                            </div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="form-text col-md-3">Cantidad de Agua al Día:</div>
                            <div className="form-group col-md-3">
                                <textarea className="form-control form-pat" rows="1" onChange={(e) => {
                                    mycontext.updateFormState("diet","water_per_day",e.target.value);
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
                    TIPO DE ALIMENTACIÓN
                </div>
                <Collapse in={this.state.open2}>
                    <div id="form2" className="formulario">
                        <br />

                        <div className="form-row col-md-12">
                            <div className="col-md-1" />
                            <div className="col-md-3" />
                            <div className="form-text">A la Semana</div>
                            <div className="col-md-3"/>
                            <div className="form-text">Por Mes</div>
                        </div>
                        <br />

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Carnes Rojas</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-2" id="diet-cb-2-1" value="1" 
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","red_meat_week");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-2" id="diet-cb-2-2" value="2" 
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","red_meat_week");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-2" id="diet-cb-2-3" value="3" 
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","red_meat_week");
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-3" id="diet-cb-3-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","red_meat_month");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-3" id="diet-cb-3-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","red_meat_month");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-3" id="diet-cb-3-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","red_meat_month");
                                }}/>
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Pollo</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-4" id="diet-cb-4-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","chicken_week");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-4" id="diet-cb-4-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","chicken_week");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-4" id="diet-cb-4-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","chicken_week");
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-5" id="diet-cb-5-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","chicken_month");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-5" id="diet-cb-5-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","chicken_month");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-5" id="diet-cb-5-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","chicken_month");
                                }}/>
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Pescado</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-6" id="diet-cb-6-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","fish_week");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-6" id="diet-cb-6-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","fish_week");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-6" id="diet-cb-6-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","fish_week");
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-7" id="diet-cb-7-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","fish_month");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-7" id="diet-cb-7-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","fish_month");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-7" id="diet-cb-7-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","fish_month");
                                }}/>
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Granos (Frijol, Maíz, Arroz)</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-8" id="diet-cb-8-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","grain_week");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-8" id="diet-cb-8-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","grain_week");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-8" id="diet-cb-8-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","grain_week");
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-9" id="diet-cb-9-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","grain_month");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-9" id="diet-cb-9-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","grain_month");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-9" id="diet-cb-9-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","grain_month");
                                }}/>
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Lácteos</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-10" id="diet-cb-10-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","dairy_week");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-10" id="diet-cb-10-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","dairy_week");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-10" id="diet-cb-10-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","dairy_week");
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-11" id="diet-cb-11-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","dairy_month");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-11" id="diet-cb-11-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","dairy_month");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-11" id="diet-cb-11-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","dairy_month");
                                }}/>
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Pan</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-12" id="diet-cb-12-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_week");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-12" id="diet-cb-12-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_week");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-12" id="diet-cb-12-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_week");
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-13" id="diet-cb-13-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_month");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-13" id="diet-cb-13-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_month");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-13" id="diet-cb-13-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_month");
                                }}/>
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Pan/Pastas</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-14" id="diet-cb-14-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_pasta_week");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-14" id="diet-cb-14-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_pasta_week");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-14" id="diet-cb-14-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_pasta_week");
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-15" id="diet-cb-15-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_pasta_month");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-15" id="diet-cb-15-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_pasta_month");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-15" id="diet-cb-15-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","bread_pasta_month");
                                }}/>
                            </div>
                        </div>

                        <div className="form-row col-md-12">
                            <div className="col-md-3">Verduras y/o Frutas</div>
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-16" id="diet-cb-16-1" value="1"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","vegetables_fruits_week");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-16" id="diet-cb-16-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","vegetables_fruits_week");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-16" id="diet-cb-16-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","vegetables_fruits_week");
                                }}/>
                            </div>

                            <div className="col-md-1" />
                            <div className="">1</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-17" id="diet-cb-17-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","vegetables_fruits_month");
                                }}/>
                            </div>
                            <div className="">2</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-17" id="diet-cb-17-2" value="2"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","vegetables_fruits_month");
                                }}/>
                            </div>
                            <div className="">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="diet-cb-17" id="diet-cb-17-3" value="3"
                                onChange={(e) => {
                                    mycontext.handleCheckboxGroup(e.target.name,e.target.id,"diet","vegetables_fruits_month");
                                }}/>
                            </div>
                        </div>
                    </div>
              </Collapse>
            </>
        )
    }
}

SextaIteracion.contextType = FormContext;

export default SextaIteracion;
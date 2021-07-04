import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {FormContext} from '../context/FormContext';

class QuintaIteracion extends Component {
    constructor(){
        super();
        this.state ={
            open1: false,
	        open2: false,
            open3: false,
            open4: false,
            open5: false,
            num1: null,
            num2: null,
            num3: null,
            num4: null,
            num5: null,
            num6: null,
            num7: null,
            num8: null,
            num9: null,
            num10: null,
            num11: null,
            result: null,
            first: true
        };
        this._changeNum1 = this._changeNum1.bind(this);
        this._changeNum2 = this._changeNum2.bind(this);
        this._changeNum3 = this._changeNum3.bind(this);
        this._changeNum4 = this._changeNum4.bind(this);
        this._changeNum5 = this._changeNum5.bind(this);
        this._changeNum6 = this._changeNum6.bind(this);
        this._changeNum7 = this._changeNum7.bind(this);
        this._changeNum8 = this._changeNum8.bind(this);
        this._changeNum9 = this._changeNum9.bind(this);
        this._changeNum10 = this._changeNum10.bind(this);
        this._changeNum11 = this._changeNum11.bind(this);
    }

        _changeNum1(e) {
        if (e.target.validity.valid) {
        var newNum1 = +(e.target.value)
        this.setState({
            num1: newNum1,
            result: newNum1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5 + this.state.num6
                            + this.state.num7 + this.state.num8 + this.state.num9 + this.state.num10 + this.state.num11
            }); 
        }
    }
    
        _changeNum2(e) {
        if (e.target.validity.valid) {
        var newNum2 = +(e.target.value)
        this.setState({
            num2: newNum2,
            result: newNum2 + this.state.num1 + this.state.num3 + this.state.num4 + this.state.num5 + this.state.num6
                            + this.state.num7 + this.state.num8 + this.state.num9 + this.state.num10 + this.state.num11
            }); 
        }
    }

        _changeNum3(e) {
        if (e.target.validity.valid) {
        var newNum3 = +(e.target.value)
        this.setState({
            num3: newNum3,
            result: newNum3 + this.state.num1 + this.state.num2 + this.state.num4 + this.state.num5 + this.state.num6
                            + this.state.num7 + this.state.num8 + this.state.num9 + this.state.num10 + this.state.num11
            }); 
        }
    }

        _changeNum4(e) {
        if (e.target.validity.valid) {
        var newNum4 = +(e.target.value)
        this.setState({
            num4: newNum4,
            result: newNum4 + this.state.num1 + this.state.num2 + this.state.num3 + this.state.num5 + this.state.num6
                            + this.state.num7 + this.state.num8 + this.state.num9 + this.state.num10 + this.state.num11
            }); 
        }
    }

        _changeNum5(e) {
        if (e.target.validity.valid) {
        var newNum5 = +(e.target.value)
        this.setState({
            num5: newNum5,
            result: newNum5 + this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num6
                            + this.state.num7 + this.state.num8 + this.state.num9 + this.state.num10 + this.state.num11
            }); 
        }
    }

        _changeNum6(e) {
        if (e.target.validity.valid) {
        var newNum6 = +(e.target.value)
        this.setState({
            num6: newNum6,
            result: newNum6 + this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5
                            + this.state.num7 + this.state.num8 + this.state.num9 + this.state.num10 + this.state.num11
            }); 
        }
    }
    
        _changeNum7(e) {
        if (e.target.validity.valid) {
        var newNum7 = +(e.target.value)
        this.setState({
            num7: newNum7,
            result: newNum7 + this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5
                            + this.state.num6 + this.state.num8 + this.state.num9 + this.state.num10 + this.state.num11
            }); 
        }
    }

        _changeNum8(e) {
        if (e.target.validity.valid) {
        var newNum8 = +(e.target.value)
        this.setState({
            num8: newNum8,
            result: newNum8 + this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5
                            + this.state.num6 + this.state.num7 + this.state.num9 + this.state.num10 + this.state.num11
            }); 
        }
    }

        _changeNum9(e) {
        if (e.target.validity.valid) {
        var newNum9 = +(e.target.value)
        this.setState({
            num9: newNum9,
            result: newNum9 + this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5
                            + this.state.num6 + this.state.num7 + this.state.num8 + this.state.num10 + this.state.num11
            }); 
        }
    }

        _changeNum10(e) {
        if (e.target.validity.valid) {
        var newNum10 = +(e.target.value)
        this.setState({
            num10: newNum10,
            result: newNum10 + this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5
                            + this.state.num6 + this.state.num7 + this.state.num8 + this.state.num9 + this.state.num11
            }); 
        }
    }

        _changeNum11(e) {
        if (e.target.validity.valid) {
        var newNum11 = +(e.target.value)
        this.setState({
            num11: newNum11,
            result: newNum11 + this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5
                            + this.state.num6 + this.state.num7 + this.state.num8 + this.state.num9 + this.state.num10
            }); 
        }
    }

    /*
    handlenum1 = (event) => {
        this.setState({
            num1: event.target.value
        })
    }

    handlenum2 = (event) => {
        this.setState({
            num2: event.target.value
        })
    }

    handleTotal = (event) => {
        this.setState({total: parseInt(this.state.num1) + parseInt(this.state.num2) });
        event.prevent.default();
    }
    */

    render() {

        const myContext = this.context;

        if(this.state.first && myContext.formState.finished){
            myContext.setCheckboxGroup("home_and_economy cb 1", myContext.formState.home_and_economy.place_type);
            myContext.setCheckboxGroup("home_and_economy cb 2", myContext.formState.home_and_economy.place_services);
            myContext.setCheckboxGroup("home_and_economy cb 3", myContext.formState.home_and_economy.place_material);
            myContext.setCheckboxGroup("home_and_economy cb 5", myContext.formState.home_and_economy.place_person_per_room);
            myContext.setCheckboxGroup("home_and_economy cb 6", myContext.formState.home_and_economy.place_location);

            myContext.setCheckboxGroup("home_and_economy cb 8", myContext.formState.home_and_economy.electrodomestics);
            myContext.setCheckboxGroup("home_and_economy cb 9", myContext.formState.home_and_economy.air_conditioner);

            myContext.setCheckboxGroup("home_and_economy cb 10", myContext.formState.home_and_economy.transportation);
            myContext.setCheckboxGroup("home_and_economy cb 11", myContext.formState.home_and_economy.geographic_area);

            this.state.num1 = myContext.formState.home_and_economy.outcome_electric_power;
            this.state.num2 = myContext.formState.home_and_economy.outcome_water;
            this.state.num3 = myContext.formState.home_and_economy.outcome_gas;
            this.state.num4 = myContext.formState.home_and_economy.outcome_phone;
            this.state.num5 = myContext.formState.home_and_economy.outcome_food;
            this.state.num6 = myContext.formState.home_and_economy.outcome_rent;
            this.state.num7 = myContext.formState.home_and_economy.outcome_transportation;
            this.state.num8 = myContext.formState.home_and_economy.outcome_education;
            this.state.num9 = myContext.formState.home_and_economy.outcome_clothing
            this.state.num10 = myContext.formState.home_and_economy.outcome_recreational
            this.state.num11 = myContext.formState.home_and_economy.outcome_other;
            this.state.result = this.state.num1 + this.state.num2 + this.state.num3 + this.state.num4 + this.state.num5 + this.state.num6 + this.state.num7 + this.state.num8 + this.state.num9 + this.state.num10 + this.state.num11;

            this.state.first = false;
        }

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
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 1" id="home_and_economy cb 1-1" value="Propia (Pagada)" onChange={(e) => {
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_type");
                                console.log(myContext.formState);
                            }}/>
                            </div>
                            <div className="col-md-1">Rentada</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 1" id="home_and_economy cb 1-2" value="Rentada" onChange={(e) => {
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_type");
                                console.log(myContext.formState);
                            }}/>
                            </div>
                            <div className="col-md-1">Prestada</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 1" id="home_and_economy cb 1-3" value="Prestada" onChange={(e) => {
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_type");
                                console.log(myContext.formState);
                            }}/>
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
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 2" id="home_and_economy cb 2-1" value="0 a 2" onChange={(e) => {
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_services");
                                console.log(myContext.formState);
                            }}/>
                            </div>
                            <div className="col-md-1">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 2" id="home_and_economy cb 2-2" value="3" onChange={(e) => {
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_services");
                                console.log(myContext.formState);
                            }}/>
                            </div>
                            <div className="col-md-1">4 o Más</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 2" id="home_and_economy cb 2-3" value="4 o más" onChange={(e) => {
                                myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_services");
                                console.log(myContext.formState);
                            }}/>
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
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 3" id="home_and_economy cb 3-1" value="Lámina de Cartón" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_material");
                                    console.log(myContext.formState);
                            }}/>
                            </div>
                            <div className="col-md-3">Madera, Lámina de Asbesto</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 3" id="home_and_economy cb 3-2" value="Madera, Lámina de Asbesto" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_material");
                                    console.log(myContext.formState);
                            }}/>
                            </div>
                            <div className="col-md-2">Cemento o Ladrillo</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 3" id="home_and_economy cb 3-3" value="Cemento o Ladrillo" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_material");
                                    console.log(myContext.formState);
                            }}/>
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
                                <input type="checkbox" className="form-control form-pat" id="home_and_economy cb 4-1" checked={myContext.formState.home_and_economy.place_kitchen} onChange={(e) => {
                                    myContext.handleBooleanCheckbox(e.target.id,"home_and_economy","place_kitchen");
                                    console.log(myContext.formState);
                            }}/>
                            </div>
                            <div className="col-md-1">Sala</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" id="home_and_economy cb 4-2" checked={myContext.formState.home_and_economy.place_lounge} onChange={(e) => {
                                    myContext.handleBooleanCheckbox(e.target.id,"home_and_economy","place_lounge");
                                    console.log(myContext.formState);
                            }}/>
                            </div>
                            <div className="col-md-1">Comedor</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" id="home_and_economy cb 4-3" checked={myContext.formState.home_and_economy.place_dining_room} onChange={(e) => {
                                    myContext.handleBooleanCheckbox(e.target.id,"home_and_economy","place_dining_room");
                                    console.log(myContext.formState);
                            }}/>
                            </div>
                            <div className="col-md-1">Recámara</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" id="home_and_economy cb 4-4" checked={myContext.formState.home_and_economy.place_bedroom} onChange={(e) => {
                                    myContext.handleBooleanCheckbox(e.target.id,"home_and_economy","place_bedroom");
                                    console.log(myContext.formState);
                            }}/>
                            </div>
                            <div className="col-md-1">NO.</div>
                            <div className="form-group col-md-1">
                                <input type="number" className="form-control form-pat" rows="1" value={myContext.formState.home_and_economy.place_bedroom_quantity} min="0" step="any" onChange={(e) => {
                                    myContext.updateFormState("home_and_economy","place_bedroom_quantity", e.target.value);
                                    console.log(myContext.formState);
                            }}/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">Otros</div>
                                <div className="form-group col-md-3">
                                    <textarea className="form-control form-pat" rows="1" value={myContext.formState.home_and_economy.place_others} onChange={(e) => {
                                    myContext.updateFormState("home_and_economy","place_others", e.target.value);
                                    console.log(myContext.formState);
                                    }}/>
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
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 5" id="home_and_economy cb 5-1" value="1 a 2" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_person_per_room");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">3</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 5" id="home_and_economy cb 5-2" value="3" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_person_per_room");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">4 o Más</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 5" id="home_and_economy cb 5-3" value="4 o Más" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_person_per_room");
                                    console.log(myContext.formState);
                                }}/>
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
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 6" id="home_and_economy cb 6-1" value="Rural" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_location");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Suburbana</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 6" id="home_and_economy cb 6-2" value="Suburbana" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_location");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Urbana</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 6" id="home_and_economy cb 6-3" value="Urbana" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","place_location");
                                    console.log(myContext.formState);
                                }}/>
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
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 7" id="home_and_economy cb 7-1" checked={myContext.formState.home_and_economy.place_dust} onChange={(e) => {
                                    myContext.handleBooleanCheckbox(e.target.id,"home_and_economy","place_dust");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Humo de Leña</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 7" id="home_and_economy cb 7-2" checked={myContext.formState.home_and_economy.place_wood_smoke} onChange={(e) => {
                                    myContext.handleBooleanCheckbox(e.target.id,"home_and_economy","place_wood_smoke");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Otros</div>
                            <div className="form-group col-md-4">
                                <textarea className="form-control form-pat" rows="1" value={myContext.formState.home_and_economy.place_others_exposition} onChange={(e) => {
                                    myContext.updateFormState("home_and_economy","place_others_exposition", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
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
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 8" id="home_and_economy cb 8-1" value="0 a 2" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","electrodomestics");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">3 a 4</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 8" id="home_and_economy cb 8-2" value="3 a 4" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","electrodomestics");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">5 o Más</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 8" id="home_and_economy cb 8-3" value="5 o Más" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","electrodomestics");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">Abaníco</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 9" id="home_and_economy cb 9-1" value="Abaníco" onChange={(e) => {
                                    //myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","air_conditioner");
                                    myContext.handleBooleanCheckbox(e.target.id,"home_and_economy","air_conditioner");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Cooler</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 9" id="home_and_economy cb 9-2" value="Cooler" onChange={(e) => {
                                    // myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","air_conditioner");
                                    myContext.handleBooleanCheckbox(e.target.id,"home_and_economy","air_conditioner");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-4">Aire Acondicionado o Mini Split</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 9" id="home_and_economy cb 9-3" value="Aire Acondicionado o Mini Split" onChange={(e) => {
                                    //myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","air_conditioner");
                                    myContext.handleBooleanCheckbox(e.target.id,"home_and_economy","air_conditioner");
                                    console.log(myContext.formState);
                                }}/>
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
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 10" id="home_and_economy cb 10-1" value="Camión" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","transportation");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-3">Bicicleta o Motocicleta</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 10" id="home_and_economy cb 10-2" value="Bicicleta o Motocicleta" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","transportation");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1">Automóvil</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 10" id="home_and_economy cb 10-3" value="Automóvil" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","transportation");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                        </div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-1">Marca</div>
                            <div className="form-group col-md-2">
                                <textarea className="form-control form-pat" rows="1" value={myContext.formState.home_and_economy.car_brand} onChange={(e) => {
                                    myContext.updateFormState("home_and_economy","car_brand", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-1" />
                            <div className="col-md-1">Modelo</div>
                            <div className="form-group col-md-2">
                                <textarea className="form-control form-pat" rows="1" value={myContext.formState.home_and_economy.car_model} onChange={(e) => {
                                    myContext.updateFormState("home_and_economy","car_model", e.target.value);
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                        </div>
                        <br />

                        <div className="form-text">Área Geográfica</div>
                        <br />

                        <div className="form-row">
                            <div className="col-md-1" />
                            <div className="col-md-3">Del Municipio y su Zona Conurbana</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 11" id="home_and_economy cb 11-1" value="Del Municipio y su Zona Conurbana" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","geographic_area");
                                    console.log(myContext.formState);
                                }}/>
                            </div>
                            <div className="col-md-3">Otros Municipios y Entidades Federativas</div>
                            <div className="form-group col-md-1">
                                <input type="checkbox" className="form-control form-pat" name="home_and_economy cb 11" id="home_and_economy cb 11-2" value="Otros Municipios y Entidades Federativas" onChange={(e) => {
                                    myContext.handleCheckboxGroup(e.target.name,e.target.id,"home_and_economy","geographic_area");
                                    console.log(myContext.formState);
                                }}/>
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

                        <form >
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Energía Eléctrica</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num1} onChange={(e)=> {
                                        this._changeNum1(e);
                                        myContext.updateFormState("home_and_economy","outcome_electric_power", e.target.value);
                                        console.log(myContext.formState);
                                    }}min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Agua</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num2} onChange={(e)=> {
                                        this._changeNum2(e);
                                        myContext.updateFormState("home_and_economy","outcome_water", e.target.value);
                                        console.log(myContext.formState);
                                    }} min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Gas</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num3} onChange={(e)=> {
                                        this._changeNum3(e);
                                        myContext.updateFormState("home_and_economy","outcome_gas", e.target.value);
                                        console.log(myContext.formState);
                                    }} min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Teléfono</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num4} onChange={(e)=> {
                                        this._changeNum4(e);
                                        myContext.updateFormState("home_and_economy","outcome_phone", e.target.value);
                                        console.log(myContext.formState);
                                    }} min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Alimentación</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num5} onChange={(e)=> {
                                        this._changeNum5(e);
                                        myContext.updateFormState("home_and_economy","outcome_food", e.target.value);
                                        console.log(myContext.formState);
                                    }} min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Renta</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num6} onChange={(e)=> {
                                        this._changeNum6(e);
                                        myContext.updateFormState("home_and_economy","outcome_rent", e.target.value);
                                        console.log(myContext.formState);
                                    }} min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Transporte (o Gasolina)</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num7} onChange={(e)=> {
                                        this._changeNum7(e);
                                        myContext.updateFormState("home_and_economy","outcome_transportation", e.target.value);
                                        console.log(myContext.formState);
                                    }} min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Educación</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num8} onChange={(e)=> {
                                        this._changeNum8(e);
                                        myContext.updateFormState("home_and_economy","outcome_education", e.target.value);
                                        console.log(myContext.formState);
                                    }} min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Vestido</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num9} onChange={(e)=> {
                                        this._changeNum9(e);
                                        myContext.updateFormState("home_and_economy","outcome_clothing", e.target.value);
                                        console.log(myContext.formState);
                                    }} min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Diversión</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num10} onChange={(e)=> {
                                        this._changeNum10(e);
                                        myContext.updateFormState("home_and_economy","outcome_recreational", e.target.value);
                                        console.log(myContext.formState);
                                    }} min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-1" />
                                <div className="form-group col-md-3">Otros</div>
                                <div className="form-group col-md-2">
                                    <input type="number" className="form-control form-pat" placeholder="$" value={this.state.num11} onChange={(e)=> {
                                        this._changeNum11(e);
                                        myContext.updateFormState("home_and_economy","outcome_other", e.target.value);
                                        console.log(myContext.formState);
                                    }} min="0" step="any" />           
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-3" />
                                <div className="form-group col-md-1 form-text">Total</div>
                                <div className="form-group col-md-2">
                                    <p className="form-control form-pat">$ {this.state.result}</p>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </Collapse>
            </>
        )
    }
}

QuintaIteracion.contextType = FormContext;

export default QuintaIteracion;

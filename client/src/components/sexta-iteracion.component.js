import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class SextaIteracion extends Component {
    render() {
        return (
            <>
                <div className="form-title">Alimentación</div>
                <br />

                <div className="form-row col-md-12">
                    <div className=" form-text col-md-3">¿Cómo lo considera?</div>
                    <div className="col-md-1">Buena</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="col-md-1">Mala</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="col-md-1">Regular</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                </div>
                <br />

                <div className="form-row col-md-12">
                    <div className="form-text col-md-3">Número de Comidas al Día:</div>
                    <div className="form-group col-md-2">
                        <textarea className="form-control form-pat" rows="1"/>
                    </div>
                </div>
                <br />

                <div className="form-row col-md-12">
                    <div className="form-text col-md-2">Preparación de los Alimentos:</div>
                    <div className="col-md-1" />
                    <div className="form-group col-md-6">
                        <textarea className="form-control form-pat" rows="3" />
                    </div>
                </div>
                <br />

                <div className="form-row col-md-12">
                    <div className="form-text col-md-3">Cantidad de Agua al Día:</div>
                    <div className="form-group col-md-3">
                        <textarea className="form-control form-pat" rows="1" />
                    </div>
                </div>
                <br />

                <div className="form-title">Tipo de Alimentación</div>
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
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>

                    <div className="col-md-1" />
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                </div>

                <div className="form-row col-md-12">
                    <div className="col-md-3">Pollo</div>
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>

                    <div className="col-md-1" />
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                </div>

                <div className="form-row col-md-12">
                    <div className="col-md-3">Pescado</div>
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>

                    <div className="col-md-1" />
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                </div>

                <div className="form-row col-md-12">
                    <div className="col-md-3">Granos (Frijol, Maíz, Arroz)</div>
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>

                    <div className="col-md-1" />
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                </div>

                <div className="form-row col-md-12">
                    <div className="col-md-3">Lácteos</div>
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>

                    <div className="col-md-1" />
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                </div>

                <div className="form-row col-md-12">
                    <div className="col-md-3">Pan</div>
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>

                    <div className="col-md-1" />
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                </div>

                <div className="form-row col-md-12">
                    <div className="col-md-3">Pan/Pastas</div>
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>

                    <div className="col-md-1" />
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                </div>

                <div className="form-row col-md-12">
                    <div className="col-md-3">Verduras y/o Frutas</div>
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>

                    <div className="col-md-1" />
                    <div className="">1</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">2</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                    <div className="">3</div>
                    <div className="form-group col-md-1">
                        <input type="checkbox" className="form-control form-pat" />
                    </div>
                </div>
            </>
        )
    }
}

export default SextaIteracion;
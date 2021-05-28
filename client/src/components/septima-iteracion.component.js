import React, { Component, useState } from "react";
import { Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class SeptimaIteracion extends Component {
    render() {
        return (
            <>
                <div className="form-title">
                    Higiene
                </div>
                <br />

                <div className="form-row col-md-12">
                    <div className="form-text col-md-3">¿Cuántas veces a la semana se baña?</div>
                    <div className="col-md-1"/>
                    <div className="form-group col-md-8">
                        <textarea className="form-control form-pat" rows="1" />
                    </div>
                </div>
                <br />

                <div className="form-row col-md-12">
                    <div className="form-text col-md-3">¿Cuántas veces se cepilla los dientes?</div>
                    <div className="col-md-1"/>
                    <div className="form-group col-md-8">
                        <textarea className="form-control form-pat" rows="1" />
                    </div>
                </div>
                <br />

                <div className="form-row col-md-12">
                    <div className="form-text col-md-3">Higiene del Hogar:</div>
                    <div className="col-md-1"/>
                    <div className="form-group col-md-8">
                        <textarea className="form-control form-pat" rows="4" />
                    </div>
                </div>
                <br />

                <div className="form-row col-md-12">
                    <div className="form-title col-md-3">Actividad Física</div>
                    <div className="col-md-1"/>
                    <div className="form-group col-md-8">
                        <textarea className="form-control form-pat" rows="6" />
                    </div>
                </div>
                <br />

                <div className="form-row col-md-12">
                    <div className="form-title col-md-3">Pasatiempo</div>
                    <div className="col-md-1"/>
                    <div className="form-group col-md-8">
                        <textarea className="form-control form-pat" rows="6" />
                    </div>
                </div>
            </>
        )
    }
}

export default SeptimaIteracion;
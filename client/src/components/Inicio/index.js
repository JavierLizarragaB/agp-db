import React, { Component } from "react";
import logo from '../../img/papanico.png';


export default class Inicio extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="250" class="d-inline-block align-top" alt="" />
                    </a>
                </nav>
            </div>
        );
    }
}

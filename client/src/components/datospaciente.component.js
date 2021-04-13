import React, { Component } from "react";

export default class DatosPaciente extends Component {
    render() {
        return (
            <div class="datos-paciente">
                <form>
                    
                        <h3>Datos Paciente</h3>
                        <h4>Domicilio Temporal</h4>

                        <table>
                        
                        <tr>                       
                        <td>
                        <div className="form-group">
                            <label>Calle</label>
                            <input type="text" className="form-control" placeholder="Ingresa calle" />
                        </div>
                        </td>

                        <td>
                        <div className="form-group">
                            <label>Número</label>
                            <input type="text" className="form-control" placeholder="Ingresa número del domicilio" />
                        </div>
                        </td>

                        <td>
                        <div className="form-group">
                            <label>Colonia</label>
                            <input type="text" className="form-control" placeholder="Ingresa colonia" />
                        </div>
                        </td>
                        </tr>

                        <tr>
                        <td>    
                            <label for="Localidad">Localidad</label>
                            <div class="dropdown">
                                <select name="Localidad" id="Localidad">
                                <optgroup label="México">
                                    <option value="Sonora">Sonora</option>
                                    <option value="Chihuahua">Chihuahua</option>
                                    <option value="Baja California">Baja California</option>
                                </optgroup>
                                </select>
                            </div>
                        </td>
                        <td>
                            <label for="Municipio">Municipio</label>
                                <select name="Municipio" id="Municipio">
                                    <option value="Hermosillo">Hermosillo</option>
                                    <option value="Ciudad Obregón">Ciudad Obregón</option>
                                    <option value="Ures">Ures</option>
                                </select>
                        </td>
                        <td>
                            <div className="form-group">
                            <label>C.P.</label>
                            <input type="text" className="form-control" placeholder="Ingresa C.P." />
                            </div>
                        </td>
                        </tr>

                        <tr>                       
                        <td>
                        <div className="form-group">
                            <label>Telefóno 1</label>
                            <input type="text" className="form-control" placeholder="Ingresa número telefónico" />
                        </div>
                        </td>

                        <td>
                        <div className="form-group">
                            <label>Teléfono 2</label>
                            <input type="text" className="form-control" placeholder="Ingresa otro número telefónico" />
                        </div>
                        </td>
                        </tr>
                        </table>

                        <h3>Familiar Responsable</h3>
                        <h4>Domicilio</h4>

                        <table>
                        <tr>                       
                        <td>
                        <div className="form-group">
                            <label>Calle</label>
                            <input type="text" className="form-control" placeholder="Ingresa calle" />
                        </div>
                        </td>

                        <td>
                        <div className="form-group">
                            <label>Número</label>
                            <input type="text" className="form-control" placeholder="Ingresa número del domicilio" />
                        </div>
                        </td>

                        <td>
                        <div className="form-group">
                            <label>Colonia</label>
                            <input type="text" className="form-control" placeholder="Ingresa colonia" />
                        </div>
                        </td>
                        </tr>

                        <tr>
                        <td>    
                            <label for="Localidad">Localidad</label>
                            <div class="dropdown">
                                <select name="Localidad" id="Localidad">
                                <optgroup label="México">
                                    <option value="Sonora">Sonora</option>
                                    <option value="Chihuahua">Chihuahua</option>
                                    <option value="Baja California">Baja California</option>
                                </optgroup>
                                </select>
                            </div>
                        </td>
                        <td>
                            <label for="Municipio">Municipio</label>
                                <select name="Municipio" id="Municipio">
                                    <option value="Hermosillo">Hermosillo</option>
                                    <option value="Ciudad Obregón">Ciudad Obregón</option>
                                    <option value="Ures">Ures</option>
                                </select>
                        </td>
                        <td>
                            <div className="form-group">
                            <label>C.P.</label>
                            <input type="text" className="form-control" placeholder="Ingresa C.P." />
                            </div>
                        </td>
                        </tr>

                        <tr>                       
                        <td>
                        <div className="form-group">
                            <label>Telefóno 1</label>
                            <input type="text" className="form-control" placeholder="Ingresa número telefónico" />
                        </div>
                        </td>

                        <td>
                        <div className="form-group">
                            <label>Teléfono 2</label>
                            <input type="text" className="form-control" placeholder="Ingresa otro número telefónico" />
                        </div>
                        </td>
                        </tr>

                        </table>

                        
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">log in?</a>
                        </p>

                    
                </form>
                <div class="push"></div>
            </div>

            

            
        );
    }
}
import React, { useState } from "react";
import Axios from 'axios';

export const Login = () =>{

        const [user, getUser] = useState('')
        const [passwrd, getPasswrd] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault();
            Axios.post('/login', {
                user,
                passwrd
            }).then((response) => {
                console.log(response);
            });
        };
        
        return (
            <form>

                <div className="form-group">
                    <label><b>Correo</b></label>
                    <input type="email" className="form-control" onChange={(e) => {getUser(e.target.value)}} placeholder="Correo" autoFocus required />
                </div>

                <div className="form-group">
                    <label><b>Contraseña</b></label>
                    <input type="password" className="form-control" onChange={(e) => {getPasswrd(e.target.value)}} placeholder="Contraseña" required />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" required />
                        <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                    </div>
                </div>

                <button onClick={handleSubmit} className="btn btn-custom btn-lg btn-block"><b>Ingresar</b></button>
                <p className="forgot-password text-right">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </p>

                
            </form>
        );
    }

export default Login;